import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { developers } from "../data"

export default function Page() {
  return (
    <div class="m-auto max-w-screen-xl mt-32 mb-32 text-black">
      <div class="flex justify-around items-center max-sm:flex-col">
        <img src="/images/about/aarambh_photo.jpg" className="w-5/6 max-sm:mx-5 h-56 sm:w-1/2 sm:h-96 rounded-xl m-auto" style={{ background: "linear-gradient(to right, #d587ff, #d587ff00 33%, #d587ff00 66%, #d587ff)" }}></img>
        <p className="text-lg w-11/12 sm:w-2/5 max-sm:text-center max-sm:mt-10">
          Aarambh is a two-day sports festival held annually in October at the International Institute of Information Technology (IIIT) Naya Raipur, celebrating athletic skill, strategy, and team spirit. The festival features a variety of events, from outdoor sports like football, cricket, volleyball, and kabaddi to indoor games such as chess, and popular E-sports like Valorant and CS-GO. A unique highlight of Aarambh is the student auction, where participants are bid on and join different teams, adding excitement and camaraderie to the competition. Aarambh brings our campus together, creating unforgettable moments for all involved!
        </p>
      </div>
      <div className="mt-16">
        <h1 className="text-5xl font-extrabold text-center">Our Leaders</h1>
        <div class="flex justify-center sm:justify-around items-center max-sm:flex-col">
          <Link className="hover:scale-110 transition transform hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" href="https://www.linkedin.com/in/srinivasa-k-g-82aa7b83/" target="_blank">
            <img src="/images/about/dean_academics.png" className="w-72 h-72 rounded-xl max-sm:mt-10"></img>
            <h1 className="text-2xl font-bold text-center mt-5">Dr. Srinivasa K G</h1>
            <h1 className="text-md text-center mt-1 text-gray-400">Dean Academics</h1>
          </Link>

          <blockquote class="relative w-3/5 max-sm:mt-10">
            <svg class="absolute -top-6 -start-8 size-16 text-gray-100" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
            </svg>

            <div class="relative z-10">
              <p class="text-gray-800 sm:text-xl"><em>
                Aarambh is an integral part of IIIT Naya Raipur, embodying the spirit of unity, sportsmanship, and resilience that defines our campus. This annual sports event brings together students from all disciplines to compete, collaborate, and celebrate the joy of sports. Aarambh is not just about winning; it’s about pushing boundaries, fostering friendships, and creating lasting memories. Let’s give our best, support one another, and make this event a remarkable showcase of talent, passion, and team spirit. Here’s to an exciting Aarambh – let the games begin!
              </em></p>
            </div>
          </blockquote>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-5xl font-extrabold text-center">Our Team</h1>
        <div class="flex justify-around mt-10 max-sm:flex-col">
          {
            developers.map((dev,i) => (
              <div className="justify-center max-sm:mt-5 hover:scale-110 transition transform hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" key={i}>
                <img src={`/images/about/developers/${dev.img}`} className="w-56 h-56 max-sm:m-auto"></img>
                <h1 className="text-2xl font-bold text-center  mt-5">{dev.name}</h1>
                <h1 className="text-md text-center mt-1 text-gray-400">{dev.pos}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
