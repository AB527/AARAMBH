import TeamCard from "./TeamCard";

export default function Teams({ teams }) {
    return (
        <div className="w-full px-5 md:px-0 mt-16">
            <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">TEAMS</h1>
            <div className="flex max-sm:flex-col items-center justify-between mt-10">
                {
                    teams.map((team,i)=><TeamCard key={i} teamName={team} />)
                }
            </div>
        </div>
    )
}