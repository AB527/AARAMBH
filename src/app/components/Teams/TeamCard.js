import Image from 'next/image'
import Link from 'next/link'
export default function TeamCard({ teamName }) {
    return (
        <Link href={`/teams/${teamName.toLowerCase()}`}>
            <Image
                src={`/images/teams/${teamName.toLowerCase()}.png`}
                width={1000}
                height={1000}
                alt="Picture of the author"
                className='h-56 w-56 sm:h-72 sm:w-72 hover:scale-125 transition transform'
            />
        </Link>
    )
}