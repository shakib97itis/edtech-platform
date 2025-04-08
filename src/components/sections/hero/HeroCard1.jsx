const CardComponent = () => {
  return (
    <div className="hover:shadow-primary-200 relative mt-14 cursor-pointer rounded-[24px] bg-white p-[32px] shadow-lg transition-all duration-300 hover:shadow-md">
      <div className="absolute top-0 left-1/2 flex h-28 w-28 -translate-1/2 transform items-center justify-center rounded-full border-8 border-sky-800 shadow-lg shadow-white">
        <div className="bg-primary-800 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white p-4">
          <MySVG />
        </div>
      </div>

      <div className="pt-14">
        <h5 className="font-ubuntu text-xl font-medium">
          Master In-Demand Digital Skills to Advance Your Career
        </h5>
        <p className="font-ubuntu mt-5 text-[16px] leading-7">
          Unlock career opportunities through our industry-recognized Digital
          Skill Development program. Begin your journey today with 300 local
          partners to stay ahead of the curve!
        </p>
      </div>
    </div>
  );
};

export default CardComponent;

const MySVG = () => {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.4001 30.5996H24.6001V53.3996H33.6V50.2187C33.6 47.0049 36.2519 44.3995 39.5252 44.3995H44.4736C47.7459 44.3995 50.399 47.0049 50.399 50.2187L50.3998 53.3996H59.4001V30.5996ZM42 42.5995C44.3196 42.5995 46.2 40.7188 46.2 38.399C46.2 36.0792 44.3196 34.1995 42 34.1995C39.6804 34.1995 37.8 36.0791 37.8 38.399C37.8 40.7189 39.6804 42.5995 42 42.5995Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M19.7998 43.2V25.8H48.5998V22.5"
        stroke="#F15B2D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.2002 40.8V58.2H35.4002V61.5"
        stroke="#F15B2D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="42.0001"
          y1="30.5996"
          x2="42.0001"
          y2="53.3996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F15B2D" />
          <stop offset="1" stopColor="#F15B2D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
