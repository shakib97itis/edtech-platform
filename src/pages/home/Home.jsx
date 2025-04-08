import React from "react";
import Community from "../../components/sections/community/Community";
import Hero from "../../components/sections/hero/Hero";
import HowDoesItWork from "../../components/sections/howDoesItWork/HowDoesItWork";
import Navigation from "../../components/sections/navigation/Navigation";
import OurPrograms from "../../components/sections/ourPrograms/OurPrograms";
import WhatWeDo from "../../components/sections/whatWeDo/WhatWeDo";
import LatestNews from "../../components/sections/latestNews/LatestNews";
import CtaSection from "../../components/sections/ctaSection/CtaSection";
import Footer from "../../components/sections/footer/Footer";
import OurPartners from "../../components/sections/ourPartners/OurPartners";
import TestimonialCard from "../../components/sections/testimonials/TestimonialCard";
import Testimonials from "../../components/sections/testimonials/Testimonials";
import FeaturedNews from "../../components/sections/featuredNews/FeaturedNews";

const Home = () => {
  return (
    <>
      {/* NAV SECTION */}
      <Navigation />

      {/* HERO SECTION */}
      <Hero />

      {/* WHAT WE DO SECTION */}
      <WhatWeDo />

      {/* HOW DOES IT WORKS SECTION */}
      <HowDoesItWork /> {/* Skipped */}

      {/* OUR PROGRAMS */}
      <OurPrograms />

  {/* Working on it */}
      {/* COMMUNITY SECTION */}
      <Community />

      {/* OUR PARTNERS SECTION */}
      <OurPartners />

      {/* TESTIMONIAL SECTION */}
      <Testimonials />

      {/* LATEST NEWS */}
      <LatestNews />

      {/* FEATURED NEWS */}
      <FeaturedNews />

      {/* CTA SECTION */}
      <CtaSection />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default Home;
