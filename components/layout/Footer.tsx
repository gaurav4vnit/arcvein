import Link from "next/link";

import { ArcVeinLogo } from "@/components/brand/ArcVeinLogo";
import { NavLinks } from "@/components/layout/NavLinks";
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

      <Container className="relative py-12 sm:py-14 md:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex rounded-sm transition-opacity duration-200 hover:opacity-90"
              aria-label="ArcVein home"
            >
              <ArcVeinLogo markClassName="h-8" wordmarkClassName="text-[18px]" />
            </Link>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <NavLinks
            ariaLabel="Footer"
            className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8"
          />
        </div>

        <p className="mt-10 text-[13px] text-muted/60 sm:mt-12">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
