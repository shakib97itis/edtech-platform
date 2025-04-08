import React from "react";
import Button from "../../common/button/Button";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center gap-[10px] py-[40px]">
      {/* Text Section */}
      <div className="w-full lg:w-3/5">
        <h3 className="mb-[8px] text-sm text-white uppercase opacity-90">
          Elevating
        </h3>
        <h1 className="font-secondary mb-[16px] max-w-[500px] text-[32px] leading-tight font-semibold text-white sm:text-[36px] md:text-[46px]">
          We aim to eliminate unemployment in Bangladesh
        </h1>

        <p className="mb-[24px] max-w-[800px] text-base text-white opacity-90 md:text-lg">
          Bulipe Tech, as a visionary agent, collaborates with its parent
          companies from the USA and UK to bring forth a far-reaching Digital
          Skills Development project for the ever-changing workforce of
          Bangladesh.
        </p>
        <div className="flex flex-col gap-[16px] sm:flex-row">
          <Button
            variant="btnOne"
            text="Enroll Now"
            className="px-[30px] py-[8px]"
          >
            <BsPersonFillAdd />
          </Button>
          <Button
            variant="btnTwo"
            text="Read More"
            className="px-[30px] py-[8px]"
          >
            <FaExclamationCircle />
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden w-2/5 shrink-0 lg:block">
        <img
          src="/heroImages/programs-banner-3.svg"
          alt="Digital Skills Illustration"
          className="h-[400px] w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
