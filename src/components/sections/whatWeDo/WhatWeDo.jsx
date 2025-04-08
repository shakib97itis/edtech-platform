import React from "react";
import Button from "../../common/button/Button";
import HeadingSecondary from "../../common/headings/HeadingSecondaryCenter";
import { FaArrowCircleRight } from "react-icons/fa";
function WhatWeDo() {
  return (
    <section className="py-[60px] md:py-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        <HeadingSecondary className="mb-[30px] md:mb-[55px]">
          What We Do
        </HeadingSecondary>

        {/*  CONTENT */}
        <div className="bg-secondary-300 flex flex-col lg:flex-row">
          {/* CONTENT LEFT */}
          <div className="w-full p-[30px] lg:w-[40%]">
            <h3 className="mb-[20px] text-[20px] leading-[32px] font-medium lg:text-[24px]">
              Bulipe Tech is a dynamic and innovative company
            </h3>
            <p className="mb-6 text-[16px] leading-[1.8] lg:text-[18px]">
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

          {/* CONTENT RIGHT */}
          <div className="w-full bg-amber-500 lg:w-[60%]">
            {/* <div>hello</div> */}
            <img
              src="/what-we-do.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
