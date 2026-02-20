import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Section from "../common/Section/Section";
import TemplateSlider from "../common/Slider/TemplateSlider";
import { TEMPLATE_DESIGN_CONST } from "@/constants/dummyData";

const WebsiteDesignDevelopment = () => {
  return (
    <Section noPaddingX>
      <div
        className="lg:px-[83px] md:px-[56px] px-[16px]"
        id="website-design-development"
      >
        <FeatureHeader
          label="Website Design & Development"
          title="Your Digital Storefront, <br/> Designed for Success"
          description="Access a wide range of high-quality diamond and gold jewelry, sourced and curated to match the latest trends. Whether you are starting a new jewelry brand or expanding your existing business, our ready-to-sell stock ensures you never run out of inventory."
        />
      </div>
      <TemplateSlider templatesData={TEMPLATE_DESIGN_CONST} />
    </Section>
  );
};

export default WebsiteDesignDevelopment;
