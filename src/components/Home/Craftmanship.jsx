import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Section from "../common/Section/Section";

const Craftmanship = ({ featureLabel, featureTitle,videoLink }) => {
  return (
    <Section>
      <FeatureHeader label={featureLabel} title={featureTitle} />
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" rounded-[50px] w-[100%]"
      >
        <source src={videoLink} type="video/mp4" />
      </video>
    </Section>
  );
};

export default Craftmanship;
