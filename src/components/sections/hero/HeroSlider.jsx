import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeroBanner1 from "./HeroBanner1";

import "swiper/css";
import "swiper/css/autoplay";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
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
        <HeroBanner1 />
      </SwiperSlide>
      <SwiperSlide className="">
        <HeroBanner1 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
