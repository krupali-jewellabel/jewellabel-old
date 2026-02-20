import Section from "@/components/common/Section/Section";
import { MENUS } from "@/constants/dummyData";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Section className="grid grid-rows-3 bg-[#D9D9D9] pt-[27px] pb-[49px]">
      <div>
        <img src="/icons/logo-horizontal.svg" className="object-contain"/>
      </div>
      {/* <nav className=""> */}
        <ul className="flex justify-end gap-6">
          {MENUS.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  href={menu.url}
                  className="text-gray-700 hover:text-orange-500"
                >
                  {menu.label}
                </Link>
              </li>
            );
          })}
        </ul>
      {/* </nav> */}
      <div className="border-t border-dark justify-between mt-4 pt-4 flex">
        <h2>© 2025 — Copyright all right reserved.</h2>
        <p>Privacy Policy</p>
      </div>
    </Section>
  );
};

export default Footer;
