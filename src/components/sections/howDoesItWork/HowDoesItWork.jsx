import React from "react";
import HeadingSecondary from "../../common/headings/HeadingSecondaryCenter";
import WorkCard1 from "./WorkCard1";
import WorkCard2 from "./WorkCard2";
import WorkCard3 from "./WorkCard3";
function HowDoesItWork() {
  return (
    <section className="bg-gray-100 pt-[130px]">
      <div className="container mx-auto px-[16px] pb-0 md:px-[40px]">
        <HeadingSecondary className="mb-[55px]">
          How Does It Works
        </HeadingSecondary>

        <div>
          <div className="mx-auto px-6 sm:px-4 md:px-6 lg:px-8">
            <div className="items-center justify-center gap-5 md:gap-20 lg:flex lg:gap-36">
              <WorkCard1 />
              <WorkCard2 />
              <WorkCard3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowDoesItWork;
