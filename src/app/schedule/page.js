"use client";

import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { useState } from "react";
import { filters, searchResults, sports} from "../data";

export default function Page() {
  
  const [filterVisible, setFilterVisible] = useState(false)
  return (
    <div className="max-w-screen-xl m-auto mt-32 mb-10">
      <div className="flex mt-10 max-sm:w-11/12 max-sm:m-auto justify-between items-center">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-1/3">
          {
            sports.map((sport, i) => <option value={sport.value} selected={i == 0} key={i}>{sport.label}</option>)
          }
        </select>
        <Image
          src={`/icons/filter.png`}
          width={37}
          height={25}
          onClick={() => setFilterVisible(!filterVisible)}
        />
      </div>
      <div className={`mt-5 flex w-full justify-between max-sm:px-2 ${filterVisible ? "visible" : "hidden"}`}>
        {
          filters.map((filter, i) => (
            <select className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/${filters.length} mx-1`} key={i}>
              {
                filter.opts.map((opt, i) => <option value={opt.value} selected={i == 0} key={i}>{opt.label}</option>)
              }
            </select>
          ))
        }
      </div>
      <div className="max-sm:w-11/12 m-auto">
        {
          searchResults.map((result, i) =>
            // background: "linear-gradient(270deg, rgb(0, 156, 224) 27.86%, rgb(2, 35, 102) 103.89%)"
            <div className="mt-10">
              <div key={i} style={{ backgroundImage: "url('/images/bg/sports.png')" }} className="flex justify-between px-5 rounded-md items-center">
                <h1 className="text-2xl font-bold md:text-5xl text-white">{result.sport.toUpperCase()}</h1>
                <Image
                  src={`/images/gameIcons/${result.sport.replace(" ", "")}.png`}
                  width={50}
                  height={50}
                  alt={result.sport.toUpperCase()}
                  className="my-2 sm:my-4"
                />
              </div>
              <div>
                {
                  result.games.map((game, i) => (
                    <div className="border border-black rounded-md mt-5 flex items-center" key={i}>
                      <div className="h-full flex flex-col justify-center items-center">
                        <p className="text-center">{game.date}</p>
                        <p className="px-5 sm:px-16">{game.time}</p>
                      </div>
                      <div className="border-l border-black w-full flex flex-col justify-center items-center">
                        <h1 className="text-2xl text-gray-900 sm:text-3xl dark:text-white border-b border-black py-2 w-full pl-3">{game.title}</h1>
                        <div className="w-full py-2">
                          {
                            game.participants.map((participant, i) => (
                              <div key={i} className="flex items-center px-3">
                                <Image
                                  src={`/images/teams/${participant.team}.png`}
                                  width={45}
                                  height={45}
                                  alt={participant.team.toUpperCase()}
                                  // className="my-2 sm:my-4"
                                />
                                <h1 className="text-lg text-gray-900 sm:text-xl dark:text-white my-1 w-full pl-3">{participant.name}</h1>
                                <h1 className="text-lg text-right text-gray-900 sm:text-xl dark:text-white my-1 w-full pr-3">{participant.score}</h1>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
