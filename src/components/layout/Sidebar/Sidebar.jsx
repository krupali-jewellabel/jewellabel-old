"use client";

import Image from "next/image";
import React, { useState } from "react";
import Menu from "./Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Wrapper */}
      <section className="mx-auto bg-[#272727] w-full md:w-[80px] fixed top-0 left-0 h-[60px] md:h-full flex md:flex-col justify-between items-center px-4 md:py-6 z-[999] flex-row-reverse">
        {/* Toggle Button */}
        <div
          className="p-3 bg-white rounded-full cursor-pointer flex justify-center h-[45px] w-[45px] items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            alt="toggle"
            src={isOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
          />
        </div>

        {/* Logo */}
        <div className="ml-[60px] lg:ml-0 md:ml-0">
          <img
            alt="logo"
            src="/icons/logo.svg"
            className="w-full lg:rotate-0 md:rotate-0 rotate-90"
          />
        </div>

        {/* Telephone Icon */}
        <div className="hidden md:block">
          <img
            alt="telephone"
            src="/icons/telephone.svg"
            width={16}
            height={12}
            className="w-full"
          />
        </div>
      </section>

      {/* Overlay and Menu */}
      {isOpen && (
        <>
          {/* Blur Background */}
          <div
            className="fixed inset-0 z-40 bg-[#1313138f]"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu for Mobile (Top) and Desktop (Left) */}
          <div className="fixed top-[60px] left-0 md:top-0 md:left-[80px] w-full md:w-auto z-50">
            <Menu />
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
