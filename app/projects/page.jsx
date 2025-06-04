'use client';

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: '/work/7.webp',
    category: 'swift',
    name: 'CyberGrid',
    description: 'A grid-based strategy game inspired by Reversi, with a cyberpunk aesthetic. Built with Swift',
    link: '/projects/cybergrid',
    github: 'https://github.com/robbiehaynes/CyberGrid'
  },
  {
    image: '/work/1.webp',
    category: 'swift',
    name: 'Hilton Meals App',
    description: 'An iOS app for a school to view their meals for the current day. Built with Swift and Firebase',
    link: null,
    github: 'https://github.com/robbiehaynes/Hilton-meals-ios'
  },
  {
    image: '/work/2.webp',
    category: 'web dev',
    name: 'Equine Group Website',
    description: 'A website for the leading bloodstock insurance provider in South Africa. Built with HTML/CSS/JS and Bootstrap',
    link: 'http://www.equine.co.za'
  },
  {
    image: '/work/6.webp',
    category: 'web dev',
    name: 'Portfolio Website',
    description: 'The site you are on right now :) Built with NextJS, Tailwind CSS, Shadcn UI. Deployed on Vercel.',
    link: '/',
    github: 'https://github.com/robbiehaynes/haynoway'
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
    image: '/work/4.webp',
    category: 'python',
    name: 'Arbitrage Finder',
    description: 'A Python script that fetches betting odds from an API and finds arbitrage opportunities',
    link: null,
    github: 'https://github.com/robbiehaynes/arbitrage-finder'
  },
  {
    image: '/work/5.webp',
    category: 'java',
    name: 'KiftoCoin',
    description: 'A simple cryptocurrency and blockchain built in Java for my final year school project',
    link: null,
    github: 'https://github.com/robbiehaynes/KiftoCoin'
  }
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((project) => project.category))
];

const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory ] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' 
      ? project 
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index)=> {
              return (
                <TabsTrigger 
                  onClick={() => setCategory(category)}
                  value={category} 
                  key={index} 
                  className="capitalize w-[162px] md:w-auto"
                >
                    {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects