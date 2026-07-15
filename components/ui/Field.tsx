import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

const fieldClassName = cn(
  "w-full rounded-md border border-foreground/15 bg-transparent px-4 py-3",
  "text-[15px] text-foreground placeholder:text-muted/50",
  "transition-[border-color,box-shadow] duration-200",
  "hover:border-foreground/25",
  "focus-visible:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
);

type FieldLabelProps = {
  htmlFor: string;
  children: ReactNode;
  optional?: string;
};

export function FieldLabel({ htmlFor, children, optional }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2.5 flex items-baseline gap-2 text-[13px] tracking-wide text-muted"
    >
      <span>{children}</span>
      {optional ? (
        <span className="text-muted/60">({optional})</span>
      ) : null}
    </label>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  optional?: string;
};

export function TextField({
  id,
  label,
  optional,
  className,
  ...props
}: TextFieldProps) {
  const fieldId = id ?? props.name;

  if (!fieldId) {
    throw new Error("TextField requires an id or name.");
  }

  return (
    <div>
      <FieldLabel htmlFor={fieldId} optional={optional}>
        {label}
      </FieldLabel>
      <input
        id={fieldId}
        className={cn(fieldClassName, className)}
        {...props}
      />
    </div>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function TextArea({
  id,
  label,
  className,
  rows = 6,
  ...props
}: TextAreaProps) {
  const fieldId = id ?? props.name;

  if (!fieldId) {
    throw new Error("TextArea requires an id or name.");
  }

  return (
    <div>
      <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
      <textarea
        id={fieldId}
        rows={rows}
        className={cn(fieldClassName, "min-h-[9rem] resize-y", className)}
        {...props}
      />
    </div>
  );
}
