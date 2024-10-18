import Image from 'next/image'
import Link from 'next/link'
export default function TeamCard({ teamName }) {
    return (
        <Link href={`/teams/${teamName.toLowerCase()}`}>
            <Image
                src={`/images/teams/${teamName.toLowerCase()}.png`}
                width={300}
                height={300}
                alt="Picture of the author"
            />
        </Link>
    )
}