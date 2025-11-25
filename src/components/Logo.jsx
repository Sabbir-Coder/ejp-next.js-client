import Link from 'next/link'
import React from 'react'
import { ImNext } from "react-icons/im";

export default function Logo() {
    return (
        <div>
           <Link href='/' className='text-3xl font-bold flex gap-1 items-center justify-center' ><ImNext /><p>NextBuy</p></Link>
        </div>
    )
}
