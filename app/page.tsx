import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import ResearchAreas from "@/components/home/ResearchAreas";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <ResearchAreas />
      <Products />
      <CTA />
    </main>
  );
}