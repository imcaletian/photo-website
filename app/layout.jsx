import './globals.css'

import Link from 'next/link'
import { Raleway, Abril_Fatface} from '@next/font/google'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

const abril = Abril_Fatface({
  subsets: ['latin'],
  variable: "--font-abril",
  weight: ["400"]
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${raleway.className}`}>
        <div className='flex flex-col md:flex-row md:justify-between items-center my-8 md:m-8 lg:mx-12 select-none'>
        <Link href='/'>
        <div className='text-center md:text-left '>
        <h1 className={`text-3xl font-normal text-orange-600 mb-1 ${abril.className}`}>Cale Tian Photography</h1> 
        <p className='text-sm font-light'>Vancouver Portrait & Event Photographer</p>
        </div>
        </Link>
        <nav className='pt-5 md:py-4'>
          <ul className='flex flex-col md:flex-row gap-4 text-center'>
              <li>
              <Link href="/" className='hover:text-orange-400 transition-colors'>Portfolio</Link>
              </li>
              <li>
              <Link href="/contact" className='hover:text-orange-400 transition-colors'>Contact Me</Link>
              </li>
              <li>
              <Link href="/about" className='hover:text-orange-400 transition-colors'>About</Link>
              </li>
              {/* <li>/dynasty-apr-13
              <Link href="/" className='text-orange-400 hover:text-orange-600'>Login</Link>
              </li> */}
          </ul>
        </nav>
        </div>
        {children}
        <div className='flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-around lg:gap-20 gap-12 p-12 select-none'>
          <div>
            <h2 className='font-semibold text-lg mb-2'>Contact</h2>
            <a href='mailto:cale@caletian.com' className='hover:text-orange-400 transition-colors'>cale@caletian.com</a>
            <p>778-847-1060</p>
          </div>
          <div>
            <h2 className='font-semibold text-lg mb-2'>Office Hour</h2>
            <p>Monday - Saturday</p>
            <p>10:00 AM - 6:00 PM</p>
            <p className='text-sm font-thin'>Photoshoot times vary depends on projects.</p>
          </div>
          <div>
            <h2 className='font-semibold text-lg mb-2'>Location</h2>
            <p>Vancouver, BC</p>
          </div>
        </div>
      </body>
    </html>
  )
}
