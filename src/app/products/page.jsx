import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import React from 'react'

export default async function ProductPage() {
  const data = await fetch('ejp-next-js-server.vercel.app/products')
  const products = await data.json()
  // console.log(products);

  return (
    <div className='max-w-7xl mx-auto'>
      <h1>ProductPage</h1>
      <ol className='flex flex-col gap-4 mt-6'>
        <h2> {products.length} </h2>
        <div className='grid grid-cols-3 gap-6'>
          {
            products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
          }
        </div>

      </ol>

    </div>
  )
}
