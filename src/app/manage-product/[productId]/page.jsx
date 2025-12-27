import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default async function ProductDetails({ params }) {

  const { productId } = await params;
  // console.log(productId);

  const res = await fetch(`http://localhost:5000/products/${productId}`)
  const product = await res.json()


  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left: Product Image */}
        <div className="w-full h-96 bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <p className="text-lg text-gray-500 mt-4 leading-relaxed">
            {product.description}
          </p>

          <p className="text-4xl font-bold text-indigo-600 mt-6">
            ${product.price}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
              Add to Cart
            </button>

            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-semibold">
              Buy Now
            </button>
          </div>

        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-16 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        <p className="text-gray-600 leading-relaxed">
          {product.longDescription || "No additional information available."}
        </p>
      </div>
    </div>
  )
}
