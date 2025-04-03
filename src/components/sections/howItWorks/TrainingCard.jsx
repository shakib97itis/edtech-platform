import React from "react";
import number1 from "../../../assets/number1.png";

const TrainingCard = () => {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/') mx-auto w-2/3 rounded-2xl border border-gray-200 bg-white px-[16px] pb-[20px] text-center">
        {/* Create a custom shadow */}

        {/* Top folded paper effect */}
        <div className="mx-auto -mt-8 h-[158px] w-[161px]">
          <img
            src={number1}
            alt="Number 1"
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="mt-8 text-lg font-bold text-gray-900">Training</h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Our training programs, tailored to each subject matter and specialized
          courses, last at least 3 months and take place in our physical venues.
          Access to all course materials will be provided through the Bulipe
          App/repository, ensuring a comprehensive learning experience for all
          participants.
        </p>

        <div className="absolute bottom-0 left-1/2 mt-4 h-1.5 w-14 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-700"></div>
      </div>
    </div>
  );
};

export default TrainingCard;
