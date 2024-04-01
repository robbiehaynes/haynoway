'use client'
import Link from "next/link"
import { Button } from "./ui/button"

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from "swiper/modules"

//components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.webp',
    category: 'swift',
    name: 'Hilton Meals App',
    description: 'An iOS app for a school to view their meals for the current day. Reached 5th on SA App Store in Food & Beverage category. Built with Swift and Firebase',
    link: null,
    github: 'https://github.com/robbiehaynes/Hilton-meals-ios'
  },
  {
    image: '/work/2.webp',
    category: 'web dev',
    name: 'Equine Group Website',
    description: 'A website for the leading bloodstock insurance provider in South Africa. Built with HTML/CSS/JS and Bootstrap',
    link: 'http://www.equine.co.za',
    github: 'http://www.equine.co.za'
  },
  {
    image: '/work/6.webp',
    category: 'web dev',
    name: 'Portfolio Website',
    description: 'The site you are on right now :) Built with modern web technology: NextJS, Tailwind CSS, Shadcn UI. Deployed on Vercel.',
    link: '/',
    github: 'https://github.com/robbiehaynes/haynoway'
  },
  {
    image: '/work/4.webp',
    category: 'python',
    name: 'Arbitrage Finder',
    description: 'A Python script that fetches betting odds from an API and finds arbitrage opportunities',
    link: null,
    github: 'https://github.com/robbiehaynes/arbitrage-finder'
  },
  {
    image: '/work/3.webp',
    category: 'swift',
    name: 'Cactused',
    description: 'A 24 hour challenge for myself before my 18th birthday. A fun drinking game to play with friends',
    link: null,
    github: 'https://github.com/robbiehaynes/Cactused'
  },
  {
    image: '/work/5.webp',
    category: 'java',
    name: 'KiftoCoin',
    description: 'A simple cryptocurrency and blockchain built in Java for my final year school project',
    link: null,
    github: 'https://github.com/robbiehaynes/KiftoCoin'
  }
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>    
          <p className="subtitle mb-8">Take a look at what I've developed so far, I think it's quite cool</p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" 
            slidesPerView={1} 
            breakpoints={{
              640: {
                slidesPerView: 2
              }}} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{clickable: true}}
          >
            {/* show only first 4 */}
            {projectData.slice(0,4).map((project, index)=> {
              return <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work