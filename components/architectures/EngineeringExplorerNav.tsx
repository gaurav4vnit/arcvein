"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "cpu-threads", label: "CPU & Threads" },
  { id: "critical-path", label: "Critical Path" },
  { id: "supporting-platform", label: "Supporting Platform" },
];

export function EngineeringExplorerNav() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top) -
              Math.abs(right.boundingClientRect.top),
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.1, 0.5],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <Container>
        <nav
          aria-label="Trading platform architecture sections"
          className="overflow-x-auto"
        >
          <div className="flex min-w-max items-center gap-1 py-3">
            {sections.map((section) => {
              const active = activeId === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={active ? "location" : undefined}
                  className={[
                    "relative px-4 py-2 text-xs font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {section.label}

                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-x-4 -bottom-3 h-px origin-left bg-foreground transition-transform duration-200",
                      active ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                  />
                </a>
              );
            })}
          </div>
        </nav>
      </Container>
    </div>
  );
}
