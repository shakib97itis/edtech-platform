import React from "react";
import PropTypes from "prop-types";

/**
 * Button component
 * guide to use:
 * - Button variant: btnOne, btnTwo, btnThree, btnFour
 * - className: custom class name
 * - text: button text
 * - children: Icon svg / React-icons, (Any JSX Element)
 */

function Button({ children, text, variant, className }) {
  const variantStyles = {
    btnOne:
      "bg-accent-500 hover:border-accent-600 hover:bg-accent-600 border-accent-500 mb-1 border-2 text-white",
    // Border width should be provided by classname.
    btnTwo:
      "border-accent-500 text-accent-500 hover:bg-accent-400 hover:border-accent-400 border bg-transparent",
    btnThree:
      "bg-primary-800 border-primary-800 hover:bg-secondary-400 hover:border-secondary-400 border-2 text-white",
    btnFour:
      "text-primary-800 hover:bg-primary-300 hover:border-secondary-200 border-2 border-transparent hover:text-white",
  };

  return (
    <button
      className={`${className} font-primary flex cursor-pointer items-center justify-center gap-[10px] rounded-full font-medium transition duration-300 ease-in-out ${variantStyles[variant]}`}
    >
      <span className="text-inherit">{text}</span>
      {children ? <span className="text-inherit">{children}</span> : ""}
    </button>
  );
}

export default Button;
