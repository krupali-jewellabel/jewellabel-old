"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typography from "../Typography/Typography";

const FeatureHeader = ({ label, title, description, className }) => {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: 18 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className={`lg:mb-[80px] mb-[30px] ${className}`}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div variants={FADE_DOWN}>
        <div className="flex gap-[6px] items-center border border-[#E8EAEB] lg:p-[10px] p-[4px_8px] w-fit uppercase rounded-[64px] lg:mb-[15px] mb-[7px]">
          <img alt="icon" src="icons/spark.svg" height={20} width={20} />
          <Typography variant="p">{label}</Typography>
        </div>

        <Typography
          variant="h3"
          className="uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </motion.div>
      {description && (
        <Typography variant="h6" className="mt-[24px]">
          {description}
        </Typography>
      )}
    </motion.div>
  );
};

export default FeatureHeader;
