import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
            <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                width={400}
                height={400}
                    src={product.image}
                    alt={product.title}                  
                />
            </div>          
            <h2 className="text-lg font-semibold mt-3">{product.title}</h2>         
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {product.description}
            </p>
            <p className="text-xl font-bold text-indigo-600 mt-3">${product.price}</p>           
            <Link  key={product._id} href={`/products/${product._id}`}  className="w-full cursor-pointer mt-4 bg-indigo-600 text-white py-2 rounded-lg btn font-medium hover:bg-indigo-700 transition">
                View
            </Link> 
        </div>
    )
}

 {/* <Link>{product.title} </Link> */}
