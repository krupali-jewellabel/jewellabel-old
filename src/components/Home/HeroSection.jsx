"use client";

import Button from "@/components/common/Button/Button";
import CircularSpinner from "@/components/common/CircularSpinner/CircularSpinner";
import Typography from "@/components/common/Typography/Typography";
import useHeroAnimations from "@/hooks/useHeroAnimation";
import useAppHeight from "@/utils/useAppHeight";
import React from "react";

const HeroSection = ({ title, subTitle, description, bottomTitle }) => {
  const { sectionRef, leftDivRef, rightDivRef, leftContentRef } =
    useHeroAnimations();
  useAppHeight();

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ height: "var(--app-height)" }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Container */}
      <div className="w-full h-full z-10 flex flex-col md:flex-row">
        {/* Left Sliding Div */}
        <div
          ref={leftDivRef}
          className=" w-full md:w-1/2 h-[47vh] md:h-full bg-[#fcfcfc] flex items-center"
        >
          <div
            className="lg:px-16 lg:py-12 px-[15px] py-[75px]"
            ref={leftContentRef}
          >
            <div className="lg:space-y-6 space-y-3">
              <Typography variant="h3" className="text-[#272727]">
                {subTitle}
              </Typography>
              <Typography variant="h1" className="text-[#272727]">
                {title}
              </Typography>
              <Typography
                variant="label"
                as="h5"
                className="text-[#272727] max-w-[525px] ml-[.8vw]"
              >
                {description}
              </Typography>
              <div className="flex items-center pt-4">
                <Button title="Schedule Call" />
                <Button type="navigation" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sliding Div */}
        <div
          ref={rightDivRef}
          className="w-full md:w-1/2 h-[47vh] md:h-full flex items-end justify-end relative"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* sticky corner right top  */}
          <div className="w-[40px] h-[40px] w-embed lg:block hidden md:block absolute right-[69%] bottom-[1.5vw] overflow-hidden">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                fill="#fcfcfc"
              ></path>
            </svg>
          </div>

          {/* sticky corner right */}
          <div className="w-[40px] h-[40px] absolute bottom-[12vw] right-[3vw] md:bottom-[9vw] lg:bottom-[9vw] lg:right-0 md:right-0 overflow-hidden w-embed">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                fill="white"
              ></path>
            </svg>
          </div>

          {/* sticky corner right bottom */}
          <div className="w-[40px] h-[40px] block absolute lg:bottom-[1.5vw] lg:left-0 overflow-hidden lg:rotate-90 right-[3vw] rotate-[270deg]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                fill="#fcfcfc"
              ></path>
            </svg>
          </div>

          {/* sticky block right top */}
          <div
            className="absolute bottom-0 right-0 flex flex-col justify-center lg:w-[69%] lg:h-[9vw] lg:pt-0 lg:pr-[1.5vw] bg-[#fcfcfc] rounded-tl-[2.5rem] gap-x-4 gap-y-4 
          items-center w-[80%] h-[12vw] pt-0 pr-[3vw]"
          >
            <Typography
              variant="h4"
              style={{
                styleopacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: " preserve-3d",
              }}
              className="relative flex w-full pr-0 mt-0 mb-0 text-[#272727] uppercase justify-end"
            >
              {bottomTitle}
            </Typography>
          </div>

          {/* sticky block bottom */}
          <div className="absolute right-0 bottom-0 lg:w-full lg:h-[1.5vw] bg-[#fcfcfc] rounded-none block w-[3vw] h-full"></div>
          <div className="absolute bottom-[10vw] right-[1.5vw] lg:bottom-0 w-[25vw] h-[25vw] lg:right-0 md:top-auto top-0">
            <CircularSpinner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
