import FeatureHeader from "@/components/common/FeatureHeader/FeatureHeader";
import Section from "@/components/common/Section/Section";
import TwoColGrid from "@/components/common/TwoColGrid/TwoColGrid";
import CertifiedDiamonds from "@/components/Promises/CertifiedDiamonds";
import CircularFlow from "@/components/Promises/CircularFlow";
import FasterOrderDispatch from "@/components/Promises/FasterOrderDispatch";
import Foundation from "@/components/Promises/Foundation";
import JewelrySupplySolution from "@/components/Promises/JewelrySupplySolution";
import React from "react";

export const metadata = {
  title: "Promises – JewelLabel",
};

const page = () => {
  return (
    <>
      <Section className="md:mt-[100px] mt-[50px]">
        <FeatureHeader
          label="OUR PROMISES"
          title="End-to-End Business Solutions <br/> for your Jewelry Brands"
        />
        <TwoColGrid
          title="End to End Business Solution"
          text="At Jewel Label, we believe every aspiring entrepreneur deserves a chance to succeed. That’s why we’ve created a platform to simplify starting and scaling a diamond jewelry business. By providing top-quality products, cutting-edge tech, and unmatched marketing support, we empower you to create a brand that dazzles."
          reverse={false} // Image on left side
          imgSrc={"/images/promises/end-to-end-business-solution.png"}
        />
      </Section>
      <CircularFlow />
      <FasterOrderDispatch />
      <JewelrySupplySolution />
      <Foundation />
      <CertifiedDiamonds />
    </>
  );
};

export default page;
