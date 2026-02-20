import React from "react";
import TextContentCard from "../Cards/TextContentCard";

const TwoColWithCard = ({
  className,
  reverse = false,
  imgSrc,
  cardTitle,
  cardDetails,
}) => {
  return (
    <section
      className={`w-full grid md:grid-cols-2 grid-cols-1 items-center ${className}  `}
    >
      {/* Image */}
      <div
        className={`w-full items-center ${
          reverse ? "md:pl-[4rem] pb-5 order-2" : "md:pr-[4rem] pb-5 order-1"
        }`}
      >
        <img
          src={imgSrc}
          className="w-[100%] xl:h-[590px] md:h-[450px] h-[271px] object-cover rounded-[50px]"
        />
      </div>
      {/* Content */}
      <div
        className={` w-full flex flex-col gap-[30px]  ${
          reverse ? "pb-5 order-1" : "pb-5 order-2"
        }`}
      >
        <h4 className="font-[600] text-[30px] uppercase">{cardTitle}</h4>
        {cardDetails.map((item, index) => {
          return (
            <div key={index}>
              <TextContentCard
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TwoColWithCard;
