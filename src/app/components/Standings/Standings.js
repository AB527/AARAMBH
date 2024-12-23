import Image from "next/image";

export default function Standings({ standings }) {
    return (
        <div className="w-full px-5 md:px-0 mt-5 sm:mt-14 mb-32 sm:mb-24 ">
            <h1 className="mb-10 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">STANDINGS</h1>
            {/* <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">Content</span>
                <div class="flex-grow border-t border-gray-400"></div>
            </div> */}

            <div className="w-full overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-lg text-gray-200 uppercase bg-gray-50 dark:text-gray-400" style={{ backgroundImage: "url('/images/bg/sports.png')" }}>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Rank
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Team
                            </th>
                            {
                                standings.header.sports.map((sport, i) =>
                                    <th scope="col" className="px-6 py-3" key={i}>
                                        <Image
                                            src={`/images/gameIcons/${sport.toLowerCase().replace(" ", "")}.png`}
                                            width={30}
                                            height={30}
                                            alt={sport}
                                            className="m-auto"
                                        />
                                    </th>
                                )
                            }
                            <th scope="col" className="px-6 py-3 text-center">
                                Technical
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            standings.body.map((team, i) =>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                                    <td className="px-6 py-4 text-center">
                                        <Image
                                            src={`/icons/standings/${i + 1}.png`}
                                            width={30}
                                            height={30}
                                            alt={i + 1}
                                            className="m-auto"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-center flex justfiy-center">
                                        <Image
                                            src={`/images/teams/${team.team.toLowerCase()}.png`}
                                            width={1000}
                                            height={1000}
                                            alt={team.team}
                                            className="h-10 w-10"
                                        />
                                        <span className="w-full">{team.team.toString().toUpperCase()}</span>
                                    </td>
                                    {
                                        standings.header.sports.map((sport, i) =>
                                            <td className="px-6 py-4 text-center" key={i}>
                                                {team[sport.toLowerCase().replace(" ", "")]}
                                            </td>
                                        )
                                    }
                                    <td className="px-6 py-4 text-center">
                                        {team.technical}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {team.total}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}