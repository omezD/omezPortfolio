import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { OpenSource } from "@/components/OpenSource";
import { PointerEffects } from "@/components/PointerEffects";
import { RevealObserver } from "@/components/RevealObserver";
import { Testimonials } from "@/components/Testimonials";
import { Work } from "@/components/Work";
import { features } from "@/content";

export default function Home() {
  return (
    // overflow-clip (not hidden) so the header can stay sticky.
    <div className="page-ground relative min-h-screen overflow-clip">
      <a
        href="#main"
        className="sr-only z-30 rounded-md bg-surface px-4 py-2 text-text focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <PointerEffects glow={features.cursorGlow} parallaxTargetId="top" />
      <Header />
      <main id="main">
        <Hero />
        {features.marquee && <Marquee />}
        <Work />
        <About />
        <Experience />
        <OpenSource />
        <Testimonials />
        <Contact />
      </main>
      {features.scrollReveal && <RevealObserver />}
    </div>
  );
}
