import React, { useState } from "react";
import { MoonIcon, PhoneIcon, ScissorsIcon, StarIcon, SunIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from 'swiper/react';
// import "./Carousel.css";
import 'swiper/swiper-bundle.css'; // 引入 Swiper 樣式
import { Pagination } from 'swiper/modules';

const HomeSwiper = () => {
    return (
        <Swiper
            className="w-100"
            modules={[Pagination]}
            pagination={true}
            spaceBetween={50} // 項目之間的間距
            slidesPerView={1} // 顯示幾個滑塊
            loop={true} // 是否循環
            loopAdditionalSlides={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }} // 自動播放
        >
            <SwiperSlide>
                <MoonIcon></MoonIcon>
            </SwiperSlide>
            <SwiperSlide>
                <PhoneIcon></PhoneIcon>
            </SwiperSlide>
            <SwiperSlide>
                <ScissorsIcon></ScissorsIcon>
            </SwiperSlide>
            <SwiperSlide>
                <StarIcon></StarIcon>
            </SwiperSlide>
            <SwiperSlide>
                <SunIcon></SunIcon>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeSwiper;
