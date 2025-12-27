"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import p5 from "../../../public/p5.png";
import p6 from "../../../public/p6.png";

const images = [p1, p2, p3, p4, p5, p6];

export default function Examples() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Explore Our <span className="text-blue-600">Creations</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg">
                        Swipe through our latest product designs. Crafted with precision and style.
                    </p>
                </div>

                <div className="relative px-4 md:px-12">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="pb-12 !px-2"
                        style={{
                            "--swiper-navigation-color": "#2563eb",
                            "--swiper-pagination-color": "#2563eb",
                        }}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i} className="py-4">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 h-[450px] flex flex-col">
                                    <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">
                                        <Image
                                            src={img}
                                            alt={`Product ${i + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                    </div>

                                    <div className="p-6 flex flex-col justify-between flex-grow">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">New Arrival</span>
                                                <span className="text-gray-400 text-sm">Series {i + 1}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">Premium Widget {i + 1}</h3>
                                            <p className="text-gray-500 text-sm line-clamp-2">High-quality materials designed for longevity and modern aesthetics.</p>
                                        </div>
                                        <button className="mt-4 w-full py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-blue-600 transition-colors duration-300 text-sm group-hover:shadow-lg">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
