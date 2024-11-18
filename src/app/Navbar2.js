"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const opts = ["home", "gallery", "schedule", "about"]
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(pathname=='/'?"home":pathname.slice(1))
  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/atharv_logo.png" className="h-16" alt="SAC Logo" /> 
          <img src="/aarambh_logo_clean.png" className="h-14 w-52 sm:w-64" alt="AARAMBH" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
              opts.map((opt,i)=>(
                <li key={i}>
                  <Link href={`/${opt=="home"?"":opt}`} className={`capitalize block py-2 px-3 rounded ${currentPage==opt?'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500':'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'} dark:text-white`} onClick={()=>setCurrentPage(opt)}>{opt}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>

  );
}
