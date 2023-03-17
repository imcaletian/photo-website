import Image from "next/image"



export default function About () {
    return (
        <div className="bg-orange-700 flex flex-col lg:flex-row items-center select-none">
            <div className="overflow-hidden aspect-square mx-12 my-6 w-[18rem] md:w-[24rem] lg:w-[36rem]">
                <Image src="/me.jpeg" height={1200} width="1200" alt="me" className="object-cover"/>
            </div>
            <div className="w-3/4 py-4 mx-auto lg:px-8 lg:my-8">
            <p className="mb-3 text-white dark:text-white">Hi! I’m Cale Tian (He/Him) and I am a photographer based in Vancouver, BC. I specialize in portraits, lifestyle shoots and events. I’ve always been inspired by people’s stories, experiences, and artistic expressions. As a queer immigrant from China, I’m lucky enough to surround myself with a lot of folks with various cultural backgrounds and have their unique artistic approaches, which definitely inspire me to create a vision of my own.</p>
            <p className="mb-3 text-white dark:text-white">My favorite part of portrait photography is the sense of collaboration. Being able to meet people, get to know their stories, and make our vision come alive, it’s something that’s very sensitive yet powerful to me. Unlike Willow Pill’s final number, I love people, it’s only natural that I love capturing people. </p>
            <p className="mb-3 text-white dark:text-white">When I’m not taking photos I’m probably singing with Vancouver Men’s Chorus, performing as Wan Ting Moi somewhere in the city, or sitting in front of my TV screen playing Bayonetta. </p>
            <p className="mb-3 text-white dark:text-white">Let’s create together, let’s make our vision come to life. </p>
            </div>
        </div>
    )
}