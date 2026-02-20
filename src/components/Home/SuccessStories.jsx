import React from "react";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import TestimonialsCard from "../common/Cards/TestimonialsCard";
import Section from "../common/Section/Section";
import useChunkedData from "@/hooks/useChunkedData";

const SuccessStories = ({successStoryData}) => {
  const chunkedData = useChunkedData(successStoryData, 3);

  return (
    <Section>
      <FeatureHeader
        label={"SUCCSESS STORIES"}
        title={"Testimonials That Inspire <br/> Confidence"}
      />

      {/* Desktop View (3 columns with alternating animation) */}
      <div className="hidden lg:flex gap-6 max-h-[550px]">
        {chunkedData.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col w-1/3 column-${colIndex} overflow-hidden`}
          >
            <div className="column-content flex flex-col gap-4">
              {column.map((item, index) => (
                <div key={index}>
                  <TestimonialsCard
                    comments={item.comments}
                    userImg={item.userImg}
                    name={item.name}
                    designation={item.designation}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View (1 column, slide up only) */}
      <div className="lg:hidden overflow-hidden max-h-[500px] mt-6">
        <div className="slide-up-mobile flex flex-col gap-4">
          {successStoryData.map((item, index) => (
            <div key={index}>
              <TestimonialsCard
                comments={item.comments}
                userImg={item.userImg}
                name={item.name}
                designation={item.designation}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SuccessStories;
