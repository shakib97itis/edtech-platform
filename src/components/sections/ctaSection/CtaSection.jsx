import React from "react";

const CtaSection = () => {
  return (
    <section className="bg-secondary-400 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ctaImages/careerbg.jpg')",
          opacity: 0.1,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute left-0 z-0 hidden pt-[200px] lg:block md:pt-[117px]">
        <img
          alt="Picture of the author"
          loading="lazy"
          width="500"
          height="500"
          decoding="async"
          style={{ color: "transparent" }}
          src="/ctaImages/plan.svg"
        />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-[40px] py-[112px] md:flex">
          <div className="hidden w-full items-center justify-center md:w-1/2 md:justify-end lg:flex">
            <h3 className="font-ubuntu hidden text-center text-[28px] font-bold md:block md:text-end md:text-[36px]">
              Ready to start your <br /> career?
            </h3>
            <h3 className="font-ubuntu mb-5 block text-center text-[28px] font-bold md:hidden md:text-end md:text-[36px]">
              Ready to start your career?
            </h3>
          </div>
          <div className="mx-5 lg:border-2 lg:border-primary-700"></div>
          <div className="w-full text-center lg:w-1/2 lg:text-start">
            <h4 className="font-ubuntu text-xl font-medium text-white md:text-2xl">
              We are waiting for you to contact us
            </h4>
            <h2 className="font-ubuntu mt-2 text-center text-[18px] font-normal text-white lg:text-start">
              If you have any query call us at any of the following number
            </h2>
            <h4 className="font-ubuntu mt-2 text-xl font-medium md:text-2xl">
              01825 004 976, 01804 181 257
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
