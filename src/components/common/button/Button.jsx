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
      "border-accent-500 text-accent-500 border hover:border-transparent hover:bg-[#FDE6E0]",
    btnThree:
      "border-accent-500 text-accent-500 hover:text-accent-600 border-2 bg-transparent  hover:border-[#FDE6E0] hover:bg-[#FDE6E0]",
    btnFour:
      "border-2 border-transparent bg-[#004464]  text-white hover:bg-[#29BDBF]",
    btnFive:
      "border-2 border-transparent text-[#004464] hover:border-[#B0C5CF] hover:bg-[#36BBE4] hover:text-white",
  };

  // const baseStyles = "";

  return (
    <button
      className={`${className} font-primary flex cursor-pointer items-center justify-center gap-[10px] rounded-full font-medium transition duration-300 ease-in-out ${variantStyles[variant]}`}
    >
      <span className="text-inherit">{text}</span>
      {children ? <span className="text-inherit">{children}</span> : ""}
    </button>
  );
}

Button.propTypes = {
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
