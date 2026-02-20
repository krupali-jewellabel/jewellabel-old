import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Typography from "../common/Typography/Typography";
import Section from "../common/Section/Section";

const AdvertingMarketing = () => {
  return (
    <Section>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start" id="adverting-marketing">
        <div className="space-y-6">
          <FeatureHeader
            label="Advertising & Marketing"
            title="Amplify Your Brand’s <br/> Reach & Sales"
            description="We help you attract, engage, and convert customers with our expert marketing strategies. From social media campaigns to Google Ads, we ensure your brand gets the visibility it deserves."
          />
          <img
            src="/images/services/Advertising-1.png"
            alt="advertising strategy"
            className="object-cover w-full lg:h-[627px] md:h-[420px] h-[271px] rounded-[50px]"
          />
        </div>

        <div className="space-y-6">
          <img
            src="/images/services/Advertising-2.png"
            alt="marketing demo"
            className="object-cover w-full rounded-[40px] lg:h-[627px] md:h-[420px] h-[271px]"
          />
          <ul className="list-image-[url(/icons/tick.svg)] list-inside space-y-[20px] lg:mt-[44px] mt-[30px]">
            {[
              "Social media management",
              "Influencer collaborations & brand partnerships",
              "Performance-driven ad campaigns",
              "Content creation & brand storytelling",
            ].map((item, idx) => (
              <Typography variant="label" as="li" key={idx}>
                {item}
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AdvertingMarketing;
