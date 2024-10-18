import Image from 'next/image'
export default function PlayerCard({ teamColor, player }) {
    return (
        <div className="w-full flex items-end m-auto mt-10 justify-center">
            <Image
                src={`/images/players/${player.img}`}
                width={175}
                height={175}
                alt="Picture of the author"
                className='z-10'
            />
            <div className={`flex justify-between items-center w-full h-3/4 -ml-20 bg-[#6c1317]`}>
                <div className='flex flex-col justify-start pl-20 text-[#c99132]'>
                    <h1 className="text-3xl font-extrabold text-gray-900 mt-3 text-4xl dark:text-white text-[#c99132]">{player.name}</h1>
                    <h1 className="text-lg text-gray-900 mb-3 pl-1 text-xl dark:text-white text-[#c99132]">{player.jerseyNumber}</h1>
                </div>
                <div className='flex'>
                    {
                        player.prefs.map((pref, i) => (
                            <Image
                                src={`/images/gameIcons/${pref}.png`}
                                width={30}
                                height={30}
                                alt={pref.toUpperCase()}
                                className='mr-5'
                                key={i}
                                
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}