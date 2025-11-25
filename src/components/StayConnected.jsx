import React from 'react'
import bg from '../../public/stay-connect.webp'

export default function StayConnected() {
    return (
        <div
            className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat mt-40"
            style={{ backgroundImage: `url(${bg.src})` }}
        >

            <div className="absolute inset-0 bg-black/60" />


            <div className="relative z-10 max-w-2xl mx-auto text-white flex flex-col justify-center items-center gap-8 h-full text-center">
                <h1 className="text-7xl font-semibold">STAY CONNECTED</h1>
                <p className='w-3/4 font-semibold'>
                    Sign-up to be the first to hear about exclusive launches, news and
                    offers. It&apos;s your inside-track to beautiful interiors.
                </p>

                <div className="flex mt-9 justify-center items-center w-full">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        className="bg-white rounded-l-sm w-full h-15 px-6 text-black"
                    />
                    <p className="bg-gray-800 text-white cursor-pointer h-15 w-40 flex justify-center items-center rounded-r-sm">
                        SIGN-UP
                    </p>
                </div>
            </div>
        </div>
    )
}
