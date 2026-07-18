"use client";

import {
  type FormEvent,
  useState,
} from "react";

import { Button } from "@/components/ui/Button";
import { FieldLabel, TextArea, TextField } from "@/components/ui/Field";

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

type ContactFormProps = {
  consultation?: string;
};

export function ContactForm({
  consultation,
}: ContactFormProps) {
  const isStrategySession =
    consultation === "strategy-session";

  const [status, setStatus] = useState<FormStatus>({ state: "idle" });
  const [helpType, setHelpType] = useState(() =>
    isStrategySession
      ? "Free 1-Hour Trading Technology Strategy Session"
      : "",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send enquiry.");
      }

      form.reset();
      setHelpType("");

      setStatus({
        state: "success",
        message:
          "Thank you. We received your enquiry and will get back to you shortly.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      });
    }
  }

  const submitting = status.state === "submitting";

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      aria-label="Contact ArcVein"
    >
      {isStrategySession && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Complimentary Consultation
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Free 1-Hour Trading Technology Strategy Session
          </h2>

          <p className="mt-3 text-muted leading-7">
            During this session we&apos;ll discuss your trading platform,
            architecture, engineering team, exchange connectivity,
            market data strategy and answer your technical questions.
          </p>
        </div>
      )}

      <TextField
        id="name"
        name="name"
        label="Your Name"
        placeholder="John Smith"
        autoComplete="name"
        required
      />

      <TextField
        id="email"
        name="email"
        type="email"
        label="Work Email"
        placeholder="john@company.com"
        autoComplete="email"
        required
      />

      <TextField
        id="company"
        name="company"
        label="Company"
        placeholder="Acme Capital"
      />

      <TextField
        id="role"
        name="role"
        label="Your Role"
        placeholder="CTO, Founder..."
      />

      <div>
        <FieldLabel htmlFor="helpType">How can we help?</FieldLabel>

        <select
          id="helpType"
          name="helpType"
          required
          value={helpType}
          onChange={(e) => setHelpType(e.target.value)}
          className="w-full rounded-md border border-foreground/15 bg-background px-4 py-3"
        >
          <option value="">Select an engagement</option>

          <option value="Free 1-Hour Trading Technology Strategy Session">
            Free 1-Hour Trading Technology Strategy Session
          </option>

          <option value="Dedicated engineering team">
            Dedicated engineering team
          </option>

          <option value="Staff augmentation">
            Staff augmentation
          </option>

          <option value="Trading platform development">
            Trading platform development
          </option>

          <option value="Architecture review">
            Trading architecture review
          </option>

          <option value="Platform modernization">
            Trading platform modernization
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      <TextField
        id="team"
        name="team"
        label="Engineering Team Size"
        placeholder="5 engineers"
      />

      <TextField
        id="timeline"
        name="timeline"
        label="Expected Timeline"
        placeholder="ASAP / 2 months / Exploring"
      />

      <TextArea
        id="project"
        name="project"
        rows={8}
        label="Tell us about your project"
        placeholder="Describe your project..."
        required
      />

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
