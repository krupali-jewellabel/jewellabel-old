import React from "react";
import Typography from "../Typography/Typography";

const TextContentCard = ({ title, description, className }) => {
  return (
    <div
      className={`flex gap-3 bg-[rgba(255, 255, 255, 1)] border border-[#00000033] lg:rounded-[40px] rounded-[37px] overflow-hidden items-center justify-start ${className}`}
    >
      <div className="flex flex-col lg:gap-[20px] gap-[13px] lg:py-[30px] lg:px-[40px] py-[20px] px-[34px]">
        <Typography variant="h4" className="text-[#272727]">
          {title}
        </Typography>
        <Typography variant="h6">{description}</Typography>
      </div>
    </div>
  );
};

export default TextContentCard;
