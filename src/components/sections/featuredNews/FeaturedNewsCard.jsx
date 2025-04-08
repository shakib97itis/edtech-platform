import React from "react";

const NewsCard = ({
  image,
  alt,
  date,
  month,
  category,
  title,
  subtitle,
  description,
  timeAgo,
  comments,
}) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          alt={alt}
          src={image}
          loading="lazy"
          width={200}
          height={200}
          decoding="async"
          className="h-auto w-full transform transition-transform duration-700 ease-in-out group-hover:scale-125"
          style={{ color: "transparent" }}
        />
        {/* Date badge */}
        <div className="absolute top-2 right-2">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#014365] font-semibold text-white">
            <div className="leading-none">{date}</div>
            <div className="leading-none">{month}</div>
          </div>
        </div>
        {/* Category tag */}
        <div className="absolute bottom-0 bg-[#014365] px-3 py-2 font-semibold text-white transition-all duration-700 ease-in-out group-hover:translate-y-[-240%]">
          {category}
        </div>
      </div>

      {/* Title & subtitle */}
      <div className="h-24 bg-white p-3 transition-all duration-700 ease-in-out group-hover:relative group-hover:translate-y-[-100%]">
        <h3 className="font-syne text-xl font-semibold">{title}</h3>
        <h3 className="pt-2 text-base text-[#014365]">{subtitle}</h3>
        <div className="hidden pt-3 text-[16px] text-gray-600 group-hover:block">
          {description}
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative text-sm font-medium text-gray-400">
        <div className="z-20 flex items-center gap-10 bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 14.5 16" />
            </svg>
            {timeAgo}
          </div>
          <div className="flex items-center gap-2">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {comments} Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
