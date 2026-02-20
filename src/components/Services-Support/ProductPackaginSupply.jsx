import React from "react";
import Typography from "../common/Typography/Typography";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Section from "../common/Section/Section";

const ProductPackaginSupply = () => {
  return (
    <Section>
      <div id="product-packaging-supply">
        <FeatureHeader
          label="Product Packing Supply"
          title="Elegant & Secure Packaging <br/> for Your Jewelry"
        />
        <div className="w-full flex flex-col md:flex-row gap-y-10 md:gap-x-10">
          <div className="w-full md:w-1/2">
            <Typography variant="h6" className="mb-4">
              Your packaging speaks for your brand. We provide premium,
              customizable packaging solutions that enhance your brand’s image
              while keeping your jewelry safe.
            </Typography>
            <ul className="list-image-[url(/icons/tick.svg)] list-inside space-y-[20px] lg:mt-[44px] mt-[30px]">
              <Typography variant="label" as="li">
                Custom-branded jewelry boxes
              </Typography>
              <Typography variant="label" as="li">
                Secure & styTypographysh packaging materials
              </Typography>
              <Typography variant="label" as="li">
                Eco-friendly options available
              </Typography>
              <Typography variant="label" as="li">
                Hassle-free shipping & fulfillment support
              </Typography>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/services/packaging-for-jewelry.png"
              alt="packaging-for-jewelry"
              className="w-full rounded-[50px] xl:h-[500px] lg:h-[351px] h-[271px] object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductPackaginSupply;
