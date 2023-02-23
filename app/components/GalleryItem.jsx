import Image from "next/image"
import Link from "next/link"

export default function GalleryItem ({ title , id, date }) {
    const url = "https://eflfzmunuftpbpfuukxf.supabase.co/storage/v1/object/public/public/cover/"
    return (
        <Link href={`/${id}`}>
            <div className="relative">
            <div className="aspect-square overflow-hidden">
            <Image src={`${url}${id}`}  width={600} height={600} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className=" w-full  absolute text-white top-0 opacity-0 hover:opacity-75 h-full transition-opacity">
                <div className="w-full h-full bg-black absolute flex flex-col text-center justify-center">
                    <h1 className=" font-semibold text-xl">{title}</h1>
                    <p>{date}</p>
                </div>
            </div>
            </div>
        </Link>
    )
} 