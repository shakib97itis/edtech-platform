import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeroBanner1 from "./HeroBanner1";
import HeroBanner2 from "./HeroBanner2";
import HeroBanner3 from "./HeroBanner3";

import "swiper/css";
import "swiper/css/autoplay";

const HeroSlider = () => {
  return (
    <Swiper
      
      spaceBetween={0}
      slidesPerView={1}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className=""
    >
      <SwiperSlide>
        <HeroBanner1 />
      </SwiperSlide>
      <SwiperSlide className="">
        <HeroBanner2 />
      </SwiperSlide>
      <SwiperSlide className="">
        <HeroBanner3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
