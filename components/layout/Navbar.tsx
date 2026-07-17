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
          className="shrink-0 rounded-sm transition-opacity duration-200 hover:opacity-90"
          aria-label="ArcVein home"
        >
          <ArcVeinLogo />
        </Link>

        <NavLinks
          ariaLabel="Primary"
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-8 md:gap-10"
        />
      </Container>
    </header>
  );
}
