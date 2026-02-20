import React from "react";
import Typography from "../Typography/Typography";

const IconWithContent = ({ title, description, index, imgUrl, className }) => {
  return (
    <div
      className={` bg-[rgba(255, 255, 255, 1)] lg:h-[500px] h-auto border border-[#00000033] rounded-[50px] overflow-hidden items-center justify-start ${className} `}
      key={index}
    >
      <div className="flex flex-col md:gap-4 gap-5 justify-center lg:p-[50px_60px] md:p-[30px_20px] p-[30px_20px]">
        <img
          src={imgUrl}
          className="xl:h-[80px] xl:w-[80px] md:h-[64px] md:w-[64px] h-[48px] w-[48px]"
        />
        <Typography variant="h4" className="text-[#272727]">
          {title}
        </Typography>
        <Typography
          variant="h6"
          className="mt-[10px]"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default IconWithContent;
