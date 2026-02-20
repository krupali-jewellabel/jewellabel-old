import Typography from "@/components/common/Typography/Typography";
import { CURVE_CARD_DATA } from "@/constants/dummyData";
import React from "react";
import Section from "../common/Section/Section";

const TwoRowCurveCard = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-2">
          <img
            src="/images/about/card-image-1.png"
            className="w-[100%] lg:h-[310px] h-[211px] object-cover rounded-[40px]"
          />
        </div>

        {CURVE_CARD_DATA.map((item, index) => {
          return (
            <div
              className="gap-0 rounded-[2.5rem] flex flex-col relative"
              key={index}
            >
              <div className="bg-[#d8d7d7]  rounded-[2.5rem_2.5rem_0px_0px] h-[120px] relative">
                <div className="bg-white rounded-br-[2.5rem] flex justify-start items-center w-[200px] h-[120px] pl-8 absolute inset-y-0 left-0">
                  <Typography variant="h6" className="capitalize !font-[600] inline-block">
                    {item.title}
                  </Typography>
                </div>
                <div className="w-[40px] h-[40px] absolute left-[200px] top-0 overflow-hidden rotate-180 w-embed">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-[#d8d7d7] rounded-[2.5rem_0_2.5rem_2.5rem] flex-1 flex justify-center items-center p-[1.5rem_2rem] relative">
                <Typography variant="p" className="text-[1.25rem] font-[200] leading-1.1">
                  {item.description}
                </Typography>
              </div>
            </div>
          );
        })}

        <div className="">
          <img
            src="/images/about/card-image-2.png"
            className="w-[100%] object-cover rounded-[2.5rem]"
          />
        </div>
      </div>
    </Section>
  );
};

export default TwoRowCurveCard;
