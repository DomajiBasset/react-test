import React, { useState } from "react";
import { MoonIcon, PhoneIcon, ScissorsIcon, StarIcon, SunIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from 'swiper/react';
// import "./Carousel.css";
import 'swiper/swiper-bundle.css'; // 引入 Swiper 樣式
import 'swiper/css/navigation';
// import 'swiper/modules/autoplay.min.css'; // 引入 Swiper 樣式
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const HomeSwiper = () => {
    return (
        <Swiper
            className="w-full border-b-4 border-purple-500"
            modules={[Pagination, Autoplay, Navigation]}
            pagination={true}
            navigation
            autoplay={{ delay: 4000 }}
            // spaceBetween={10}
            // slidesPerView={2}
            loop={true}
            style={{
                height: '200px'
            }}
        >
            <SwiperSlide>
                <MoonIcon className="w-50 justify-self-center"></MoonIcon>
            </SwiperSlide>
            <SwiperSlide>
                <PhoneIcon className="w-50 justify-self-center"></PhoneIcon>
            </SwiperSlide>
            <SwiperSlide>
                <ScissorsIcon className="w-50 justify-self-center"></ScissorsIcon>
            </SwiperSlide>
            <SwiperSlide>
                <StarIcon className="w-50 justify-self-center"></StarIcon>
            </SwiperSlide>
            <SwiperSlide>
                <SunIcon className="w-50 justify-self-center"></SunIcon>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeSwiper;
