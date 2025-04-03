import React from "react";
import { FaCrosshairs } from "react-icons/fa";

const DigitalSkillsCard = () => {
  return (
    <div className="relative mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
      {/* Icon Section */}
      <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-900 text-white shadow-md">
        <FaCrosshairs className="text-3xl" />
      </div>

      {/* Content Section */}
      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          Master In-Demand Digital Skills to Advance Your Career
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Unlock career opportunities through our industry-recognized Digital
          Skill Development program. Begin your journey today with 300 local
          partners to stay ahead of the curve!
        </p>
      </div>
    </div>
  );
};

export default DigitalSkillsCard;
