import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import { CERTIFIED_DIOMONDS_CARD } from "@/constants/dummyData";
import IconWithContent from "../common/Cards/IconWithContent";
import Section from "../common/Section/Section";

const CertifiedDiamonds = () => {
  return (
    <Section>
      <FeatureHeader
        label="why choose certified diamonds"
        title="Certified Lab-Grown Diamonds – <br/> Purity & Perfection Guaranteed"
        description="At Jewel Label, we provide only certified lab-grown diamonds, ensuring exceptional quality, authenticity, and ethical sourcing. Our diamonds undergo rigorous testing and certification by globally recognized gemological institutes, guaranteeing their brilliance, purity, and value."
      />

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">
        {CERTIFIED_DIOMONDS_CARD.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {/* Insert Image at the Second Column Position */}
              {index === 1 && (
                <div className="flex justify-center items-center">
                  <img
                    src="/images/promises/certified-diamonds.png"
                    alt="Certified Diamond"
                    className="w-full xl:h-[500px] lg:h-[413px] md:h-[web] h-auto rounded-[50px] object-cover"
                  />
                </div>
              )}

              {/* Render IconWithContent Normally */}
              <IconWithContent
                imgUrl={item.iconUrl}
                title={item.title}
                description={item.description}
                className="bg-[#FCFCFC]"
              />
            </React.Fragment>
          );
        })}
      </div>
    </Section>
  );
};

export default CertifiedDiamonds;
