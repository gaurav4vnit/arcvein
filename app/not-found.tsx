import Link from "next/link";

import { SiteShell } from "@/components/layout/SiteShell";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[calc(100svh-4.5rem)] items-center border-b border-border/60 py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Error 404
            </p>

            <h1 className="mt-6 text-5xl font-medium tracking-tight text-foreground sm:text-7xl">
              This route is outside the book.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              The page may have moved, the address may be incorrect, or the
              requested resource may no longer be available.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/" size="lg">
                Return Home
              </ButtonLink>

              <ButtonLink
                href="/architectures/low-latency-trading-platform"
                variant="outline"
                size="lg"
              >
                View Trading Architecture
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-border/60 pt-7">
              <p className="text-sm text-muted">
                Looking for engineering support?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  Contact ArcVein
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
