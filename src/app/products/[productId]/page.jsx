import Link from 'next/link'
import React from 'react'

export default async function ProductDetails({ params }) {

  const { productId} = await params;


  return (
    <div>
      <h1>This is products details  page: {productId} </h1>

    </div>
  )
}
