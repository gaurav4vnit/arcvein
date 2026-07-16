import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Dedicated Engineering Teams",
  description:
    "Dedicated C++ and backend engineering teams for trading platforms, capital markets technology and exchange infrastructure.",
  path: "/engineering-teams",
});

export default function EngineeringTeamsPage() {
  return (
    <SiteShell>

      <section className="border-b border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Dedicated Engineering Teams
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tight">
            Add experienced trading engineers to your team.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            ArcVein provides experienced C++ and backend engineers
            who integrate directly into your product organization.

            Whether you need one engineer or an embedded delivery team,
            we help accelerate trading platform development.
          </p>

        </div>
      </section>

      <section className="border-b border-border/60 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-medium">
            Typical Engagements
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-xl border p-8">
              <h3 className="text-xl font-medium">
                Staff Augmentation
              </h3>

              <p className="mt-4 text-muted">
                Add experienced engineers to an existing team with minimal onboarding.
              </p>
            </div>

            <div className="rounded-xl border p-8">
              <h3 className="text-xl font-medium">
                Embedded Engineering Teams
              </h3>

              <p className="mt-4 text-muted">
                Small focused teams working alongside your engineers.
              </p>
            </div>

            <div className="rounded-xl border p-8">
              <h3 className="text-xl font-medium">
                Platform Development
              </h3>

              <p className="mt-4 text-muted">
                Build complete trading platforms, OMS, market data systems and exchange connectivity.
              </p>
            </div>

            <div className="rounded-xl border p-8">
              <h3 className="text-xl font-medium">
                Long-Term Partnerships
              </h3>

              <p className="mt-4 text-muted">
                Scale engineering capability as your product grows.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-medium">
            Engineering Expertise
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border p-8">
              Trading Platforms
            </div>

            <div className="rounded-xl border p-8">
              Market Data Systems
            </div>

            <div className="rounded-xl border p-8">
              Exchange Connectivity
            </div>

            <div className="rounded-xl border p-8">
              OMS / EMS
            </div>

            <div className="rounded-xl border p-8">
              Risk Systems
            </div>

            <div className="rounded-xl border p-8">
              Modern C++
            </div>

          </div>

        </div>

      </section>

    </SiteShell>
  );
}
