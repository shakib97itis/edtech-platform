import React from "react";

function OurPartnersSlide({ imgLink, alt }) {
  return (
    <div className="bg-secondary-400 flex h-[80px] items-center justify-center rounded-4xl border-0 px-[40px] py-[20px] shadow-none">
      <img className="max-w-[260px]" src={imgLink} alt={alt} />
    </div>
  );
}

export default OurPartnersSlide;
