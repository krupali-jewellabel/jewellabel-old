import React from "react";
import Marquee from "react-fast-marquee";

const TemplateSlider = ({ templatesData }) => {

  return (
    <Marquee autoFill>
      <div className="inline-flex justify-start items-center gap-8 mr-8">
        {templatesData.map((items, index) => {
          return (
            <img
            key={items}
              alt={`template-${index}`} 
              className="md:w-[330px] md:h-[450px] 2xl:h-[650px] 2xl:w-[450px] xl:h-[550px] xl:w-[350px] h-[361px] w-[231px] rounded-[42.21px] object-cover shadow-[0px_16.88555335998535px_28.705440521240234px_0px_rgba(0,0,0,0.12)]"
              src={items}
            />
          );
        })}
      </div>
    </Marquee>
  );
};

export default TemplateSlider;
