import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col outline-none"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
