"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useState } from "react";

export default function Component() {
  const [currentPage, setCurrentPage] = useState("Home")
  const opts = ["Home", "Gallery", "Schedule", "About"]
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/atharv_logo.png" className="h-16" alt="SAC Logo" /> 
        <img src="/aarambh_logo.png" className="h-14 w-52 sm:w-64" alt="AARAMBH" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {
          opts.map((opt,i)=><Navbar.Link href={`/${opt.toLowerCase()}`} key={i} active={opt==currentPage} onClick={()=>setCurrentPage(opt)}>{opt}</Navbar.Link>)
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
