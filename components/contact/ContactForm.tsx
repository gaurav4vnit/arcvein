"use client";

import type { FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { TextArea, TextField } from "@/components/ui/Field";
import { contactContent } from "@/lib/site";

export function ContactForm() {
  const { form } = contactContent;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className="space-y-6"
      action="#"
      method="post"
      noValidate
      aria-label="Contact ArcVein"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label={form.nameLabel}
        type="text"
        autoComplete="name"
        required
      />
      <TextField
        id="email"
        name="email"
        label={form.emailLabel}
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        id="company"
        name="company"
        label={form.companyLabel}
        optional={form.companyOptional}
        type="text"
        autoComplete="organization"
      />
      <TextArea
        id="project"
        name="project"
        label={form.projectLabel}
        required
      />
      <div className="pt-2">
        <Button type="submit" size="lg">
          {form.submitLabel}
        </Button>
      </div>
    </form>
  );
}
