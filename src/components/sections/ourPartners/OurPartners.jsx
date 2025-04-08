import React, { useRef } from "react";
import OurPartnersSlider from "./OurPartnersSlider";
import HeadingSecondary from "../../common/headings/HeadingSecondaryLeft";
import NavButton from "../../common/button/NavButton";

function OurPartners() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <div className="container mx-auto px-[16px] py-[130px] md:px-[40px]">
        {/* top part */}
        <div className="mb-[40px] flex items-center justify-between">
          <HeadingSecondary>Our Partners</HeadingSecondary>
          <div className="relative flex gap-[10px]">
            <NavButton ref={prevRef} direction="left" />
            <NavButton ref={nextRef} direction="right" />
          </div>
        </div>

        <div className="">
          <OurPartnersSlider prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
