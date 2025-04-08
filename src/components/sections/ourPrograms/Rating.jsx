import React from "react";
import { LuStar } from "react-icons/lu";

function Rating({ rating, ratingCount }) {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, index) => (
        <LuStar
          key={index}
          size={16}
          className="text-yellow-500"
          fill="currentColor"
        />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <LuStar key={index} size={16} className="text-gray-300" />
      ))}
      <span className="text-neutral-650 ml-[10px] text-sm">
        {`${rating}.00`} ({ratingCount})
      </span>
    </div>
  );
}

export default Rating;
