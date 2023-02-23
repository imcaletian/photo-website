import GalleryItem from "./components/GalleryItem"
import supabase from "@/pages/utils/supabase"

export default async function Gallery () {

    const { data, error } = await supabase
    .from('gallery')
    .select('*')

    const sortedData = data.sort((a,b) => b.date - a.date)

    return(
        <div className="grid grid-cols-fluid">
            {sortedData.map((image) => 
            <GalleryItem key={image.id} id={image.id} title={image.name} cover={image.cover} date={image.date}/>)}
        </div>
    )
}