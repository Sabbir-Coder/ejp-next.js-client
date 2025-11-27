"use client"
import React from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Feature() {
    const features = [
        {
            title: "Fast & Secure Delivery",
            desc: "Get your products delivered safely with real-time tracking.",
            icon: "🚚",
        },
        {
            title: "Premium Quality Products",
            desc: "Only the highest-rated and verified items make it to our store.",
            icon: "⭐",
        },


        {
            title: "Secure Online Payment",
            desc: "Multiple payment methods with full encryption and fraud protection.",
            icon: "💳",
        },
        {
            title: "Exclusive Member Discounts",
            desc: "Join our membership to enjoy special deals and early access sales.",
            icon: "🏷️",
        },

        {
            title: "Multiple Delivery Options",
            desc: "Choose from express, standard, or scheduled delivery slots.",
            icon: "📦",
        },
        {
            title: "Wishlist & Save for Later",
            desc: "Easily save your favorite products and buy them anytime.",
            icon: "💖",
        },
        {
            title: "Flash Deals Everyday",
            desc: "Discover daily limited-time offers with huge discounts.",
            icon: "⚡",
        },
        {
            title: "Personalized Recommendations",
            desc: "Get product suggestions based on your interests and history.",
            icon: "🎯",
        },


    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-5xl font-bold  mb-4 bg-linear-to-r from-purple-900 via-blue-500 to-green-100 bg-clip-text text-transparent">
                    Our Features
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    We focus on delivering the best purchasing experience with reliable
                    products, fast delivery, and seamless customer support.
                </p>
                {/* Feature Grid */}

                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {features.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white shadow-lg px-6 py-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
                        >
                            <div className="text-5xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </SwiperSlide>
                    ))}

                </Swiper>




            </div>
        </section>
    );
}
