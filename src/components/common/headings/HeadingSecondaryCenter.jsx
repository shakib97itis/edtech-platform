import React from "react";

function HeadingSecondary({ className, children }) {
  return (
    <div className={`relative z-10 text-center ${className}`}>
      <h2 className="font-primary inline-block text-[30px] leading-none font-bold md:text-[36px]">
        <div className="text-inherit">{children}</div>
        <div className="bg-accent-500 inline-block h-[2px] w-[70%]"></div>
      </h2>
    </div>
  );
}

export default HeadingSecondary;
