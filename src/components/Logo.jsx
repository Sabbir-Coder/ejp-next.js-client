import Link from 'next/link'
import React from 'react'
import { ImNext } from "react-icons/im";
import logo from '../../public/nextbuy-logo.png'
import Image from 'next/image';

export default function Logo() {
    return (
        <div className=''>
           <Link href='/'  >
            <Image alt='logo' height={50} width={150} src={logo}></Image>
           </Link>
        </div>
    )
}
