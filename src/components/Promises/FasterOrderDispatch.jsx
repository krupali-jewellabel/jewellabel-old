"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import TwoColGrid from "../common/TwoColGrid/TwoColGrid";
import Section from "../common/Section/Section";
import { FASTER_ORDER_DISPATCH } from "@/constants/dummyData";
import Typography from "../common/Typography/Typography";
import useIsMobile from "@/utils/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const FasterOrderDispatch = () => {
  const { isMobile } = useIsMobile();
  const middleIndex = Math.ceil(FASTER_ORDER_DISPATCH.length / 2);

  const firstArray = FASTER_ORDER_DISPATCH.slice(0, middleIndex);
  const secondArray = FASTER_ORDER_DISPATCH.slice(middleIndex);

  const wrapperRef = useRef(null);
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".choose-reason-wrap");
      const images = gsap.utils.toArray(".image-section");

      gsap.set(sections, { opacity: 0, y: 100 });
      gsap.set(images, { opacity: 0 });
      gsap.set(images[0], { opacity: 1 });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".image-container",
        scrub: 1,
      });

      sections.forEach((section, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        tl.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(images, { opacity: 0, duration: 0.5 });
            gsap.to(images[i], { opacity: 1, duration: 0.8 });
          },
          onEnterBack: () => {
            gsap.to(images, { opacity: 0, duration: 0.5 });
            gsap.to(images[i], { opacity: 1, duration: 0.8 });
          },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <Section>
      <FeatureHeader
        label="Logistics"
        title="Seamless Logistics & Fast Order <br/> Dispatch"
      />
      <TwoColGrid
        title="Reliable & Secure Jewelry Shipping"
        text="We understand that reliable logistics and dispatching are the backbone of any successful jewelry business. That's why we provide a fully integrated supply chain solution, ensuring your products reach your customers safely, quickly, and efficiently—no matter where they are in the world."
        reverse={true}
        imgSrc="/images/promises/logistics.png"
      />

      {!isMobile && (
        <div ref={wrapperRef} className="relative ">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 mx-auto">
            <div className="space-y-[100vh]">
              {firstArray.map((item, index) => (
                <div
                  key={index}
                  className="choose-reason-wrap min-h-screen flex items-center"
                >
                  <div className="w-auto">
                    <Typography variant="h4" className="mb-4">{item.title}</Typography>
                    <Typography variant="p" className="text-[#000000]">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="image-container h-screen flex items-center">
              <div className="relative 2xl:w-[500px] 2xl:h-[600px] h-[474px] w-[353px]">
                {FASTER_ORDER_DISPATCH.map((item, index) => (
                  <div key={index} className="image-section absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover h-[474px] w-[353px] rounded-[50px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-[100vh] pt-[87vh]">
              {secondArray.map((item, index) => (
                <div
                  key={index}
                  className="choose-reason-wrap min-h-screen flex items-center 2xl:items-end 2xl:justify-end"
                >
                  <div className="w-auto">
                    <Typography variant="h4" className="mb-4">
                      {item.title}
                    </Typography>
                    <Typography variant="p" className="text-[#000000]">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="relative border-l-1 border-[#A0A0A0] rounded-sm pl-6 ml-3 mt-[20px]">
          {FASTER_ORDER_DISPATCH.map((item, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[38px] top-1 w-6 h-6 rounded-full bg-[#F55733] border-6 border-[#A0A0A0]"></div>

              {/* Content */}
              <div className="ml-2">
                <Typography variant="h4" className="mb-[12px]">
                  {item.title}
                </Typography>
                <Typography variant="p" className="text-[#000000] mb-[20px]">
                  {item.description}
                </Typography>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[310px] h-[195px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default FasterOrderDispatch;
