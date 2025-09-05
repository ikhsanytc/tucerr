"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

const NavbarLinkTulis = () => {
  const [showTulisDropdown, setShowTulisDropdown] = useState(false);
  const tulisDropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tulisDropdownRef.current &&
        !tulisDropdownRef.current.contains(e.target as Node)
      ) {
        setShowTulisDropdown(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative ">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setShowTulisDropdown((prev) => !prev)}
      >
        <p className="font-semibold">Tulis</p>
        <FontAwesomeIcon icon={faAngleDown} className="w-2" size="1x" />
      </div>
      <div
        className={`absolute w-64 right-0 -bottom-64 bg-white/90 backdrop-filter backdrop-blur-lg z-[100] rounded-xl p-5 shadow-2xl ${
          showTulisDropdown ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-200`}
        ref={tulisDropdownRef}
      >
        <div className="flex flex-col gap-2">
          <LinkTulis>Membuat cerita baru</LinkTulis>
          <LinkTulis>Cerita saya</LinkTulis>
        </div>
        <hr className="border-slate-300 mt-2 pb-2" />
        <div className="flex flex-col gap-2">
          <LinkTulis>Sumber bermanfaat bagi penulis</LinkTulis>
          <p>Program & peluang Tucerr</p>
          <p>Kontes menulis</p>
        </div>
      </div>
    </div>
  );
};

type LinkTulisProps = {
  children: ReactNode;
  href?: string;
};

export const LinkTulis: FC<LinkTulisProps> = ({
  children,
  href = "http://localhost:3000",
}) => {
  return (
    <a href={href} className="hover:underline">
      {children}
    </a>
  );
};

export default NavbarLinkTulis;
