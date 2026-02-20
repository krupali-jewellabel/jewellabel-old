import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import TwoColWithCard from "../common/TwoColGrid/TwoColWithCard";
import { BUILDING_TRUST_CARD, COMMITMENT_CARD } from "@/constants/dummyData";
import Section from "../common/Section/Section";

const Foundation = () => {
  return (
    <Section>
      <FeatureHeader
        label="foundation"
        title="quality & trust - <br/> THe foundation of jewel label"
        description="We believe that quality and trust are the pillars of a successful jewelry business. Every piece we create reflects our commitment to excellence, precision, and authenticity, ensuring that your customers receive only the finest lab-grown diamond jewelry with complete confidence."
      />

      <TwoColWithCard
        imgSrc="/images/promises/commitment-to-quality.png"
        cardTitle="our commitment to quality"
        cardDetails={COMMITMENT_CARD}
        className="mb-[76px]"
      />

      <TwoColWithCard
        reverse={true}
        imgSrc="/images/promises/building-trust.png"
        cardTitle="Building Trust Through Transparency"
        cardDetails={BUILDING_TRUST_CARD}
      />
    </Section>
  );
};

export default Foundation;
