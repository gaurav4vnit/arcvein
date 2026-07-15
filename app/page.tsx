import { ArcVeinWay } from "@/components/arcvein-way";
import { Hero } from "@/components/hero";
import { HowWeThink } from "@/components/how-we-think";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ArcVeinWay />
        <HowWeThink />
      </main>
    </>
  );
}
