'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { toast, Toaster} from "react-hot-toast"

export default function Contact () {
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [message, setMessage] = useState ('')
    const router = useRouter()

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch ('/api/contact', {
                method: "POST",
                body: JSON.stringify({
                    name, 
                    email, 
                    message,
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            toast.success('Submission Succeeded! I Will Be In Touch ASAP!')
            setName('')
            setEmail('')
            setMessage('')
            router.push('/')
        } catch (error) {
            console.error("err", error)
            toast.error("Submission Failed, Please Try Again Later")
        }

    }

    return (
        <>
        <div><Toaster /></div>
        <div className="bg-orange-700 flex h-[34rem] md:h-[36rem] my-8" >
            <div className="md:w-1/2 lg:w-[40%] mx-auto">
                <div className="p-8 mb-3 text-center">
                    <h1 className="text-3xl font-semibold mb-6">Let's Create Together!</h1>
                    <p className="text-center md:h-32">In need of some new headshots for a brand new job? Looking to capture moments for your upcoming events? Or looking for something to make your vision come to life? Feel free to start the conversation with a quick summary of your occasion and we can start creating together!</p>
                </div>
                <div>
                    <form className="flex flex-col items-center md:items-center gap-4 px-8 my-2" onSubmit={onSubmit}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md bg-orange-100 text-black" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full max-w-xs rounded-md px-4 py-2 shadow-md bg-orange-100 text-black" />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full max-w-xs rounded-md px-4 py-2 h-24 shadow-md resize-none bg-orange-100 text-black" placeholder="Message" />
                        <button className=" bg-orange-800 px-4 py-2 rounded-md hover:bg-orange-600 shadow-md hover:border-gray-900" type="submit">Submit</button>
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
        </>
    )
}