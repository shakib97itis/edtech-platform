import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import HeroBanner1 from "./HeroBanner1";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="bg-primary-700 h-[600px] w-full"
    >
      <SwiperSlide className="h-full">
        <HeroBanner1 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
