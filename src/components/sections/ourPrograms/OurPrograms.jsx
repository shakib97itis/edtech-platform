import React from "react";
import ProgramCard from "./ProgramCard";

function OurPrograms() {
  return (
    <section className="py-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        {/* SECTION TITLE */}
        <div className={`mb-[55px] text-center`}>
          <h2 className="font-primary inline-block text-3xl leading-1 font-bold md:text-4xl">
            <div className="mb-[30px]">Our Programs</div>
            <div className="bg-accent-500 inline-block h-[4px] w-[70%]"></div>
          </h2>
        </div>
        <div className="grid gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div>
    </section>
  );
}

export default OurPrograms;
