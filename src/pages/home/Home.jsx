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
      <HowDoesItWork />

      {/* OUR PROGRAMS */}
      <OurPrograms />

      {/* COMMUNITY SECTION */}
      <Community />

      {/* OUR PARTNERS SECTION */}
      <OurPartners />

      {/* TESTIMONIAL SECTION */}
      <div className="flex justify-center pt-[100px]">
        <TestimonialCard
          text="Testimonial text goes here"
          image=""
          name=""
          role=""
        />
      </div>

      {/* LATEST NEWS */}
      <LatestNews />

      {/* CTA SECTION */}
      <CtaSection />

      {/* FOOTER SECTION */}
      <Footer />

      {/* BUTTONS DEMO */}
      {/* <div className="p-[10px]">
        <Button
          variant={"btnOne"}
          text={"Button One"}
          className="px-[30px] py-[8px]"
        >
          <BsPersonFillAdd />
        </Button>

        <Button
          variant={"btnTwo"}
          text={"Button Two"}
          className="mb-1 px-[20px] py-[10px]"
        >
          <FaExclamationCircle />
        </Button>

        <Button
          variant={"btnTwo"}
          text={"Button Two V1"}
          className="mb-1 border-2 px-[30px] py-[8px]"
        ></Button>

        <Button
          variant={"btnThree"}
          text={"Button Three"}
          className="mb-1 px-[20px] py-[10px]"
        >
          <FaArrowCircleRight />
        </Button>

        <Button
          variant={"btnFour"}
          text={"Button Four"}
          className="mb-1 px-[10px] py-[5px]"
        >
          <FaArrowCircleRight />
        </Button>
      </div> */}
    </>
  );
};

export default Home;
