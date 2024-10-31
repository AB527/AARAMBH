"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Component({ data }) {
  return (
    <div className="h-56 lg:h-[525px] max-sm:mx-5">
      <Carousel>
        {
          data.map((slide,i) => (
            <Link href={"https://www.hostinger.in/tutorials/blog-examples"} target="_blank" className="relative" key={i} >
              <img src={slide.img} alt="..." />
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
