import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderButton from "./SliderButton";

const testimonials = [
  {
    avatar: "/assets/img/testimonials/avatar_2.jpg",
    message:
      "The catering service was exceptional! Every detail was perfect, from the setup to the delicious menu. Our guests were amazed.",
    name: "Ryan Watson",
  },
  {
    avatar: "/assets/img/testimonials/avatar_3.jpg",
    message:
      "Event planning was flawless. The team handled everything seamlessly and made our corporate event a huge success.",
    name: "Michael Johnson",
  },
  {
    avatar: "/assets/img/testimonials/avatar.jpg",
    message:
      "The entertainment and decor were outstanding! Our wedding was magical and received countless compliments from friends and family.",
    name: "Sophia Lee",
  },
];

function Slider() {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-full md:max-w-[630px] h-auto md:h-[200px] rounded-lg">
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-9 px-4 sm:px-6 md:px-12 py-4 md:py-0 h-full">
            {/* avatar image */}
            <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] flex-shrink-0">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-contain rounded-full"
                quality={100}
              />
            </div>

            {/* testimonial text */}
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm sm:text-base md:text-sm lg:text-base leading-relaxed break-words">
                {item.message}
              </p>
              <p className="font-primary font-semibold text-primary mt-1">
                {item.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* slider buttons */}
      <SliderButton />
    </Swiper>
  );
}

export default Slider;
