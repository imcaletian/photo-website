import supabase from "@/pages/utils/supabase";
import Image from "next/image";
import PhotoDisplay from "./PhotoDisplay";


export default async function ({params}) {
    const { photo } = params
    const {data, error} = await supabase
    .from('gallery')
    .select('*')
    .eq('id', photo)
    const res = data[0]
    console.log(res)
    return (
        <div>
            <div className="flex flex-col bg-orange-600 text-center py-2 md:text-left md:flex-row md:py-5 md:px-8 lg:px-12 gap-2 items-center md:items-baseline md:gap-4">
            <h1 className=" text-2xl text-white md:font-semibold ">
            {res.name}
            </h1>
            <p>{res.date}</p>
            </div>

        
        <PhotoDisplay photo={photo} />
        </div>
    )
}
