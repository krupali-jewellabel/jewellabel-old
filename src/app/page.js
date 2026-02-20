"use client";
import HeroSection from "@/components/Home/HeroSection";
import {
  HOME_SERVICE_CONST,
  IMAGE_GALLERY_CONST,
  TEMPLATE_DESIGN_CONST,
  TESTIMONIAL_CONST,
} from "@/constants/dummyData";
import ServicesAccordion from "@/components/Home/ServicesAccordion";
import ImageGallery from "@/components/Home/ImageGallery";
import EmpoweringBusiness from "@/components/Home/EmpoweringBusiness";
import Craftmanship from "@/components/Home/Craftmanship";
import PromisesTimeline from "@/components/Home/PromisesTimeline";
import SuccessStories from "@/components/Home/SuccessStories";
import Templates from "@/components/Home/Templates";
import GetInTouch from "@/components/layout/GetInTouch/GetInTouch";

export default function Home() {
  return (
    <>
      <HeroSection
        title="PARTNER"
        subTitle="Your Diamond Jewellery"
        description=" Launch & grow your jewelry brand effortlessly with Jewel Label's
                expertise!"
        bottomTitle="CREATING WORK THAT INSPIRE"
      />
      {/* <ServicesAccordion
        featureLabel="Our Services"
        featureTitle={`We are jewellabel <br /> YOUR End-to-End Jewellery <br /> Business Solution`}
        accordionData={HOME_SERVICE_CONST}
      /> */}
      <ImageGallery imageGalleryData={IMAGE_GALLERY_CONST} />
      <EmpoweringBusiness
        featureTitle={"WHO WE ARE"}
        featureLabel="We are jewellabel YOUR End to End <br/> jewellery Business Solution"
        title="Our Story"
        description=" At BrightEdge Studio, we specialize in crafting custom web
              solutions, including branding, web design, development, and
              marketing, tailored to meet your business needs."
      />
      <Templates
        featureLabel={"WEB TEMPLATES"}
        featureTitle={"100+ WEBSITE DESIGN TEMPLATES"}
        templatesData={TEMPLATE_DESIGN_CONST}
      />
      <Craftmanship
        featureLabel={"CRAFTMANSHIP"}
        featureTitle={
          "The Art of Craftsmanship – Behind <br/> the Scenes at JewelLabel"
        }
        videoLink={"/videos/craftmanship.mov"}
      />
      <PromisesTimeline />
      {/* <SuccessStories successStoryData={TESTIMONIAL_CONST} /> */}
      <GetInTouch />
    </>
  );
}
