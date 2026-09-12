// Components
import About from "@/components/About";
import DevFooter from "@/components/DevFooter";
import DevHeader from "@/components/DevHeader";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <DevHeader />
      <Hero />
      <About />
      <Work />
      <Reviews />
      <DevFooter />
    </main>
  );
}
