import React from "react";

const Section = ({ children, className = "", noPaddingX = false }) => {
  return (
    <section
      className={`${
        noPaddingX ? "px-0" : "lg:px-[86px] md:px-[56px] px-[16px]"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
