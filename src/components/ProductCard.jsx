import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div className="bg-[#f3f3f3] flex flex-col gap-3 rounded-xl shadow-lg p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex hover:scale-107 transition-all duration-400 justify-center items-center h-48 overflow-hidden rounded-lg">
                <Image
                
                    width={400}
                    height={400}
                    src={product.image}
                    alt={product.title}
                />
            </div>
        <div className='flex-1'>
                <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {product.description}
            </p>
            <p className="text-xl font-bold text-indigo-600 mt-3">${product.price}</p>

        </div>

            <Link
                key={product._id} href={`/products/${product._id}`}
                type="submit"
                className="mt-3 relative w-full z-10 flex justify-center items-center gap-2 mx-auto px-4 py-2 text-lg font-semibold rounded-full border-2 border-gray-300 bg-gray-800 text-white shadow-xl overflow-hidden group
         before:absolute before:-z-10 before:w-full before:h-full before:bg-emerald-500 before:rounded-full before:-left-full before:top-0 before:transition-all before:duration-700 
         hover:before:left-0 hover:before:scale-150 hover:text-white"
            >
                View
                <svg
                    className="w-8 h-8 p-2 rotate-45 border border-gray-700 rounded-full group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-700 ease-linear duration-300"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-white group-hover:fill-white"
                    ></path>
                </svg>
            </Link>

        </div>
    )
}

{/* <Link>{product.title} </Link> */ }
