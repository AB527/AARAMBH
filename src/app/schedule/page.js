"use client";

import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAPI } from "../utility";
import Loading from "../components/Loading"

export default function Page() {

  const [isLoading, setIsLoading] = useState(true)
  const [filterVisible, setFilterVisible] = useState(false)
  const [filters, setFilters] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [filterValues, setFilterValues] = useState(JSON.stringify({
    sport: "all",
    date: "all",
    team: "all",
    gender_specs: "all"
  }))

  const getSchedule = () => {
    setIsLoading(true)
    fetchAPI(`/api/schedule/query`, data => {
      setSearchResults(data)
      setIsLoading(false)
    }, JSON.parse(filterValues))
  }

  useEffect(() => {
    fetchAPI(`/api/schedule/pre-load`, data => {
      setFilters(data)
    })
  }, [])

  useEffect(()=>{
    getSchedule()
  }, [filterValues])

  const handleFilterChange = (code, e) => {
    let x = JSON.parse(filterValues);
    x[code] = e.target.value
    setFilterValues(JSON.stringify(x))
  }

  return (
    <div className="max-w-screen-xl m-auto mt-32 mb-28">
      <div className="flex mt-10 max-sm:w-11/12 max-sm:m-auto justify-between items-center">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-1/3" disabled={filters.length ? false : true} onChange={e => handleFilterChange("sport", e)} value={JSON.parse(filterValues)["sport"]} >
          {
            filters.length ? filters[0].opts.map((sport, i) => <option value={sport.value} key={i}>{sport.label}</option>) : <option>Select Sports</option>
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
          filters.slice(1).map((filter, i) => (
            <select className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/3 mx-1`} key={i} onChange={e => handleFilterChange(filter.code, e)} value={JSON.parse(filterValues)[filter.code]} >
              {
                filter.opts.map((opt, i) => <option value={opt.value} key={i}>{opt.label}</option>)
              }
            </select>
          ))
        }
      </div>
      <div className="max-sm:w-11/12 m-auto">
        {
          !isLoading ? (searchResults.length ? searchResults.map((result, i) =>
            // background: "linear-gradient(270deg, rgb(0, 156, 224) 27.86%, rgb(2, 35, 102) 103.89%)"
            <div className="mt-10" key={i}>
              <div style={{ backgroundImage: "url('/images/bg/sports.png')" }} className="flex justify-between px-5 rounded-md items-center">
                <h1 className="text-2xl font-bold md:text-5xl text-white">{result.sport.toUpperCase()}</h1>
                <Image
                  src={`/images/gameIcons/${result.sport.toLowerCase().replace(" ", "")}.png`}
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
                        <p className="text-center">{game.match_date}</p>
                        <p className="text-center px-5 sm:px-16">{game.match_time}</p>
                      </div>
                      <div className="border-l border-black w-full flex flex-col justify-center items-center">
                        <h1 className="text-2xl text-gray-900 sm:text-3xl dark:text-white border-b border-black py-2 w-full pl-3">{game.match_title}</h1>
                        <div className="w-full py-2">
                          {
                            game.participants.map((participant, i) => (
                              <div key={i} className="flex items-center px-3">
                                <Image
                                  src={`/images/teams/${participant.team.toLowerCase()}.png`}
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
          ): <p className="mt-10 text-center">No results</p>) :
            <Loading />
        }
      </div>
    </div>
  );
}
