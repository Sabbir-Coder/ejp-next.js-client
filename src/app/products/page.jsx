import Link from 'next/link'
import React from 'react'

export default function ProductPage() {
  return (
    <div>
<h1>ProductPage</h1>
<ol className='flex flex-col gap-4 mt-6'>
    <Link href='products/1'>Product 1 </Link>
      <Link href='products/2'>Product 2 </Link>
      <Link href='products/3'>Product 3 </Link>
      <Link href='products/4'>Product 4 </Link>
</ol>

    </div>
  )
}
