import React from "react";
import TextContentCard from "../common/Cards/TextContentCard";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import { CUTTING_EDGE_TECH_DATA } from "@/constants/dummyData";
import Section from "../common/Section/Section";

const CuttingEdgeTech = () => {
  const { cards } = CUTTING_EDGE_TECH_DATA;
  return (
    <Section>
      <FeatureHeader
        label="technology"
        title="Cutting-Edge Technology in <br/> Lab-Grown Diamonds"
        description="At Jewel Label, we harness the power of cutting-edge technology to redefine luxury in the diamond industry. Our lab-grown diamonds are crafted using advanced techniques like Chemical Vapor Deposition (CVD) and High-Pressure High-Temperature (HPHT), ensuring they are ethically sourced, eco-friendly, and identical to natural diamonds in brilliance, durability, and composition."
      />

      <section
        className={`w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[89px] items-center`}
      >
        {/* Image */}
        {/* <div > */}
        <img
          src="/images/about/cutting-edge-tech.png"
          className="2xl:w-full 2xl:h-[700px] md:w-[547px] md:h-[559px] w-[358px] h-[271px] mb-[20px] md:mb-0 object-cover rounded-[40px]"
        />
        {/* </div> */}
        {/* Content */}
        <div>
          <div className="md:space-y-[40px] space-y-[20px]">
            {cards?.map((items, index) => {
              return (
                <div key={index}>
                  <TextContentCard
                    description={items.cardDescription}
                    title={items.cardTitle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Section>
  );
};

export default CuttingEdgeTech;
