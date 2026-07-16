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

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

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

      const result = (await response.json()) as {
        message?: string;
        success?: boolean;
      };

      if (!response.ok) {
        throw new Error(
          result.message ?? "We could not send your enquiry.",
        );
      }

      form.reset();

      setStatus({
        state: "success",
        message:
          "Thank you. We received your enquiry and will review it carefully.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
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
      <TextField
        id="name"
        name="name"
        label="Your Name"
        placeholder="John Smith"
        autoComplete="name"
        maxLength={100}
        required
      />

      <TextField
        id="email"
        name="email"
        type="email"
        label="Work Email"
        placeholder="john@company.com"
        autoComplete="email"
        maxLength={200}
        required
      />

      <TextField
        id="company"
        name="company"
        label="Company"
        placeholder="Acme AI"
        autoComplete="organization"
        maxLength={150}
      />

      <TextField
        id="role"
        name="role"
        label="Your Role"
        placeholder="Founder, CTO, Engineering Manager..."
        maxLength={150}
      />


      <div>
        <FieldLabel htmlFor="helpType">How can we help?</FieldLabel>

        <select
          id="helpType"
          name="helpType"
          required
          defaultValue=""
          className="w-full rounded-md border border-foreground/15 bg-background px-4 py-3 text-[15px] text-foreground transition-[border-color,box-shadow] duration-200 hover:border-foreground/25 focus-visible:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <option value="" disabled>
            Select an engagement
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
          <option value="Other">Other</option>
        </select>
      </div>

      <TextField
        id="team"
        name="team"
        label="Engineering Team Size"
        placeholder="5 engineers"
        maxLength={100}
      />

      <TextField
        id="timeline"
        name="timeline"
        label="Expected Timeline"
        placeholder="ASAP / 2 months / Exploring"
        maxLength={150}
      />

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <TextArea
        id="project"
        name="project"
        rows={8}
        label="Tell us about your project"
        placeholder="Describe your product, engineering challenge, technical goals and what success looks like."
        maxLength={5000}
        required
      />

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? "Sending enquiry..." : "Send project enquiry"}
      </Button>

      <div aria-live="polite" aria-atomic="true">
        {status.state === "success" ? (
          <div
            role="status"
            className="border border-emerald-400/25 bg-emerald-400/[0.04] p-4 text-sm leading-6 text-emerald-200"
          >
            {status.message}
          </div>
        ) : null}

        {status.state === "error" ? (
          <div
            role="alert"
            className="border border-red-400/25 bg-red-400/[0.04] p-4 text-sm leading-6 text-red-200"
          >
            {status.message} You may also email{" "}
            <a
              href="mailto:hello@arcvein.com"
              className="underline underline-offset-4"
            >
              hello@arcvein.com
            </a>
            .
          </div>
        ) : null}
      </div>
    </form>
  );
}
