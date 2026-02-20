"use client";
import FeatureHeader from "@/components/common/FeatureHeader/FeatureHeader";
import useImageCardHeight from "@/hooks/useImageCardHeight";
import React from "react";
import Marquee from "react-fast-marquee";

const ImageGallery = ({ imageGalleryData }) => {
  const { getImageHeight } = useImageCardHeight();

  return (
    <section>
      <div className="md:px-[83px] px-[20px]">
        <FeatureHeader
          label={"WEB TEMPLATES"}
          title={"1000+ Latest jewelry Designs"}
        />
      </div>
      <Marquee autoFill>
        <div className="columns-5 gap-4 mr-8 space-y-4 max-h-[900px]">
          {imageGalleryData.map((src, index) => {
            const cardClass = `__0${(index % 4) + 1}`;
            const heightClass = getImageHeight(cardClass, index);
            return (
              <div key={index} className={`card-wrap ${cardClass}`}>
                <img
                  src={src}
                  alt={`gallery-img-${index}`}
                  className={`md:rounded-[50px] rounded-[40px] w-full object-cover ${heightClass}`}
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default ImageGallery;
