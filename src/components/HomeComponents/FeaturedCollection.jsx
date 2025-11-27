import Image from 'next/image'
import React from 'react'
import airPod from '../../../public/airpod.webp'
import macBook from '../../../public/macbook.jpeg'
import drone from '../../../public/drone.jpeg'

export default function FeaturedCollection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                  <h1 className="text-5xl font-bold  mb-4 bg-linear-to-r from-purple-900 via-blue-500 to-green-100 bg-clip-text text-transparent text-center">Featured Collection</h1>
                <p className="text-gray-500 mb-12">Handpicked items just for you. Premium quality, modern design.</p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="relative  w-full h-64 object-cover">
                            <Image fill src={drone} alt="DJI Mini 3 Pro" className="w-full h-64 object-cover" />
                            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">New</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">DJI Mini 3 Pro</h3>
                            <p className="text-gray-500 text-sm mb-4">Lightweight 4K drone with obstacle sensing, long flight time, pro-level features.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-emerald-500 font-bold text-lg">$899</span>
                                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Buy Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-64 object-cover">
                              <Image fill src={airPod} alt="DJI Mini 3 Pro" className="w-full h-64 object-cover" />
                            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Hot</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">AirPods Pro</h3>
                            <p className="text-gray-500 text-sm mb-4">Noise-canceling earbuds with spatial audio for immersive sound.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-emerald-500 font-bold text-lg">$249</span>
                                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Buy Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="relative  w-full h-64 object-cover">
                            <Image fill src={macBook} alt="DJI Mini 3 Pro" className="w-full h-64 object-cover" />
                            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Best</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">MacBook Pro 14</h3>
                            <p className="text-gray-500 text-sm mb-4">Powerful performance with M2 chip and stunning Liquid Retina XDR display.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-emerald-500 font-bold text-lg">$1999</span>
                                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
