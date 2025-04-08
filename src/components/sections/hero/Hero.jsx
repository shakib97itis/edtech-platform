import React from "react";
import HeroSlider from "./HeroSlider";
import HeroCard1 from "./HeroCard1";

function Hero() {
  return (
    <>
      <section className=" bg-primary-700 font-primary relative pb-[200px]">
        {/* ===== CONTAINER SVG PLACEHOLDER ===== */}

        {/* HERO SLIDER */}
        <div className="container mx-auto px-[16px] md:px-[40px]">
          <HeroSlider />
        </div>
      </section>

      {/* ===== HERO CARDS ===== */}
      <section className="relative -translate-y-[200px] mb-[-200px]">
        <div className="container mx-auto grid gap-[16px] px-[16px] md:grid-cols-2 md:px-[40px] lg:grid-cols-3">
          <HeroCard1 />
          <HeroCard1 />
          <HeroCard1 />
        </div>
      </section>
    </>
  );
}

export default Hero;
