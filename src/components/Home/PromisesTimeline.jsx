"use client";
import React, { useState } from "react";
import Typography from "../common/Typography/Typography";
import { STEPS } from "@/constants/dummyData";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Section from "../common/Section/Section";
import { motion } from "framer-motion";
import useIsMobile from "@/utils/useIsMobile";

const PromisesTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { isMobile } = useIsMobile();
  return (
    <div className="min-h-screen z-10">
      <Section className=" ">
        <div className="w-full mt-0 grid lg:grid-cols-2 grid-cols-1 gap-x-12">
          <div className="lg:mb-0 mb-5">
            <div className="w-full sticky top-[8rem]">
              <FeatureHeader
                label={"OUR PROMISES"}
                title={"YOUR TRUST- <br/> COMMITMENT <br/> BEYOND WORDS"}
              />
              {STEPS[hoveredIndex] && (
                <motion.img
                  src={STEPS[hoveredIndex].imgUrl}
                  key={STEPS[hoveredIndex].imgUrl}
                  alt={STEPS[hoveredIndex].title}
                  className="2xl:w-[677px] 2xl:h-[450px] lg:w-[503px] lg:h-[351px] w-full h-[249px] object-cover lg:rounded-[50px] rounded-[35px] shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          </div>
          <div className=" 2xl:pt-[15vw] xl:pt-[25vw]">
            {STEPS.map((step, index) => (
              <div
                className="flex lg:justify-end justify-start w-full lg:pb-[96px] pb-5 lg:border-l border-l-0 border-[#cfcfcf]"
                key={index}
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                {!isMobile && (
                  <div className="flex justify-center items-center w-[2vw] h-[2vw] border border-[#a0a0a0] bg-[#fcfcfc] rounded-full absolute top-0 left-[-1vw]">
                    <div className="bg-[#a0a0a0] rounded-full w-[0.4vw] h-[0.4vw]"></div>
                  </div>
                )}
                <div className="flex justify-start items-start lg:w-4/5 w-full gap-[15px]">
                  <div>
                    <Typography
                      variant="h2"
                      className="text-[#f55733] mt-0 mb-0"
                    >
                      {index + 1}
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <Typography variant="h4" className="mt-0 mb-0">
                      {step.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-medium line-height-small"
                    >
                      {step.description}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PromisesTimeline;
