import React from "react";
import Button from "../../common/button/Button";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-primary-700 flex h-full items-center justify-center gap-[10px] px-10 py-10 md:px-20 lg:px-32">
      {/* Text Section */}
      <div className="w-full md:w-3/5">
        <h3 className="text-sm text-white uppercase opacity-75">Elevating</h3>
        <h1 className="mt-2 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          IT Service Industry <br /> with{" "}
          <span className="relative inline-block">
            Digital Skills
            <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-400"></span>
          </span>
          Development
        </h1>

        <p className="mt-4 text-base text-white opacity-75 md:text-lg">
          Bulipe Tech, as a visionary agent, collaborates with its parent
          companies from the USA and UK to bring forth a far-reaching Digital
          Skills Development project for the ever-changing workforce of
          Bangladesh.
        </p>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
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
      <div className="hidden w-2/5 shrink-0 p-10 lg:block">
        <img
          src="/hero-image.jpg"
          alt="Digital Skills Illustration"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
