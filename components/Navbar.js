"use client";

import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  return (

    <div className='flex justify-between items-center relative bg-blue-950  px-8 h-16 text-white bg-[url(https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-no-repeat
bg-cover '>
      <div className="logo text-2xl font-bold "><h2 className="text-4xl font-bold ">Persona<span className="text-green-500">&lt;X&gt; </span></h2></div>
      <ul>
        <Link href={"/"} className='p-3 font-bold text-xl pr-10'>Home </Link>
<Link href={"/about"} className='p-3 font-bold text-xl pr-10'>About </Link>
        {session &&
          <>
            <button id="dropdownDelayButton" onClick={() => { setShowDropDown(!showDropDown) }} onBlur={() => {
              setTimeout(() => {
                setShowDropDown(false)
              }, 200);
            }} data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>


            <div id="dro pdownDelay" className={` z-10 ${showDropDown ? "" : "hidden"}  absolute right-14  mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 `}>
              <ul className="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`}  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Page</Link>
                </li>

                <li>
                  <Link href="#" onClick={() => { signOut() }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
          </>
        }




        {!session &&
          <Link href={"/login"}>  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login</button>
          </Link>
        }



      </ul>
    </div>
  )
}

export default Navbar
