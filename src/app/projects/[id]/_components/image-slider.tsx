"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

interface ImageSliderProps {
  images?: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, EffectFade]}
      className="w-full md:w-[80%] h-full"
      style={{
        // @ts-ignore
        "--swiper-pagination-color": "#b936ee",
        "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "6px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      effect={"fade"}
    >
      {images?.map((imageLink, index) => {
        return (
          <SwiperSlide key={index} className="w-full mx-auto">
            <Image
              src={imageLink}
              width={900}
              height={332}
              className=" w-full flex justify-center"
              alt="banner"
              priority
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
