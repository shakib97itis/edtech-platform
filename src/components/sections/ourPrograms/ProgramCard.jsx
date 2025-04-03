import React from "react";
import { LuStar } from "react-icons/lu";
import { FaArrowCircleRight } from "react-icons/fa";
import img from "../../../assets/Course1.png";
import Button from "../../common/button/Button";

const ProgramCard = () => {
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
          IT Support Specialist
        </h3>

        <div className="mb-[20px] flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <LuStar
                key={index}
                size={16}
                className="text-yellow-500"
                fill="currentColor"
              />
            ))}
            <span className="ml-[10px] text-sm text-gray-600">5.00 (225)</span>
          </div>
          {/* Price */}
          <p className="text-sm text-gray-700">৳ 25,000/-</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button variant="btnFive" text="Read Details" className="px-[10px] py-[5px]">
            <FaArrowCircleRight />
          </Button>

          <Button
            variant="btnThree"
            text="Enroll Now"
            className="px-[30px] py-[8px]"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
