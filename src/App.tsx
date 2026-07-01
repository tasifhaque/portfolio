import { Hero, TechStack, Projects, Footer } from "@/components/portfolio";
import { FadeIn } from "@/components/portfolio/fade-in";

export default function App() {
  return (
    <div className="mx-auto max-w-5xl flex-1 px-6 pb-8 pt-16">
      <Hero />
      <FadeIn className="mt-24">
        <TechStack />
      </FadeIn>
      <FadeIn className="mt-24">
        <Projects />
      </FadeIn>
      <Footer />
    </div>
  );
}
