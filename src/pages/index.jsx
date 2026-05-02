import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";

import ServicesSection from "../components/sections/Services";
import HowItWorksSection from "../components/sections/HowItWorks";
import SkillsSection from "../components/sections/Skills";
import ContactSection from "../components/sections/Contact";
import StatsSection from "../components/sections/Stats";
import ProductsSection from "../components/sections/Products";

const HeroSection = dynamic(() => import("../components/sliders/HeroSlideshow"), { ssr: false });
const TestimonialSlider = dynamic(() => import("../components/sliders/Testimonial"), { ssr: false });

const Home1 = () => (
  <Layouts transparent>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <HowItWorksSection />
    <ProductsSection />
    <SkillsSection />
    <TestimonialSlider />
    <ContactSection />
  </Layouts>
);

export default Home1;

export async function getStaticProps() {
  return { props: {} };
}
