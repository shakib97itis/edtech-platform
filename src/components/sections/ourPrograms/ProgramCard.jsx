import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../../common/button/Button";
import Rating from "./Rating";

const ProgramCard = ({ img, title, price, rating, ratingCount }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={img} // Replace with your actual image URL
          alt="IT Support Specialist"
          className="h-full w-full bg-cover object-cover grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>

      {/* Content Section */}
      <div className="p-[16px]">
        <h3 className="mb-[16px] text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <div className="mb-[20px] flex items-center justify-between">
          {/* Rating */}
          <Rating rating={rating} ratingCount={ratingCount} />

          {/* Price */}
          <p className="text-sm text-gray-700">৳ {price}/-</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-between gap-[20px] sm:w-auto sm:flex-row sm:gap-[8px] md:flex-col md:gap-[20px] xl:flex-row xl:gap-[8px]">
          <Button
            variant="btnFour"
            text="Read Details"
            className="w-full px-[10px] py-[5px] text-sm"
          >
            <FaArrowCircleRight />
          </Button>

          <Button
            variant="btnThree"
            text="Enroll Now"
            className="w-full px-[30px] py-[8px] text-sm"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
