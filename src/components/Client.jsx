"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FaBriefcase, FaUsers, FaBoxOpen, FaGlobeAmericas } from "react-icons/fa";

const StatItem = ({ icon: Icon, value, label, index }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Parse the numeric part and the suffix (e.g., "8+" -> 8, "+")
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = numericValue / (duration / 16.66); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
                setCount(numericValue);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, numericValue]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="mb-4 p-4 bg-blue-50 text-blue-600 rounded-full text-3xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon />
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
                {count.toLocaleString()}{suffix}
            </h3>
            <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-widest">
                {label}
            </p>
        </div>
    );
};

export default function Client() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <StatItem icon={FaBriefcase} value="8+" label="Experience" index={0} />
                    <StatItem icon={FaUsers} value="4000+" label="Happy Clients" index={1} />
                    <StatItem icon={FaBoxOpen} value="70000+" label="Products Created" index={2} />
                    <StatItem icon={FaGlobeAmericas} value="100+" label="Countries" index={3} />
                </div>
            </div>
        </section>
    );
}
