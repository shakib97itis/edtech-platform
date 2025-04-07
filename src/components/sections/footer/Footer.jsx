import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../../../assets/Footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="relative bg-gray-900 py-[100px] text-white">
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/FooterMaps.svg)",
            opacity: 0.1,
          }}
        ></div>
        <div className="relative z-10 container mx-auto grid grid-cols-1 px-[16px] md:grid-cols-2 md:px-[40px] lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="">
            <a href="/">
              <img alt="BULIPE Logo" className="mb-5 w-1/2" src={logo} />
            </a>
            <p className="font-ubuntu text-sm">
              Bulipe Tech as a visionary agent collaborates with its parent
              companies from the US and UK to bring forth a far-reaching Digital
              Skills Development project for the ever-changing workforce of
              Bangladesh.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ href, icon, hoverColor }) => (
                <a
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black hover:bg-${hoverColor} transition duration-500 hover:text-white`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Addresses */}
          <div className="mt-10 md:mt-3 md:ml-10">
            <h6 className="text-lg font-medium">ADDRESSES</h6>
            <div className="my-2 h-0.5 w-10 bg-orange-500"></div>
            <div className="mt-5 space-y-3">
              <p>
                Hotline:{" "}
                <a
                  href="tel:+880248814782"
                  className="text-orange-500 hover:text-yellow-500"
                >
                  (+88) 0248814782
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@bulipetech.com"
                  className="text-orange-500 hover:text-yellow-500"
                >
                  info@bulipetech.com
                </a>
              </p>
              <p>
                Address: House: 82, Road: 23/16, Block: A, Banani, Dhaka-1213
              </p>
            </div>
            <a
              href="/locations"
              className="mt-5 inline-flex items-center text-orange-500 hover:text-yellow-500"
            >
              COUNTRY OFFICES
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-10 md:ml-10 lg:mt-3">
            <h6 className="text-lg font-medium">QUICK LINKS</h6>
            <div className="my-2 h-0.5 w-10 bg-orange-500"></div>
            <ul className="mt-5 space-y-3 text-accent-500">
              {quickLinks.map(({ href, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <FaArrowRight />
                  <a
                    key={href}
                    href={href}
                    className="block text-orange-500 hover:text-yellow-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div className="mt-10 md:ml-10 lg:mt-3">
            <h6 className="text-lg font-medium">APP DOWNLOAD</h6>
            <div className="my-2 h-0.5 w-10 bg-orange-500"></div>
            <div className="mt-5 space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.bulipetech.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-500 hover:text-yellow-500"
              >
                <img
                  alt="Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="w-32"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/bulipe-tech/id6444435003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-500 hover:text-yellow-500"
              >
                <img
                  className="w-32"
                  alt="App Store"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto pt-7 pb-24">
          <div className="text-center text-sm text-gray-500">
            &copy; 2025{" "}
            <span className="text-accent-600">Bulipe Tech Limited</span> all
            rights reserved.
          </div>
          <div className="mx-auto mt-1 w-72 border-b-[0.5px] border-black"></div>
          <p className="mt-5 text-center text-sm text-gray-500">
            Bulipe Tech Limited proudly supports the global community focused on
            skill development and career growth. All third-party trademarks and
            names are used for identification purposes only and do not imply any
            endorsement or affiliation. Bulipe Tech Limited is not affiliated
            with any other organization unless stated otherwise.
          </p>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/bulipetech/",
    icon: <FaLinkedin />,
    hoverColor: "blue-700",
  },
  {
    href: "https://x.com/bulipetech",
    icon: <FaTwitter />,
    hoverColor: "black",
  },
  {
    href: "https://www.facebook.com/bulipetechbd/",
    icon: <FaFacebook />,
    hoverColor: "blue-600",
  },
  {
    href: "https://www.pinterest.com/bulipetech/",
    icon: <FaPinterest />,
    hoverColor: "red-600",
  },
  {
    href: "https://www.youtube.com/@bulipetech",
    icon: <FaYoutube />,
    hoverColor: "red-600",
  },
];

const quickLinks = [
  { href: "/", label: "HOME" },
  { href: "/about/", label: "ABOUT US" },
  { href: "/programs/", label: "OUR PROGRAMS" },
  { href: "/career/", label: "CAREER & PLACEMENT" },
  { href: "/contact/", label: "CONTACT" },
];

export default Footer;
