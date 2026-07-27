import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Pillars } from "@/components/Pillars";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Vision />
        <Pillars />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}
