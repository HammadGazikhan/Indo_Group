/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SwiperComponentProps {
  images: { src: string; alt: string }[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      // pagination={{
      //   clickable: true,
      //   renderBullet: (index: number, className: string) =>
      //     `<li class="${className} hidden md:block custom-bullet"></li>`,
      // }}
      loop={true}
      className='h-[400px] md:h-[600px] lg:h-[700px]'
      style={{ width: "100%" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className='bg-cover  bg-center object-fill'
            style={{
              width: "100%",
              height: "100%",
              // objectFit: "cover",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
