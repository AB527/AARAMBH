import TeamCard from "./TeamCard";

export default function Teams() {
    return (
        <div className="w-full px-5 md:px-0 mt-10">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">Teams</h1>
            <div className="flex">
                <TeamCard teamName={"Renegades"} />
            </div>
        </div>
    )
}