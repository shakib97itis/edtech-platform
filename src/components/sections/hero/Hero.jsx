import React from "react";
import HeroSlider from "./HeroSlider";
import HeroCard1 from "./HeroCard1";

function Hero() {
  return (
    <>
      <section className="bg-primary-700 relative">
        {/* ===== CONTAINER SVG PLACEHOLDER ===== */}

        {/* HERO SLIDER */}
        <div className="container mx-auto pb-[100px] md:pb-[200px]">
          <HeroSlider />
        </div>
      </section>
      {/* ===== HERO CARDS ===== */}
      <section>
        <div className="relative z-10 container mx-auto -mt-[50px] grid grid-cols-1 gap-y-[80px] px-[16px] md:-mt-[150px] md:grid-cols-2 md:px-[40px] lg:grid-cols-3 md:gap-x-[16px]">
          <HeroCard1 />
          <HeroCard1 />
          <HeroCard1 />
        </div>
      </section>
    </>
  );
}

export default Hero;
