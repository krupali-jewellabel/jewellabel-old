import React from "react";
import Typography from "../common/Typography/Typography";
import CircularSpinner from "../common/CircularSpinner/CircularSpinner";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Image from "next/image";
import Section from "../common/Section/Section";

const StatCard = ({ count, suffix, label }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <Typography
        variant="h3"
        className="font-[400] flex items-center justify-center md:justify-start gap-1"
      >
        {count}
        <Typography variant="span" className="text-[#F55733]">
          {suffix}
        </Typography>
      </Typography>
      <Typography variant="h6" className="text-[#A0A0A0]">
        {label}
      </Typography>
    </div>
  );
};

const EmpoweringBusiness = ({ featureLabel, featureTitle, title, description }) => {
  return (
    <Section className="w-full ">
      <FeatureHeader
        label={featureTitle}
        title={featureLabel}
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
        {/* Center Image - show first on mobile */}
        <div className="w-full md:w-[90%] lg:w-[50%] order-1 lg:order-2">
          <img
            src="/images/jewllery-business-solution.png"
            alt="business-solution"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Left Spinner Section - second on mobile, first on desktop */}
        <div className="w-full md:w-full lg:w-[25%] flex flex-col items-start order-2 lg:order-1">
          <CircularSpinner />
          <div className="mt-6 md:mt-10">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{description}</Typography>
          </div>
        </div>

        {/* Right Stats Section - last on all sizes */}
        <div className="w-full lg:w-[20%] flex flex-wrap lg:flex-col md:flex-row justify-start gap-6 md:gap-8 order-3">
          <StatCard count={10} suffix="+" label="Years Experience" />
          <StatCard count={500} suffix="+" label="Projects Done" />
          <StatCard count={140} suffix="+" label="Happy Clients" />
        </div>
      </div>
    </Section>
  );
};

export default EmpoweringBusiness;
