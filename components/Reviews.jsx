'use client';

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from "swiper/modules"

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Luke Morton',
    job: 'Manager at JLR',
    review: "Rob has been a great addition to my team within PI. He is confident, knowledgeable, attentive and very easy to do business with. Rob's insight in to the data engineering world, makes him an asset to any team or business."
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Akhil Thomas',
    job: 'Lead Data Engineer at JLR',
    review: "Rob is a highly personable and enthusiastic individual. He is a valuable asset to any team and I have no doubt he will continue to achieve great things in his career."
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Mariusz Truchlewski',
    job: 'Lead Data Engineer at JLR',
    review: 'Rob is a truly valuable member of our team because of his devotion and pursuit of excellence. His remarkable work ethic, flexibility, and creativity are just a few of his many positive qualities.'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Prabhdeep Singh',
    job: 'Data Engineer at JLR',
    review: 'Rob is a top-notch programmer, exceptionally organized, and always eager to expand his knowledge. A valuable asset to any team.'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Omar Badawi',
    job: 'Fellow Software Undergraduate at JLR',
    review: "Rob's exceptional blend of technical prowess and creativity elevates project success. He consistently exceeds expectations, adapting seamlessly to evolving demands"
  },
]

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Testimonials</h2>
        {/* Slider */}
        <Swiper 
          slidesPerView={1} 
          breakpoints={{
            640: {slidesPerView: 2},
            1400: {slidesPerView: 3},
          }} 
          spaceBetween={30} 
          modules={[Pagination]} 
          pagination={{clickable: true}} 
          className="h-[350px]"
        >
          {reviewsData.map((person, index)=> {
            return <SwiperSlide key={index}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-x-4">
                    {/* Avatar */}
                    <Image src={person.avatar} alt={person.name} width={70} height={70} priority/>
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
              </Card>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews