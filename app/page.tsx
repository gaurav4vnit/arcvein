import { ArcVeinWay } from "@/components/home/ArcVeinWay";
import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { HowWeThink } from "@/components/home/HowWeThink";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ArcVeinWay />
        <HowWeThink />
        <HowWeWork />
        <Capabilities />
      </main>
      <Footer />
    </>
  );
}
