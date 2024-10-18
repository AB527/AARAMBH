import TeamCard from "./TeamCard";

export default function Teams() {
    const teams = ["Renegades","Renegades","Renegades","Renegades"]
    return (
        <div className="w-full px-5 md:px-0 mt-16">
            <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">Teams</h1>
            <div className="flex max-sm:flex-col items-center justify-between">
                {
                    teams.map((team,i)=><TeamCard key={i} teamName={"Renegades"} />)
                }
            </div>
        </div>
    )
}