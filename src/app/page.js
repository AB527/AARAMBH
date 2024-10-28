"use client";

import Image from "next/image";
import Carousel from "./components/Carousel/Carousel5";
import Teams from "./components/Teams/Teams";
import Standings from "./components/Standings/Standings";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import { fetchAPI } from "./utility"

export default function Home() {
  const [data, setData] = useState({})
  useEffect(()=>{
    fetchAPI(`/api/home`,data=>{
      setData(data)
    })
  },[])
  return (
    <div className="max-w-screen-xl m-auto mt-32 sm:mt-32">
      {
        Object.keys(data).length ? 
        <>
          <Carousel data={data.carousel} />
          <Teams teams={data.teams} />
          <Standings standings={data.standings} />
        </>
        :<Loading />
      }
    </div>
  );
}
