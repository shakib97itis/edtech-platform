import React from "react";
import OurPartnersSlider from "./OurPartnersSlider";
import HeadingSecondary from "../../common/headings/HeadingSecondaryLeft";
import NavButton from "../../common/button/NavButton";

function OurPartners() {

  return (
    <section>
      <div className="container mx-auto px-[16px] py-[130px] md:px-[40px]">
        {/* top part */}
        <div className="mb-[40px] flex items-center justify-between">
          <HeadingSecondary>Our Partners</HeadingSecondary>
          <div className="relative flex gap-[10px]">
            <NavButton direction="left" />
            <NavButton direction="right" />
          </div>
        </div>

        <div className="">
          <OurPartnersSlider />
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
