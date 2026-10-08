import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Faq } from "@/components/Faq";
import { CtaClose } from "@/components/CtaClose";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Faq />
        <CtaClose />
      </main>
      <Footer />
    </>
  );
}
