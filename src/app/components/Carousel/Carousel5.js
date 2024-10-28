"use client";
import { Carousel } from "flowbite-react";
import Link from "next/link";

export default function Component({ data }) {
  return (
    <div className="h-56 lg:h-[550px] max-sm:mx-5">
      <Carousel>
        {
          data.map((slide,i) => (
            <Link href={"https://www.hostinger.in/tutorials/blog-examples"} target="_blank" className="relative">
              <img src={`images/home-highlights/${slide.img}`} alt="..." key={i} />
              <div className="absolute bottom-10 sm:bottom-48 left-0 w-full ">
                <p className="w-full text-center text-lg sm:text-2xl font-bold text-white">{slide.title}</p>
                <p className="w-full text-center text-xs sm:text-lg text-white">{slide.desc}</p>
              </div>
            </Link>
            ))
          }
      </Carousel>
    </div>
  );
}
