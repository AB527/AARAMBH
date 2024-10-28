import Image from "next/image";
import "./style.css"
import Link from "next/link";

const data = [
  {
    img: "1.jpg",
    title: "Day 1: Cricket",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "2.jpg",
    title: "Day 3: Chess",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "3.jpg",
    title: "Day 2: Cricket",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "4.jpg",
    title: "Day 3: Basketball",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "5.jpg",
    title: "Day 3: Volleyball",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "5.jpg",
    title: "Day 3: Volleyball",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "5.jpg",
    title: "Day 3: Volleyball",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "5.jpg",
    title: "Day 3: Volleyball",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  },
  {
    img: "5.jpg",
    title: "Day 3: Volleyball",
    imgnum: 10,
    link: "https://drive.google.com/drive/folders/1sLOlICgwImh95KpYP0TnBMIjAtTAtS20?usp=drive_link"
  }
]

export default function Page() {
  return (
    <div className="m-auto max-w-screen-xl mt-32 mb-32 sm:mb-24">
      <h1 className="mb-7 sm:mb-10 text-3xl font-extrabold text-gray-900 md:text-5xl dark:text-white uppercase max-sm:ml-5">Photo Gallery</h1>
      <div class="grid grid-cols-1 mx-5 sm:grid-cols-2 sm:mx-0 lg:grid-cols-4 gap-2">
        {
          data.map((img,i)=>(
            <Link key={i} className="relative" href={img.link}>
              <div className="absolute top-2 left-3 flex items-center justify-center bg-black px-2 py-1 rounded-2xl opacity-75">
                <Image height={1000} width={1000} className="h-4 w-5 rounded-sm" src={`/icons/camera.png`} alt={img.title} />
                <p className="text-sm font-bold text-white pl-1 text-center">{img.imgnum}</p>
              </div>
              <Image height={1000} width={1000} className="h-52 w-96 rounded-md" src={`/images/gallery/${img.img}`} alt={img.title} />
              <p className="text-lg sm:text-lg font-bold text-white absolute bottom-2 left-3 font-sans">{img.title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
