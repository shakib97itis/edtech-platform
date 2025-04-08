import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../../common/button/Button";
import Rating from "./Rating";

const ProgramCard = ({ img, title, price, rating, ratingCount }) => {
  return (
    <div className="w-full overflow-hidden rounded-[12px] border border-gray-200 bg-white p-[24px] shadow-lg">
      {/* Image Section */}
      <div className="mb-[40px] overflow-hidden rounded-t-[12px]">
        <img
          src={img} // Replace with your actual image URL
          alt="IT Support Specialist"
          className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>

      {/* Content Section */}
      <div>
        <h3 className="mb-[12px] text-[18px] font-semibold text-gray-900">
          {title}
        </h3>

        <div className="mb-[20px] flex items-center justify-between">
          {/* Rating */}
          <Rating rating={rating} ratingCount={ratingCount} />

          {/* Price */}
          <p className="text-sm text-neutral-650">৳ {price}/-</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-between gap-[20px] sm:flex-row sm:gap-[8px] md:flex-col md:gap-[20px] xl:flex-row xl:gap-[8px]">
          <Button
            variant="btnFour"
            text="Read Details"
            className="w-full px-[10px] py-[5px] text-sm sm:w-auto md:w-full xl:w-auto"
          >
            <FaArrowCircleRight />
          </Button>

          <Button
            variant="btnTwo"
            text="Enroll Now"
            className="w-full px-[30px] py-[5px] text-sm sm:w-auto md:w-full xl:w-auto"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
