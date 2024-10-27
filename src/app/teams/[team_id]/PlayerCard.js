import Image from 'next/image'
export default function PlayerCard({ teamColor, player }) {
    return (
        <div className="flex items-end m-auto mt-10 justify-center max-sm:mx-3">
            <Image
                src={`/images/players/${player.player_id}.png`}
                width={175}
                height={175}
                alt="Picture of the author"
                className='z-10 max-sm:h-28 max-sm:w-28'
            />
            <div className={`flex justify-between items-center w-full h-3/4 -ml-16 sm:-ml-20 bg-[#6c1317] rounded-lg`}>
                <div className='flex flex-col justify-start pl-20 sm:pl-24 text-[#c99132]'>
                    <h1 className="max-sm:text-sm font-extrabold mt-3 text-4xl dark:text-white text-[#c99132]">{player.player_name}</h1>
                    <h1 className="max-sm:text-xs mb-3 pl-1 text-xl dark:text-white text-[#c99132]">{player.jersey_number}</h1>
                </div>
                <div className='flex'>
                    {
                        player.prefs.map((pref, i) => (
                            <Image
                                src={`/images/gameIcons/${pref.replace(" ", "")}.png`}
                                width={30}
                                height={30}
                                alt={pref.toUpperCase()}
                                className='mr-3 sm:mr-5 max-sm:h-5 max-sm:w-5'
                                key={i}
                                
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}