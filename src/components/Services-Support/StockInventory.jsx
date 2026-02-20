import React from "react";
import {
  IMAGE_GALLERY_CONST,
  STOCK_INVENTORY,
} from "@/constants/dummyData";
import FeatureHeader from "../common/FeatureHeader/FeatureHeader";
import Typography from "../common/Typography/Typography";
import Section from "../common/Section/Section";
import useChunkedData from "@/hooks/useChunkedData";

const StockInventory = () => {
  const chunkedData = useChunkedData(IMAGE_GALLERY_CONST, 3);
  return (
    <Section>
      <FeatureHeader
        label="Stock Inventory"
        title="Premium Jewelry Collection at <br/> Your Fingertips"
      />

      <div
        id="stock-inventory"
        className="flex md:flex-row flex-col justify-between items-center gap-5"
      >
        <div className="flex items-center justify-center lg:w-[676px] lg:h-[683px] w-[358px] h-[375px] bg-[#E9E9E9] rounded-[50px] overflow-hidden relative">
          {/* Rotated Inner Container */}
          <div className="absolute w-[120%] h-[120%] rotate-[-40deg] flex gap-6 justify-center items-start">
            {chunkedData.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex flex-col gap-4 w-[203px] column-${colIndex} overflow-hidden`}
              >
                <div className="column-content">
                  {column.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      className={`h-[219px] w-[203px] rounded-[40px] object-cover mt-[20px]
              ${index % 2 === 0 ? "rotate-[3deg]" : "rotate-[-3deg]"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] w-ful flex flex-col md:gap-[60px] gap-5">
          <Typography variant="h6">
            Access a wide range of high-quality diamond and gold jewelry,
            sourced and curated to match the latest trends. Whether you are
            starting a new jewelry brand or expanding your existing business,
            our ready-to-sell stock ensures you never run out of inventory.
          </Typography>

          <div className="grid grid-cols-2 gap-[30px]">
            {STOCK_INVENTORY.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-[20px] text-center"
                >
                  <img
                    src={data.icon}
                    className="md:w-[64px] md:h-[64px] w-[48px] h-[48px]"
                  />
                  <Typography
                    variant="p"
                    dangerouslySetInnerHTML={{
                      __html: data.title,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StockInventory;
