import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import TemplateSlider from "../common/Slider/TemplateSlider";

const Templates = ({ featureLabel, featureTitle,templatesData }) => {
  return (
    <section>
      <div className="md:px-[83px] px-[16px]">
        <FeatureHeader
          label={featureLabel}
          title={featureTitle}
        />
      </div>
      <TemplateSlider templatesData={templatesData} />
    </section>
  );
};

export default Templates;
