import React from "react";
import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";

import ServicesSection from "../components/sections/Services";
import HowItWorksSection from "../components/sections/HowItWorks";
import SkillsSection from "../components/sections/Skills";
import ContactSection from "../components/sections/Contact";
import StatsSection from "../components/sections/Stats";

const HeroSection = dynamic(() => import("../components/sliders/HeroSlideshow"), { ssr: false });
const TestimonialSlider = dynamic(() => import("../components/sliders/Testimonial"), { ssr: false });

const Home1 = (props) => {
  return (
    <Layouts transparent>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <SkillsSection />
      <TestimonialSlider />
      <ContactSection />
    </Layouts>
  );
};

export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  };
}
