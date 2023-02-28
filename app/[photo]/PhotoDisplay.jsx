import supabase from "@/utils/supabase"
import Image from "next/image"

export default async function PhotoDisplay ({photo}) {
    console.log(photo)
    const {data, error} = await supabase
    .storage
    .from('public')
    .list(`${photo}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
    })

    const url = `https://eflfzmunuftpbpfuukxf.supabase.co/storage/v1/object/public/public/${photo}/`
    return (
        <div>
            <div className="grid grid-cols-fluid lg:hidden">
            {data.map((file)=> 
            <Image src={`${url}/${file.name}`}
            height={600}
            width={600} 
            key={file.id}
            className="aspect-square object-cover " />)}
            </div>
        </div>
    )
}