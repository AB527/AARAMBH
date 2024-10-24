import Image from "next/image";
import Carousel from "./Carousel3";
import Teams from "./components/Teams/Teams";
import Standings from "./components/Standings/Standings";

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto mt-24 sm:mt-32">
      <Carousel />
      <Teams />
      <Standings />
    </div>
  );
}
