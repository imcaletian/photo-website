'use client'

import Image from "next/image"


export default function Contact () {
    return (
        <div className="bg-orange-700 flex md:h-[34rem] my-8" >
            <div className="md:w-1/2 lg:w-[40%] mx-auto">
                <div className="p-8 mb-3 text-center">
                    <h1 className="text-3xl font-semibold mb-6">Let's Create Together!</h1>
                    <p className="text-center md:h-32">In need of some new headshots for a brand new job? Looking to capture moments for your upcoming events? Or looking for something to make your vision come to life? Feel free to start the conversation with a quick summary of your occasion and we can start creating together!</p>
                </div>
                <div>
                    <form action="submit" className="flex flex-col items-center md:items-center gap-4 px-8 my-2">
                        <input type="text" placeholder="Name" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md focus:border-orange-500" />
                        <input type="email" placeholder="Email" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md focus:border-orange-500" />
                        <textarea className="w-full max-w-xs rounded-md px-4 py-2 h-24 shadow-md resize-none focus:border-orange-500" placeholder="Message" />
                        <button className=" bg-orange-800 px-4 py-2 rounded-md hover:bg-orange-600 shadow-md hover:border-gray-900 ">Submit</button>
                    </form>
                </div>
            </div>

            <div className="h-full bg-slate-600 hidden md:block md:w-1/2 lg:w-[60%] ">
            <Image src="/placeholder.jpg"
                height="1200"
                width="1200"
                className="object-cover h-full"
                alt="placeholder"
                />
            </div>
        </div>
    )
}