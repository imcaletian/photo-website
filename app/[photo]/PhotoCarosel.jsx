'use client'

import { useState, useEffect } from "react"
import supabase from "@/utils/supabase"
import Image from "next/image"
import Slider from 'react-slick';


export default function PhotoCarosel ({photo}) {
  
    const [isLoading, setIsLoading] = useState(true)
    const [photos, setPhotos] = useState([])

    useEffect(()=> {
        const fetchPhotos = async () => {
            const {data} = await supabase
            .storage
            .from('public')
            .list(`${photo}`, {
                limit: 100,
                offset: 0,
                sortBy: { column: 'name', order: 'asc' },
            })
            setPhotos(data)
            setIsLoading(false)
        }
        fetchPhotos()
    }, [])

    const settings = {
      className: "slider variable-width",
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };

    const url = `https://eflfzmunuftpbpfuukxf.supabase.co/storage/v1/object/public/public/${photo}/`

  return (
    <Slider {...settings} className="hidden lg:block">
          {photos.map((file)=> 
              <div key={file.id}>
              <Image src={`${url}/${file.name}`}height={600}width={600} key={file.id} className="h-[20rem] md:h-[30rem] object-cover w-full" />
              </div>)
          }
    </Slider>
  );
  }
