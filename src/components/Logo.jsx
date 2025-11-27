import Link from 'next/link'
import React from 'react'
import { ImNext } from "react-icons/im";

export default function Logo() {
    return (
        <div>
           <Link href='/' className='text-3xl font-bold flex gap-1 items-center justify-center bg-gradient-to-r from-white-500 via-green-500 to-blue-500 bg-clip-text text-transparent' ><ImNext color='blue' /><p>NextBuy</p></Link>
        </div>
    )
}
