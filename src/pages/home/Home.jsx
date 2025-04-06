import Button from "../../components/common/button/Button";
import Community from "../../components/sections/community/Community";
import { FaArrowCircleRight, FaExclamationCircle } from "react-icons/fa";
import Hero from "../../components/sections/hero/Hero";
import HowDoesItWork from "../../components/sections/howDoesItWork/HowDoesItWork";
import Navigation from "../../components/sections/navigation/Navigation";
import OurPrograms from "../../components/sections/ourPrograms/OurPrograms";
import WhatWeDo from "../../components/sections/whatWeDo/WhatWeDo";
import { BsPersonFillAdd } from "react-icons/bs";
import Testimonials from "../../components/sections/testimonials/Testimonials";
import TestimonialCard from "../../components/sections/testimonials/TestimonialCard";
import LatestNews from "../../components/sections/latestNews/LatestNews";
import CtaSection from "../../components/sections/ctaSection/CtaSection";
import Footer from "../../components/sections/footer/Footer";
import TabbedSlider from "../../components/sections/tabbedComponent/tabbedSlider";

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
      <section>
        <div className="container mx-auto px-[16px] md:px-[40px]">
          <h1>Heading goes here</h1>
          <div className="py-[20px]">
            <TabbedSlider />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      {/* <div className="flex justify-center pt-[100px]">
<TestimonialCard text="Testimonial text goes here" image="" name="" role="" />
</div> */}

      {/* LATEST NEWS */}
      <LatestNews />

      {/* CTA SECTION */}
      <CtaSection />

      {/* FOOTER SECTION */}
      <Footer />

      {/* BUTTONS DEMO */}
      <div className="p-[10px]">
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
      </div>
    </>
  );
};

export default Home;
