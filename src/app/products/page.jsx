import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import React from 'react'

export default async function ProductPage() {
  const data = await fetch('http://localhost:5000/products')
  const products = await data.json()
  // console.log(products);

  return (
    <div className='max-w-7xl my-10 mx-auto'>
      <h1 className='text-5xl font-bold  mb-4 bg-linear-to-r from-purple-900 via-blue-500 to-green-100 bg-clip-text text-transparent text-center py-6'>All Products</h1>
      <p className='text-gray-600 md:w-2/3 mx-auto text-center px-4'>Explore our full range of products carefully curated to meet your needs. From the latest gadgets to everyday essentials, find everything in one place and shop with confidence.</p>
      <ol className='flex flex-col gap-4 mt-6'>
        <h2 className='font-semibold'>Total Products:  {products.length} </h2>
        <div className='grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
          }
        </div>

      </ol>

    </div>
  )
}
