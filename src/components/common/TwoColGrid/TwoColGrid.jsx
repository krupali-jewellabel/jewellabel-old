import React from "react";
import Typography from "../Typography/Typography";

const TwoColGrid = ({ title, text, imgSrc, reverse = false, className }) => {
  return (
    <section
      className={`w-full flex  items-center ${className}  ${
        reverse
          ? "md:flex-row-reverse flex-col"
          : "xl:flex-row md:flex-row flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`md:w-[50%] w-full ${
          reverse
            ? "md:pl-[4rem] pl-0 md:pb-0 pb-5"
            : "md:pr-[4rem] pr-0 md:pb-0 pb-5"
        }`}
      >
        <img
          src={imgSrc}
          className="lg:w-[534px] lg:h-[351px] md:w-[534px] md:h-[351px] w-full h-[271px] 2xl:w-full 2xl:h-[501px] lg:rounded-[50px] md:rounded-[35px] rounded-[35px] object-cover"
        />
      </div>
      {/* Content */}
      <div className="md:w-[50%] w-full">
        <Typography
          variant="h4"
          className=" text-[#272727] mb-[16px] capitalize"
        >
          {title}
        </Typography>
        <Typography variant="h6">{text}</Typography>
      </div>
    </section>
  );
};

export default TwoColGrid;
