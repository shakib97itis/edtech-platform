import React from "react";

function HeadingSecondaryLeft({ children, className }) {
  return (
    <div className={className}>
      <h2 className="inline-block space-y-3 text-3xl font-bold">
        <div className="text-inherit">{children}</div>
        <div className="bg-accent-500 h-1 w-[70%]"></div>
      </h2>
    </div>
  );
}

export default HeadingSecondaryLeft;
