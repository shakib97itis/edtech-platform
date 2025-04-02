import React from "react";
import PropTypes from "prop-types";

/**
 * Button component
 * guide to use:
 * - variant: btnOne, btnTwo, btnThree, btnFour, btnFive
 * - className: custom class name
 * - text: button text
 * - Icon: icon component
 * - children: children component
 *
 * @component
 *
 * @example
 * <Button variant={"btnOne"} text={"Sign In"}>
 *  <LuUserRoundPlus className="text-inherit" />
 * </Button>
 *
 * @param {text} text - Button text
 * @param {variant} variant - Button variant
 * @param {className} className - Button class name
 * @param {children} children - Button icon.
 *
 * @returns {JSX.Element} Button component
 */

function Button({ children, text, variant, className }) {
  const variantStyles = {
    btnOne:
      "bg-accent-500 hover:border-accent-600 hover:bg-accent-600 border-accent-500 border-2 px-4 py-2 text-white",
    btnTwo:
      "hover:bg-accent-600 border-accent-500 bg-accent-500 border-2 px-[20px] py-[10px] text-white",
    btnThree:
      "border-accent-500 text-accent-500 border px-[20px] py-[10px] hover:border-transparent hover:bg-[#FDE6E0]",
    btnFour:
      "border-accent-500 text-accent-500 hover:text-accent-600 border-2 bg-transparent px-[20px] py-[10px] hover:border-[#FDE6E0] hover:bg-[#FDE6E0]",
    btnFive:
      "border-2 border-transparent bg-[#004464] px-[20px] py-[10px] text-white hover:bg-[#29BDBF]",
    btnSix:
      "border-2 border-transparent px-[10px] py-[5px] text-[#004464] hover:border-[#B0C5CF] hover:bg-[#36BBE4] hover:text-white",
  };

  // const baseStyles = "";

  return (
    <button
      className={`font-primary flex cursor-pointer items-center justify-center gap-[10px] rounded-full font-medium transition duration-300 ease-in-out ${variantStyles[variant]} ${className}`}
    >
      <span className="text-inherit">{text}</span>
      {children ? <span className="text-inherit">{children}</span> : ""}
    </button>
  );
}

Button.propTypes = {
  Icon: PropTypes.element,
  text: PropTypes.string,
  variant: PropTypes.oneOf([
    "btnOne",
    "btnTwo",
    "btnThree",
    "btnFour",
    "btnFive",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
