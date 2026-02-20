import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import TwoColGrid from "../common/TwoColGrid/TwoColGrid";
import Section from "../common/Section/Section";

const ServiceAndSupport = () => {
  return (
    <Section className="md:mt-[100px] mt-[50px]">
      <FeatureHeader
        label="Services & Support"
        title="Everything You Need to Build & <br/> Grow Your Jewelry Business"
      />

      <TwoColGrid
        imgSrc="/images/services/build-and-grow-jewelry-business.png"
        title="Comprehensive Services & Dedicated Support"
        text="At Jewel Label, we provide a complete solution to help businesses launch and scale their jewelry brands seamlessly. From stock inventory to digital presence and marketing, we ensure you have everything needed to establish a successful jewelry business."
      />
    </Section>
  );
};

export default ServiceAndSupport;
