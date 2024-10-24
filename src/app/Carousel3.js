"use client";
import { Carousel } from "flowbite-react";
const data = ["1", "2", "3", "4", "5"]

export default function Component() {
  return (
    <div className="h-56 lg:h-[550px]">
      <Carousel>
        {data.map((img,i) => <img src={`images/highlights/${img}.jpg`} alt="..." key={i} />)}
      </Carousel>
    </div>
  );
}
