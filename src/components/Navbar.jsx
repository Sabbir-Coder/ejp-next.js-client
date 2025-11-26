import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";


export default function Navbar() {
    return (
        <div className="px-10 mx-auto navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-999 mt-3 w-52 p-2 shadow">
                        <li><Link href='/'>Home</Link></li>
                        <li> <Link href='/products'>All Products</Link></li>
                        <li> <Link href='/add-product'>Add Product</Link></li>
                        <li> <Link href='/manage-product'>Manage Product</Link></li>

                    </ul>
                </div>
                <div className=""><Logo /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link href='/'>Home</Link></li>
                    <li> <Link href='/products'>All Products</Link></li>
                    <li> <Link href='/add-product'>Add Product</Link></li>
                    <li> <Link href='/manage-product'>Manage Product</Link></li>


                </ul>
            </div>
            <div className="navbar-end">
                <SignedOut>
                    <SignInButton>


                        <button
                            className="text-xl w-32 cursor-pointer h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                        >
                            <span
                                className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                            ></span>
                            <span
                                className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                            ></span>
                            Sign-In
                        </button>


                    </SignInButton>
                    <SignUpButton>
                        <button
                            className="ml-4 relative cursor-pointer py-3 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-blue-700 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-2 focus:outline-blue-700 focus:outline-offset-4 overflow-hidden"                        >
                            <span className="relative z-20">Sign-Up</span>
                            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                            ></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#0011ff] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
                            ></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#0011ff] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
                            ></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#0011ff] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
                            ></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#0011ff] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
                            ></span>
                        </button>

                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}
