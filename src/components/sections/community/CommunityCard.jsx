import React from "react";

function CommunityCard({ number, text }) {
  return (
    <div className="border-primary-700 flex flex-col items-center border bg-gray-900 p-8 text-center sm:rounded-l-lg">
      <h3 className="text-4xl font-bold text-white">{number}</h3>
      <p className="mt-2 text-neutral-400">{text}</p>
    </div>
  );
}

export default CommunityCard;
