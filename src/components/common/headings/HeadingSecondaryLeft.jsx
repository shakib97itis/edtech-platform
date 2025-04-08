import React from "react";

function HeadingSecondaryLeft({ children, className }) {
  return (
    <div className={className}>
      <h2 className="inline-block space-y-3 text-[30px] leading-none font-bold md:text-[36px]">
        <div className="text-inherit">{children}</div>
        <div className="bg-accent-500 h-[2px] w-[70%]"></div>
      </h2>
    </div>
  );
}

export default HeadingSecondaryLeft;
