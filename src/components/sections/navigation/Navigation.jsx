import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserRoundPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Button from "../../common/button/Button";
import NavLink from "./NavLink";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Locations", path: "/location" },
    { name: "Career & Placement", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <section className="font-primary mb-[69px]">
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
        {/* Why position relative? */}
        <div className="relative container mx-auto flex items-center justify-between px-[16px] py-[12px] md:px-[40px]">
          {/* MAIN LOGO AND HAMBURGER BUTTON */}
          <div className="flex items-center gap-[20px]">
            {/* HAMBURGER BUTTON (Mobile) */}
            <div className="flex items-center lg:hidden">
              <RxHamburgerMenu
                className="text-primary-500 translate-y-[3px] cursor-pointer text-2xl"
                onClick={toggleNav}
              />
            </div>

            {/* LOGO */}
            <div className="w-[120px] lg:w-[150px]">
              <img src="/navigationImages/main-logo.png" alt="Logo" className="full" />
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden items-center gap-[20px] lg:flex">
            {navItems.map((item) => (
              <li key={item.name} className="">
                <NavLink text={item.name} path={item.path} />
              </li>
            ))}
          </ul>

          {/* NAVIGATION CTA BUTTON */}
          <div>
            <Button
              text="Sign In"
              variant="btnOne"
              className="px-[16px] py-[8px]"
            >
              <LuUserRoundPlus />
            </Button>
          </div>

          {/* MOBILE NAVIGATION */}
          <div
            className={`fixed top-0 left-0 z-50 h-screen w-[80%] transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-b-neutral-100 p-4">
              <div className="">
                <img src="/public/navigationImages/main-logo.png" alt="Logo" className="w-32" />
              </div>
              <div
                className="items-centet flex cursor-pointer justify-center"
                onClick={toggleNav}
              >
                <IoClose className="translate-y-[4px] align-middle text-2xl text-neutral-800" />
              </div>
            </div>

            <ul className="mt-[20px] flex flex-col gap-[26px] px-[16px]">
              {navItems.map((item) => (
                <li key={item.name} className="">
                  <NavLink text={item.name} path={item.path} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
