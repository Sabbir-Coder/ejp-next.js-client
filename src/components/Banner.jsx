'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import slide1 from '../../public/slide1.jpg'
import slide2 from '../../public/slide2.jpg'
import slide3 from '../../public/slide3.jpg'
import Image from 'next/image';

export default function Banner() {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1}
            speed={1200}
            //   navigation={true}       
            pagination={{ clickable: true }}
        >
            <SwiperSlide style={{ position: 'relative', width: '100%', height: '600px' }}> <Image fill style={{ objectFit: 'cover' }} src={slide1} alt='slide1' /> </SwiperSlide>
            <SwiperSlide style={{ position: 'relative', width: '100%', height: '600px' }}> <Image fill style={{ objectFit: 'cover' }} src={slide2} alt='slide2' /> </SwiperSlide>
            <SwiperSlide style={{ position: 'relative', width: '100%', height: '600px' }}> <Image fill style={{ objectFit: 'cover' }} src={slide3} alt='slide3' /> </SwiperSlide>
           

        </Swiper>
    )
}
