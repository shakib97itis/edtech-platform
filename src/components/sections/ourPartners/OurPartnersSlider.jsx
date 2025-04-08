import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import OurPartnersSlide from "./OurPartnersSlide";
import { useState } from "react";

const OurPartnersSlider = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(allSlides.map((slide) => slide.category)),
  ];

  const filteredSlides =
    activeCategory === "All"
      ? allSlides
      : allSlides.filter((slide) => slide.category === activeCategory);

  return (
    <div>
      <div>
        <div className="mb-[20px] flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`hover:text-secondary-400 group cursor-pointer pb-[6px] text-center leading-[2] font-medium transition-all duration-300 md:text-left ${activeCategory === category ? "text-secondary-400" : ""}`}
            >
              {category}

              <span className="group-hover:bg-secondary-400 block h-[2px] w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        <Swiper
          key={activeCategory} // Force re-render when category changes
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
        >
          {filteredSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <OurPartnersSlide imgLink={slide.imgLink} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartnersSlider;

const allSlides = [
  {
    id: 1,
    imgLink: "/public/ourPartnersImages/ibm-logo.png",
    alt: "IBM",
    category: "Technology Partners",
  },
  {
    id: 2,
    imgLink: "/public/ourPartnersImages/digital-ocean-logo.png",
    alt: "Digital Ocean",
    category: "Branding Partners",
  },
  {
    id: 3,
    imgLink: "/public/ourPartnersImages/hostinger-logo.png",
    alt: "Hostinger",
    category: "Training Partners",
  },
  {
    id: 4,
    imgLink: "/public/ourPartnersImages/microsoft-logo.webp",
    alt: "Microsoft",
    category: "Banking Partners",
  },
  {
    id: 5,
    imgLink: "/public/ourPartnersImages/ibm-logo.png",
    alt: "IBM",
    category: "Technology Partners",
  },
  {
    id: 6,
    imgLink: "/public/ourPartnersImages/digital-ocean-logo.png",
    alt: "Digital Ocean",
    category: "Branding Partners",
  },
  {
    id: 7,
    imgLink: "/public/ourPartnersImages/hostinger-logo.png",
    alt: "Hostinger",
    category: "Training Partners",
  },
  {
    id: 8,
    imgLink: "/public/ourPartnersImages/microsoft-logo.webp",
    alt: "Microsoft",
    category: "Banking Partners",
  },
  {
    id: 9,
    imgLink: "/public/ourPartnersImages/ibm-logo.png",
    alt: "IBM",
    category: "Technology Partners",
  },
  {
    id: 10,
    imgLink: "/public/ourPartnersImages/digital-ocean-logo.png",
    alt: "Digital Ocean",
    category: "Branding Partners",
  },
  {
    id: 11,
    imgLink: "/public/ourPartnersImages/hostinger-logo.png",
    alt: "Hostinger",
    category: "Training Partners",
  },
  {
    id: 12,
    imgLink: "/public/ourPartnersImages/microsoft-logo.webp",
    alt: "Microsoft",
    category: "Banking Partners",
  },
  {
    id: 13,
    imgLink: "/public/ourPartnersImages/ibm-logo.png",
    alt: "IBM",
    category: "Technology Partners",
  },
  {
    id: 14,
    imgLink: "/public/ourPartnersImages/digital-ocean-logo.png",
    alt: "Digital Ocean",
    category: "Branding Partners",
  },
  {
    id: 15,
    imgLink: "/public/ourPartnersImages/hostinger-logo.png",
    alt: "Hostinger",
    category: "Training Partners",
  },
  {
    id: 16,
    imgLink: "/public/ourPartnersImages/microsoft-logo.webp",
    alt: "Microsoft",
    category: "Banking Partners",
  },
  {
    id: 17,
    imgLink: "/public/ourPartnersImages/ibm-logo.png",
    alt: "IBM",
    category: "Technology Partners",
  },
  {
    id: 18,
    imgLink: "/public/ourPartnersImages/digital-ocean-logo.png",
    alt: "Digital Ocean",
    category: "Branding Partners",
  },
  {
    id: 19,
    imgLink: "/public/ourPartnersImages/hostinger-logo.png",
    alt: "Hostinger",
    category: "Training Partners",
  },
  {
    id: 20,
    imgLink: "/public/ourPartnersImages/microsoft-logo.webp",
    alt: "Microsoft",
    category: "Banking Partners",
  },
];
