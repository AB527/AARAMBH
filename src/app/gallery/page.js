"use client";

import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import { fetchAPI } from "../utility";

export default function Page() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchAPI(`/api/gallery`, d => {
      setData(d)
    })
  }, [])
  return (
    <div className="m-auto max-w-screen-xl mt-32 mb-32 sm:mb-24">
      <h1 className="mb-7 sm:mb-10 text-3xl font-extrabold text-gray-900 md:text-5xl dark:text-white uppercase max-sm:ml-5">Photo Gallery</h1>
      {
        data.length ?
          <div class="grid grid-cols-1 mx-5 sm:grid-cols-2 sm:mx-0 lg:grid-cols-4 gap-2">
            {
              data.map((view, i) => (
                <Link key={i} className="relative" href={view.gallery_link} target="_blank">
                  <div className="absolute top-2 left-3 flex items-center justify-center bg-black px-2 py-1 rounded-2xl opacity-75">
                    <Image height={1000} width={1000} className="h-4 w-5 rounded-sm" src={`/icons/camera.png`} alt={view.title} />
                    <p className="text-sm font-bold text-white pl-1 text-center">{view.img_num}</p>
                  </div>
                  <img className="h-52 w-96 rounded-md" src={view.thumbnail} alt={view.title} />
                  <p className="text-lg sm:text-lg font-bold text-white absolute bottom-2 left-3 font-sans">{view.title}</p>
                </Link>
              ))
            }
          </div>
          : <Loading />
      }
    </div>
  );
}
