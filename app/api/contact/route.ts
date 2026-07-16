import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  team?: unknown;
  timeline?: unknown;
  helpType?: unknown;
  project?: unknown;
  website?: unknown;
};

function text(value: unknown, maximumLength: number): string {
  return typeof value === "string"
    ? value.trim().slice(0, maximumLength)
    : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;
    const sender =
      process.env.CONTACT_FROM_EMAIL ??
      "ArcVein Website <onboarding@resend.dev>";

    if (!apiKey || !recipient) {
      console.error("Missing Resend contact-form configuration.");

      return Response.json(
        { message: "The contact service is not configured." },
        { status: 500 },
      );
    }

    const payload = (await request.json()) as ContactPayload;

    // Honeypot field. Real users never see or complete this.
    if (text(payload.website, 200)) {
      return Response.json({ success: true });
    }

    const name = text(payload.name, 100);
    const email = text(payload.email, 200);
    const company = text(payload.company, 150);
    const role = text(payload.role, 150);
    const team = text(payload.team, 100);
    const timeline = text(payload.timeline, 150);
    const helpType = text(payload.helpType, 150);
    const project = text(payload.project, 5000);

    if (!name || !email || !helpType || !project) {
      return Response.json(
        { message: "Name, work email, engagement type and project details are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { message: "Please enter a valid work email." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `New ArcVein enquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#111827">
          <h1 style="font-size:24px;margin-bottom:24px">
            New ArcVein project enquiry
          </h1>

          <table style="width:100%;border-collapse:collapse">
            <tbody>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Name</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Email</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Company</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(company || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Role</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(role || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>How can ArcVein help?</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(helpType)}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Team size</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(team || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Timeline</strong></td>
                <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(timeline || "Not provided")}</td>
              </tr>
            </tbody>
          </table>

          <h2 style="font-size:18px;margin-top:30px">Project details</h2>
          <p style="white-space:pre-wrap;line-height:1.7">${escapeHtml(project)}</p>
        </div>
      `,
      text: [
        "New ArcVein project enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Role: ${role || "Not provided"}`,
        `Engagement: ${helpType}`,
        `Team size: ${team || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        "",
        "Project details:",
        project,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { message: "We could not send your enquiry. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return Response.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
