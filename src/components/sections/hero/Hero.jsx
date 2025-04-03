import React from "react";
import HeroSlider from "./HeroSlider";
import HeroCard from "./HeroCard"

function Hero() {
  return (
    <>
      <section className="relative bg-[#023047]">
        {/* ===== CONTAINER SVG ===== */}
        <div className="container mx-auto pb-[100px] md:pb-[200px]">
          <HeroSlider />
        </div>
      </section>

      <section>
        <div className="relative z-10 container mx-auto -mt-[50px] grid grid-cols-1 gap-4 px-[16px] md:-mt-[150px] md:grid-cols-2 md:px-[40px] lg:grid-cols-3">
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
      </section>
    </>
  );
}

export default Hero;
