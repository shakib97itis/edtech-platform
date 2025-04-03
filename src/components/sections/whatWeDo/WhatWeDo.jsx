import React from "react";
import img from "../../../assets/what-we-do.png";
import Button from "../../common/button/Button";
import HeadingSecondary from "../../common/headings/HeadingSecondary";
import { FaArrowCircleRight } from "react-icons/fa";
function WhatWeDo() {
  return (
    <section className="py-[60px] md:py-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        <HeadingSecondary className="mb-[30px] md:mb-[55px]">
          What We Do
        </HeadingSecondary>
        {/* content */}
        <div className="bg-secondary-300 flex flex-col items-center md:flex-row">
          {/* left */}
          <div className="w-full p-[30px] md:w-[40%]">
            <h3 className="font-ubuntu text-[24px] leading-[32px] font-medium">
              Bulipe Tech is a dynamic and innovative company
            </h3>
            <p className="mb-6">
              We empower individuals to unlock career opportunities through our
              proven Digital Skill Development program. Partnering with 300
              local organisations and 3,000+ global partners in 21 countries, we
              provide access to top U.S. certifications and salary-based
              employment starting at $250, with the potential to exceed $3,000
              through continuous up-skilling. We empower individuals to unlock
              career opportunities through our proven Digital Skill Development
              program. Partnering with 300 local organisations and 3,000+ global
              partners in 21 countries, we provide access to top U.S.
              certifications and salary-based employment starting at $250, with
              the
            </p>

            <Button
              text="Read More"
              variant="btnFour"
              className="px-[20px] py-[10px]"
            >
              <FaArrowCircleRight />
            </Button>
          </div>
          {/* RIGHT SIDE */}
          <div className="w-full md:w-[60%]">
            <img src={img} alt="" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
