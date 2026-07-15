import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <Container className="flex h-16 items-center justify-between sm:h-[4.25rem]">
        <Link
          href="/"
          className="font-heading text-sm font-normal tracking-tight text-foreground/90 transition-colors hover:text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-muted/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
