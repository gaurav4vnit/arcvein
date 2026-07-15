"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

type NavLinksProps = {
  ariaLabel: string;
  className?: string;
  linkClassName?: string;
};

export function NavLinks({
  ariaLabel,
  className,
  linkClassName,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel} className={className}>
      {siteConfig.nav.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-[13px] tracking-wide transition-colors duration-200",
              isActive
                ? "text-foreground"
                : "text-muted/80 hover:text-foreground",
              linkClassName,
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
