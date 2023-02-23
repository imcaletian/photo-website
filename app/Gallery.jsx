import GalleryItem from "./components/GalleryItem"
import supabase from "@/utils/supabase"

export default async function Gallery () {

    const { data, error } = await supabase
    .from('gallery')
    .select('*')

    return(
        <div className="grid grid-cols-fluid">
            {data.map((image) => 
            <GalleryItem key={image.id} id={image.id} title={image.name} cover={image.cover} date={image.date}/>)}
        </div>
    )
}