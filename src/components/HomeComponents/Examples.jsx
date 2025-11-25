"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { Mousewheel, Pagination } from "swiper/modules";

import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import p5 from "../../../public/p5.png";
import p6 from "../../../public/p6.png";

import Image from "next/image";

export default function Examples() {
    return (
        <div className="h-screen my-10">
            <h1 className="text-5xl text-center my-9 font-bold">Sample Products</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Explore a curated selection of premium product samples. Scroll vertically
                to view each item with smooth and interactive transitions.
            </p>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper h-[500px] rounded-4xl max-w-5xl"
            >
                {[p1, p2, p3, p4, p5, p6].map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full rounded-4xl h-screen">
                            <Image src={img} alt="products" fill className="object-cover rounded-4xl" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
