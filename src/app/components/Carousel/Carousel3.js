"use client";
import { Carousel } from "flowbite-react";
const data = ["DSC_6586.jpg", "DSC_6323.jpg", "IMG_6284.jpg", "IMG_6177.jpg", "DSC_6102.jpg"]
// DSC_6595.jpg

export default function Component() {
  return (
    <div className="h-56 lg:h-[550px]">
      <Carousel>
        {data.map((img,i) => <img src={`images/home-highlights/${img}`} alt="..." key={i} />)}
      </Carousel>
    </div>
  );
}
