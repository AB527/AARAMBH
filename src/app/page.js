import Image from "next/image";
import Carousel from "./Carousel";
import Teams from "./components/Teams";

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto mt-32">
      <Carousel />
      <Teams />
    </div>
  );
}
