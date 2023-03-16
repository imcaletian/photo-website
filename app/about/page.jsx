import Image from "next/image"



export default function About () {
    return (
        <div className="bg-orange-700 flex flex-col lg:flex-row items-center select-none">
            <div className="overflow-hidden aspect-square mx-12 my-6 w-[18rem] md:w-[24rem] lg:w-[36rem]">
                <Image src="/me.jpeg" height={1200} width="1200" alt="me" className="object-cover"/>
            </div>
            <div className="w-3/4 py-4 mx-auto lg:px-8 lg:my-8">
            <p className="mb-3 text-white dark:text-white">Hi, I'm Cale Tian, a Vancouver-based photographer who loves capturing life's precious moments. I specialize in portrait and event photography, and my goal is to create images that tell a story and evoke emotions.</p>
            <p className="mb-3 text-white dark:text-white">One of the things I enjoy the most about photography is creating a comfortable and enjoyable environment for my clients. I understand that being in front of the camera can be nerve-wracking, so I strive to make the experience as relaxed and natural as possible. </p>
            <p className="mb-3 text-white dark:text-white">Over the years, I have built a diverse portfolio, including portraits, corporate headshots, weddings, and events. I feel honoured to have had my work featured in various news publications and to have received recognition for my talent and dedication to the craft.</p>
            <p className="mb-3 text-white dark:text-white">When I'm not behind the camera, I love going to concerts and exploring the vibrant music scene in Vancouver. I am also a drag performer and enjoy creating content with other LGBTQ+ artists and events. I believe that art and self-expression are powerful tools for connecting with others and building community.</p>
            <p className="mb-3 text-white dark:text-white">Being able to capture life's special moments through photography is a true joy for me, and I would love to work with you to create lasting memories.</p>
            </div>
        </div>
    )
}