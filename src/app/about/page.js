import CuttingEdgeTech from "@/components/About/CuttingEdgeTech";
import EmpoweringBrands from "@/components/About/EmpoweringBrands";
import LeadingInnovation from "@/components/About/LeadingInnovation";
import TwoRowCurveCard from "@/components/About/TwoRowCurveCard";
import FeatureHeader from "@/components/common/FeatureHeader/FeatureHeader";
import Section from "@/components/common/Section/Section";
import TwoColGrid from "@/components/common/TwoColGrid/TwoColGrid";
import GetInTouch from "@/components/layout/GetInTouch/GetInTouch";
import React from "react";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "About Us – JewelLabel",
  description:
    "Learn how JewelLabel empowers entrepreneurs in the diamond jewelry industry through innovative tech and business support.",
};

const page = () => {
  return (
    <>
      <Section className="md:mt-[100px] mt-[50px]">
        <FeatureHeader
          label="WHO WE ARE"
          title="Our vision: <br/> helping entrepreneurs sparkle"
        />

        {/* First Section - Image Left */}

        <TwoColGrid
          // className="p-[0px_115px]"
          title="Our Story"
          text="At Jewel Label, we believe every aspiring entrepreneur deserves a
          chance to succeed. That’s why we’ve created a platform to simplify
          starting and scaling a diamond jewelry business. By providing
          top-quality products, cutting-edge tech, and unmatched marketing
          support, we empower you to create a brand that dazzles."
          imgSrc="/images/about/our-story.png"
          reverse={false} // Image on left side
        />
      </Section>

      <Marquee autoFill speed={100}>
        <div className="lg:text-[125px] md:text-[70px] text-[43px] font-[900] uppercase text-transparent stroke-text flex items-center justify-center">
          Your Success is Our Business
          <span className=" rounded-full text-white md:mx-10 mx-5">
            {" "}
            <div className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[24px] h-[24px] rounded-full outline-[0.52px] outline-[#2727274D]" />
          </span>
        </div>
      </Marquee>

      {/* Second Section - Image Right */}

      <Section>
        {" "}
        <TwoColGrid
          // className="p-[0px_115px]"
          title="To transform entrepreneurial dreams into successful businesses"
          text="Jewel Label provides a comprehensive platform for ambitious
          entrepreneurs looking to step into the diamond jewelry industry.
          From cutting-edge website templates and premium stock to expert
          marketing support, we ensure you’re equipped to shine in the
          market."
          imgSrc="/images/about/successful-business.png"
          reverse={true} // Image on right side
        />
      </Section>

      <CuttingEdgeTech />
      <TwoRowCurveCard />
      <EmpoweringBrands />
      <LeadingInnovation />
      <GetInTouch />
    </>
  );
};

export default page;
