"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOLUTIONS } from "@/constants/dummyData";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Typography from "../common/Typography/Typography";
import Section from "../common/Section/Section";
import useServicesAccordion from "@/hooks/useServicesAccordion";
import useIsMobile from "@/utils/useIsMobile";

const OurServices = () => {
  const { hoveredIndex, setHoveredIndex, handleMouseMove, springX, springY } =
    useServicesAccordion();
  const { isMobile } = useIsMobile(1024);
  return (
    <Section className="relative">
      <FeatureHeader
        label="solutions"
        title="Our Services: Powering Your <br/> Jewelry Brand"
        className="!mb-0"
      />

      <div>
        {SOLUTIONS.map((items, index) => (
          <div
            key={index}
            className="text-[#272727] border-b border-b-[#686767] flex items-center cursor-pointer group relative overflow-hidden md:py-10 py-5"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
            onClick={() => {
              const element = document.getElementById(items.path);
              if (element && typeof element.scrollIntoView === "function") {
                element.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn("Element not found or invalid:", items.path);
              }
            }}
          >
            <Typography
              variant="h2"
              className="text-[#686767] capitalize group-hover:text-[#272727]"
            >
              {items.label}
            </Typography>

            {/* Floating image */}
            {hoveredIndex === index && !isMobile && (
              <motion.img
                src={items.hoverImg}
                alt={items.label}
                className="absolute w-40 h-40 object-cover pointer-events-none -z-1 rounded-md"
                style={{ x: springX, y: springY }}
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default OurServices;
