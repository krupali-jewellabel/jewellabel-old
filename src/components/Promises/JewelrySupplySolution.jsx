"use client";
import React, { useState } from "react";
import TwoColGrid from "../common/TwoColGrid/TwoColGrid";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Section from "../common/Section/Section";
import Typography from "../common/Typography/Typography";

const JewelrySupplySolution = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Regular & On-Time Restocking",
      description:
        "We follow a structured inventory replenishment process, ensuring you receive fresh stock right when you need it.",
    },
    {
      title: "Custom Order Fulfillment",
      description:
        "Tailored solutions for your specific inventory and design needs with precise quality assurance.",
    },
    {
      title: "Fast & Efficient Delivery",
      description:
        "Swift logistics systems ensure your stock arrives on time, every time, without hassle.",
    },
    {
      title: "Smart Inventory Management",
      description:
        "Our real-time system helps manage stock levels effectively, reducing overhead and waste.",
    },
    {
      title: "Flexible Supply Solutions",
      description:
        "Adaptable stock plans designed around your business needs, scaling as you grow.",
    },
  ];

  return (
    <Section className="flex flex-col gap-[87px]">
      <FeatureHeader
        label="Logistics"
        title="Reliable & Timely Jewelry Supply <br/> Solutions"
        className='!mb-0'
      />

      <TwoColGrid
        title="Consistent & Reliable Supply Chain"
        text="At Jewel Label, we ensure a steady and uninterrupted supply of high-quality lab-grown diamond jewelry, so your business never faces stock shortages or delays. Our time-to-time supply system is designed to keep your inventory updated, ensuring you always meet customer demand efficiently."
        imgSrc="/images/promises/jewelry-supply-solution.png"
      />

      <div className="w-full mt-[87px] flex flex-col md:flex-row md:h-96 relative gap-5">
        {cards.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                relative h-auto
                ${isActive ? "md:w-full w-full" : "md:w-1/3 sm:w-full"}
                ${index !== 0 ? "md:-ml-5 -mt-[30px]" : ""}
                ${isActive ? "bg-white" : "bg-neutral-50"}
                rounded-[40px] shadow-[-4px_0px_24px_0px_rgba(0,0,0,0.10)]
                overflow-hidden cursor-pointer -top-[40px]
              `}
            >
              {isActive ? (
                <div className="p-6 md:p-10 lg:p-16 flex flex-col gap-5 md:max-w-[520px]">
                  <Typography variant="h4" className="font-bold text-[#272727]">
                    {index + 1}
                  </Typography>
                  <div className="space-y-5">
                    <Typography variant="h4" className="text-[#272727]">
                      {card.title}
                    </Typography>
                    <Typography variant="h6" className="text-[#272727] w-full">
                      {card.description}
                    </Typography>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-row items-center p-[20px] gap-5">
                  <Typography variant="h4" className="text-[#272727]">
                    {index + 1}
                    <Typography
                    variant="p"
                    className="md:-rotate-90 whitespace-nowrap text-[#272727] block text-center"
                  >
                    {card.title}
                  </Typography>
                  </Typography>
                 
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default JewelrySupplySolution;
