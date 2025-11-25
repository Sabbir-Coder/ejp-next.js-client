import React from 'react'
import Marquee from "react-fast-marquee";
import m1 from '../../public/m1.svg'
import m2 from '../../public/m2.svg'
import m3 from '../../public/m3.svg'
import m4 from '../../public/m4.svg'
import m5 from '../../public/m5.svg'
import m6 from '../../public/m6.svg'
import m7 from '../../public/m7.svg'
import m8 from '../../public/m8.svg'
import Image from 'next/image';

export default function MarqueeP() {
  return (
    <div className='my-12 mt-18 space-y-5 border-b-2 border-b-gray-200 pb-13'>
      <Marquee gradient={true} gradientColor='#80808042' delay={0}>
        <Image src={m1} alt='marquee1' />
        <Image src={m2} alt='marquee2' />
        <Image src={m3} alt='marquee3' />
        <Image src={m4} alt='marquee4' />
        <Image src={m5} alt='marquee5' />
        <Image src={m6} alt='marquee6' />
        <Image src={m7} alt='marquee7' />
        <Image src={m8} alt='marquee8' />
      </Marquee>
      <Marquee gradient={true} direction='right' gradientColor='#80808042' speed={70} delay={0}>
        <Image src={m1} alt='marquee1' />
        <Image src={m2} alt='marquee2' />
        <Image src={m3} alt='marquee3' />
        <Image src={m4} alt='marquee4' />
        <Image src={m5} alt='marquee5' />
        <Image src={m6} alt='marquee6' />
        <Image src={m7} alt='marquee7' />
        <Image src={m8} alt='marquee8' />
      </Marquee>
    </div>
  )
}
