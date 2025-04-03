import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import HeroBanner from "./HeroBanner";

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
      className="h-[600px] w-full bg-[#0a3a47]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <HeroBanner />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBanner />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBanner />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
