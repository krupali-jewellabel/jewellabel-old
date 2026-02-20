import GetInTouch from "@/components/layout/GetInTouch/GetInTouch";
import AdvertingMarketing from "@/components/Services-Support/AdvertingMarketing";
import OurServices from "@/components/Services-Support/OurServices";
import ProductPackaginSupply from "@/components/Services-Support/ProductPackaginSupply";
import ServiceAndSupport from "@/components/Services-Support/ServiceAndSupport";
import StockInventory from "@/components/Services-Support/StockInventory";
import WebsiteDesignDevelopment from "@/components/Services-Support/WebsiteDesignDevelopment";
import React from "react";

export const metadata = {
  title: "Services – JewelLabel",
};

const page = () => {
  return (
    <>
      <ServiceAndSupport />
      <OurServices />
      <StockInventory />
      <WebsiteDesignDevelopment />
      <AdvertingMarketing />
      <ProductPackaginSupply />
      <GetInTouch />
    </>
  );
};

export default page;
