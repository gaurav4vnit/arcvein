import Link from "next/link";

import { ArcVeinLogo } from "@/components/brand/ArcVeinLogo";
import { NavLinks } from "@/components/layout/NavLinks";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3 sm:h-[4.25rem] sm:gap-8 sm:py-0">
        <Link
          href="/"
          className="shrink-0 text-foreground/90 transition-colors duration-200 hover:text-foreground"
          aria-label="ArcVein home"
        >
          <ArcVeinLogo markClassName="h-7 w-7 sm:h-8 sm:w-8" wordmarkClassName="text-[15px] sm:text-base" />
        </Link>

        <NavLinks
          ariaLabel="Primary"
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-8 md:gap-10"
        />
      </Container>
    </header>
  );
}
