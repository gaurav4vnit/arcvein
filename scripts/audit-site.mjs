import fs from "node:fs/promises";

const baseUrl = (
  process.argv[2] ?? "https://www.arcvein.com"
).replace(/\/$/, "");

const queue = [`${baseUrl}/`];
const visited = new Set();
const failures = [];
const pages = [];

function normalizeUrl(rawUrl, currentUrl) {
  try {
    const url = new URL(rawUrl, currentUrl);

    if (url.origin !== new URL(baseUrl).origin) {
      return null;
    }

    if (
      url.protocol !== "http:" &&
      url.protocol !== "https:"
    ) {
      return null;
    }

    url.hash = "";

    if (
      /\.(png|jpg|jpeg|gif|webp|svg|ico|pdf|zip|xml|txt)$/i.test(
        url.pathname,
      )
    ) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function extractLinks(html, currentUrl) {
  const links = new Set();
  const expression = /(?:href|src)=["']([^"'#]+)["']/gi;

  for (const match of html.matchAll(expression)) {
    const normalized = normalizeUrl(match[1], currentUrl);

    if (normalized) {
      links.add(normalized);
    }
  }

  return [...links];
}

function extractMeta(html, property) {
  const patterns = [
    new RegExp(
      `<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${property}["']`,
      "i",
    ),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return null;
}

while (queue.length > 0) {
  const currentUrl = queue.shift();

  if (!currentUrl || visited.has(currentUrl)) {
    continue;
  }

  visited.add(currentUrl);

  try {
    const response = await fetch(currentUrl, {
      redirect: "follow",
      headers: {
        "user-agent": "ArcVeinSiteAudit/1.0",
      },
    });

    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok) {
      failures.push({
        url: currentUrl,
        status: response.status,
        reason: "HTTP failure",
      });
      continue;
    }

    if (!contentType.includes("text/html")) {
      continue;
    }

    const html = await response.text();
    const links = extractLinks(html, currentUrl);
    const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim() ?? null;
    const description =
      html.match(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i,
      )?.[1] ??
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i,
      )?.[1] ??
      null;

    const canonical =
      html.match(
        /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
      )?.[1] ??
      html.match(
        /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i,
      )?.[1] ??
      null;

    const ogImage = extractMeta(html, "og:image");

    pages.push({
      url: currentUrl,
      status: response.status,
      title,
      description,
      canonical,
      ogImage,
      internalLinkCount: links.length,
    });

    if (!title) {
      failures.push({
        url: currentUrl,
        reason: "Missing title",
      });
    }

    if (!description) {
      failures.push({
        url: currentUrl,
        reason: "Missing meta description",
      });
    }

    if (!canonical) {
      failures.push({
        url: currentUrl,
        reason: "Missing canonical URL",
      });
    }

    if (!ogImage) {
      failures.push({
        url: currentUrl,
        reason: "Missing Open Graph image",
      });
    }

    for (const link of links) {
      if (!visited.has(link)) {
        queue.push(link);
      }
    }
  } catch (error) {
    failures.push({
      url: currentUrl,
      reason:
        error instanceof Error
          ? error.message
          : "Unknown request error",
    });
  }
}

for (const path of [
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/twitter-image",
  "/icon",
  "/apple-icon",
]) {
  const url = `${baseUrl}${path}`;

  try {
    const response = await fetch(url, {
      redirect: "follow",
    });

    if (!response.ok) {
      failures.push({
        url,
        status: response.status,
        reason: "Required asset unavailable",
      });
    }
  } catch (error) {
    failures.push({
      url,
      reason:
        error instanceof Error
          ? error.message
          : "Required asset request failed",
    });
  }
}

const report = {
  auditedAt: new Date().toISOString(),
  baseUrl,
  pageCount: pages.length,
  failureCount: failures.length,
  pages,
  failures,
};

await fs.mkdir("audit-results", { recursive: true });
await fs.writeFile(
  "audit-results/site-audit.json",
  JSON.stringify(report, null, 2),
);

console.log(`Audited ${pages.length} HTML pages.`);

if (failures.length === 0) {
  console.log("PASS: No broken links or metadata failures found.");
  process.exit(0);
}

console.error(`FAIL: ${failures.length} issue(s) found.`);

for (const failure of failures) {
  console.error(
    `- ${failure.status ?? "ERROR"} ${failure.url}: ${failure.reason}`,
  );
}

process.exit(1);
