import React from "react";

function NavLink({ text, path }) {
  return (
    <a
      className="hover:text-secondary-400 font-primary text-primary-800 text-base font-medium transition duration-300 ease-in-out"
      href={path}
    >
      {text}
    </a>
  );
}

export default NavLink;
