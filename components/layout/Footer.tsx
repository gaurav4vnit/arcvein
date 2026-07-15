import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/[0.06]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 engineering-grid"
      />

      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-sm font-normal tracking-tight text-foreground/90 transition-colors hover:text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-wide text-muted/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-[13px] text-muted/60">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
