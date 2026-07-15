import { ArcVeinWay } from "@/components/arcvein-way";
import { Capabilities } from "@/components/capabilities";
import { Hero } from "@/components/hero";
import { HowWeThink } from "@/components/how-we-think";
import { HowWeWork } from "@/components/how-we-work";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ArcVeinWay />
        <HowWeThink />
        <HowWeWork />
        <Capabilities />
      </main>
    </>
  );
}
