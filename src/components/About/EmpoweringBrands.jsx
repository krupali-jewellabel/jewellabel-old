"use client";
import React from "react";
import { motion } from "framer-motion";
import Typography from "@/components/common/Typography/Typography";
import FeatureHeader from "@/components/common/FeatureHeader/FeatureHeader";
import Section from "../common/Section/Section";
import useIsMobile from "@/utils/useIsMobile";
import { EMPOWERING_BRANDS } from "@/constants/dummyData";
import useEmpoweringAnimation from "@/hooks/useEmpoweringAnimation";

const EmpoweringBrands = () => {
  const { isMobile } = useIsMobile();
  const { isAnimating, showAdditional, cardVariants, rightCardVariants } =
    useEmpoweringAnimation();

  return (
    <Section>
      <FeatureHeader label="technology" title="Empowering brands" />
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
        {EMPOWERING_BRANDS.map((item, index) => {
          const delay = 0.3;

          const baseProps = {
            className: `w-full ${!isMobile ? `col-start-${index + 1}` : ""}`,
            style: { zIndex: index === 0 || index === 3 ? 10 : "auto" },
          };

          let animationProps = {};

          if (!isMobile) {
            if (index === 0) {
              animationProps = {
                variants: cardVariants,
                initial: "initial",
                animate: isAnimating ? "animate" : "initial",
                custom: { x: "0%", delay },
              };
            } else if (index === 1) {
              animationProps = {
                initial: { opacity: 0, x: "-50%" },
                animate: {
                  opacity: showAdditional ? 1 : 0,
                  x: showAdditional ? "0%" : "-50%",
                },
                transition: {
                  duration: 1.5,
                  delay,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              };
            } else if (index === 2) {
              animationProps = {
                initial: { opacity: 0, x: "50%" },
                animate: {
                  opacity: showAdditional ? 1 : 0,
                  x: showAdditional ? "0%" : "50%",
                },
                transition: {
                  duration: 1.5,
                  delay,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              };
            } else if (index === 3) {
              animationProps = {
                variants: rightCardVariants,
                initial: "initial",
                animate: isAnimating ? "animate" : "initial",
                custom: { x: "0%", delay },
              };
            }
          }

          const motionProps = { ...baseProps, ...animationProps };
          return !isMobile ? (
            <motion.div key={index} {...motionProps}>
              <div className="flex flex-col gap-3">
                {index % 2 === 0 ? (
                  <>
                    <div className="2xl:h-[440px] md:h-[340px] h-[207px] px-8 py-7 bg-gray-50 rounded-[20px] flex flex-col justify-between">
                      <Typography variant="h4" className="text-[#272727]">
                        {item.title}
                      </Typography>
                      <Typography variant="h6" className="text-[#7A7A7A]">
                        {item.description}
                      </Typography>
                    </div>
                    <img
                      className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="2xl:h-[440px] md:h-[340px] h-[207px] px-8 py-7 bg-gray-50 rounded-[20px] flex flex-col justify-between">
                      <Typography variant="h4" className="text-[#272727]">
                        {item.title}
                      </Typography>
                      <Typography variant="h6" className="text-[#7A7A7A]">
                        {item.description}
                      </Typography>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ) : (
            <div
              key={index}
              className={`flex gap-3 ${
                index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <>
                <img
                  className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="2xl:h-[440px] md:h-[340px] h-[207px] px-8 py-7 bg-gray-50 rounded-[20px] flex flex-col justify-between">
                  <Typography variant="h4" className="text-[#272727]">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" className="text-[#7A7A7A]">
                    {item.description}
                  </Typography>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default EmpoweringBrands;
