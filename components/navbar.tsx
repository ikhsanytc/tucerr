"use client";
import React, { useEffect, useState } from "react";
import NavbarLinkTulis from "./navbar-link-tulis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import NavbarMobile from "./navbar-mobile";
import { navLinks } from "@/constants/navbar-links";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed z-[99] bg-white/80 backdrop-filter backdrop-blur-lg w-full top-0 border-b border-gray-300 ${
          showNavbar ? "translate-0" : "-translate-y-full"
        } transition-all duration-300`}
      >
        <div className="h-16 flex flex-row items-center justify-between px-4">
          <div className="flex gap-4">
            <h1 className="text-4xl text-violet-600 font-bold">Tucerr</h1>
            <div className="w-64 md:flex hidden gap-2 border items-center px-2 border-slate-400 rounded-lg">
              <FontAwesomeIcon
                icon={faSearch}
                size="1x"
                className="text-gray-400 w-6"
              />
              <input
                type="text"
                className="w-full outline-none text-gray-400"
                placeholder="Cari"
              />
            </div>
          </div>
          <div className="block md:hidden lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              size="1x"
              onClick={() => setShowSlide((prev) => !prev)}
              className="w-6 h-5"
            />
          </div>
          <div className="md:flex hidden gap-4 items-center">
            <NavbarLinkTulis />
            {navLinks.map((nav, idx) => (
              <a href={nav.link} key={idx} className="font-semibold">
                {nav.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <NavbarMobile setShowSlide={setShowSlide} showSlide={showSlide} />
    </>
  );
};

export default Navbar;
