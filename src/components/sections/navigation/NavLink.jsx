import React from "react";

function NavLink({ text, path }) {
  return (
    <a
      className="hover:text-secondary-300 font-primary text-base font-medium text-neutral-800 transition duration-300 ease-in-out"
      href={path}
    >
      {text}
    </a>
  );
}

export default NavLink;
