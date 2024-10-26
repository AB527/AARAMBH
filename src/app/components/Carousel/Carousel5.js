"use client";
import { Carousel } from "flowbite-react";
import Link from "next/link";
const data = [
  {
    img: "DSC_6586.jpg",
    title: "Titans win a thriller",
    desc: "Titans defeat Renegades 2-1 in a nail-bitting football match"
  }, 
  {
    img: "DSC_6323.jpg",
    title: "Renegades dominate basketball",
    desc: "Renegades defeated Mavericks in an exciting encounter"
  },
  {
    img: "IMG_6284.jpg",
    title: "Renegades dominate basketball",
    desc: "Renegades defeated Mavericks in an exciting encounter"
  },
  {
    img: "IMG_6177.jpg",
    title: "Renegades dominate basketball",
    desc: "Renegades defeated Mavericks in an exciting encounter"
  },
  {
    img: "DSC_6102.jpg",
    title: "Renegades dominate basketball",
    desc: "Renegades defeated Mavericks in an exciting encounter"
  }
]
// DSC_6595.jpg

export default function Component() {
  return (
    <div className="h-56 lg:h-[550px] max-sm:mx-5">
      <Carousel>
        {data.map((slide,i) => (
          <Link href={"https://www.hostinger.in/tutorials/blog-examples"} target="_blank" className="relative">
            <img src={`images/home-highlights/${slide.img}`} alt="..." key={i} />
            <div className="absolute bottom-10 sm:bottom-48 left-0 w-full ">
              <p className="w-full text-center text-lg sm:text-2xl font-bold text-white">{slide.title}</p>
              <p className="w-full text-center text-xs sm:text-lg text-white">{slide.desc}</p>
            </div>
          </Link>))}
      </Carousel>
    </div>
  );
}
