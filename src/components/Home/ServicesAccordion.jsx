"use client";
import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Typography from "../common/Typography/Typography";
import { motion } from "framer-motion";
import Section from "../common/Section/Section";
import useIsMobile from "@/utils/useIsMobile";
import useServicesAccordion from "@/hooks/useServicesAccordion";

const ServicesAccordion = ({ accordionData }) => {
  const { isMobile } = useIsMobile(1024);
  const {
    openIndex,
    hoveredIndex,
    setHoveredIndex,
    toggleAccordion,
    handleMouseMove,
    springX,
    springY,
  } = useServicesAccordion();

  return (
    <Section>
      <FeatureHeader
        label="Our Services"
        title={`We are jewellabel <br /> YOUR End-to-End Jewellery <br /> Business Solution`}
      />
      <div className="border-b border-[#7a7a7a]">
        {accordionData.map((item, index) => {
          return (
            <div
              className="relative z-10 group"
              key={item.id}
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
            >
              <div className="border-t border-grey border-solid relative z-1">
                <div className="block relative cursor-pointer pointer-events-auto items-center p-[2.5rem_0px]">
                  <div className="grid auto-cols-fr gap-x-[5px] gap-y-[5px] pointer-events-auto grid-rows-[auto] grid-cols-[auto_1fr_auto]">
                    <Typography variant="p" className="self-auto">
                      {item.number}
                    </Typography>

                    <div className="flex gap-x-[5px] gap-y-[5px] justify-between">
                      <div className="flex lg:justify-end lg:items-end flex-col lg:flex-row items-start gap-x-[5px] gap-y-[5px]">
                        <Typography
                          variant="h2"
                          className={` group-hover:text-[#F55733] ${
                            openIndex === index ? "text-[#F55733]" : ""
                          }`}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="label"
                          className="lg:place-self-center lg:self-end"
                        >
                          {item.subtitle}
                        </Typography>
                      </div>

                      {hoveredIndex === index && !isMobile && (
                        <motion.img
                          src={item.hoverImg}
                          alt={item.label}
                          className="align-middle max-w-full absolute object-cover inset-[0%] -z-[50] hidden md:inline-block"
                          style={{ x: springX, y: springY }}
                        />
                      )}
                      <div className="self-center justify-items-end">
                        <div className="flex justify-center items-center w-[2.8rem] h-[2.8rem] rounded-full border border-[grey]">
                          <div
                            className={`flex flex-col justify-center items-center w-[1.5rem] h-[1.5rem] text-grey w-embed transform transition-transform ${
                              openIndex === index ? "rotate-45" : "rotate-0"
                            }`}
                          >
                            <svg
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--iconoir"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className={`overflow-hidden p-[1.5rem_0px] pt-0 ${
                    openIndex === index ? "pl-[1.7rem] py-[1.5rem]" : "py-0"
                  }`}
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Typography variant="h6">{item.content}</Typography>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesAccordion;
