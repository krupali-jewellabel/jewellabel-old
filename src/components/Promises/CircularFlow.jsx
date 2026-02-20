"use client";
import React, { useState } from "react";
import Typography from "../common/Typography/Typography";
import { motion } from "framer-motion";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import { CIRCULAR_FLOW_CONST } from "@/constants/dummyData";
import Section from "../common/Section/Section";
import useIsMobile from "@/utils/useIsMobile";
import useCircularFlow from "@/hooks/useCircularFlow";

const CircularFlow = () => {
  const { isMobile } = useIsMobile();
  const { hoveredIndex, setHoveredIndex, positions} = useCircularFlow();
 
  return (
    <Section className="w-full bg-white">
      <FeatureHeader
        label="solutions"
        title="our solutions for your business:"
      />
      {!isMobile && (
        <div className="relative w-full max-w-[1600px] h-[870px] mx-auto px-4">
          {/* Circular border animation */}
          <motion.div
            className="absolute w-[90%] max-w-[1039px] h-[764px] left-1/2 top-[61px] -translate-x-1/2 rounded-full border-2 border-dashed border-[#F55733]"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cards positioned in circle */}
          {CIRCULAR_FLOW_CONST.map((item, index) => (
            <motion.div
              key={index}
              className={`group 2xl:w-[450px] xl:w-[350px] lg:w-[200px] xl:p-10 lg:p-6 md:p-3 absolute bg-white rounded-[40px] outline outline-[#00000033] hover:outline-[#F55733] text-center cursor-pointer transition-all duration-300 ${positions[index].top} ${positions[index].left}`}
              onMouseEnter={() => setHoveredIndex(index)}
              whileHover={{ scale: 1.01 }}
            >
              <Typography
                variant="h6"
                className="text-[#272727] group-hover:text-[#F55733] mb-6"
              >
                {item.title}
              </Typography>
              <Typography variant="p" className="text-[#7A7A7A]">
                {item.description}
              </Typography>
            </motion.div>
          ))}

          {/* Center image */}
          <img
            src={CIRCULAR_FLOW_CONST[hoveredIndex].imgUrl}
            alt={CIRCULAR_FLOW_CONST[hoveredIndex].title}
            className="absolute xl:w-[450px] lg:w-[350px] md:w-[250px] xl:h-72 h-auto left-1/2 top-[340px] -translate-x-1/2 rounded-[50px] object-cover transition-all duration-500"
          />
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col gap-5">
          <img
            src={CIRCULAR_FLOW_CONST[hoveredIndex].imgUrl}
            alt={CIRCULAR_FLOW_CONST[hoveredIndex].title}
            className="w-full h-[271px] rounded-[50px] object-cover "
          />
          {CIRCULAR_FLOW_CONST.map((item, index) => (
            <motion.div
              key={index}
              className={`group w-full p-[20px_25px] bg-white rounded-[40px] h-[191px] outline outline-[#00000033] hover:outline-[#F55733] text-center cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              whileHover={{ scale: 1.01 }}
            >
              <Typography
                variant="h5"
                className="text-[#272727] group-hover:text-[#F55733] mb-6"
              >
                {item.title}
              </Typography>
              <Typography variant="p" className="text-[#7A7A7A]">
                {item.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default CircularFlow;
