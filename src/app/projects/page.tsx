'use client'

import { useState } from "react";

import { NavigationBar } from '@/components/ui/navBar'
import Footer from "@/components/ui/footer";
import React from 'react'
import { FaChevronRight, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import ProjectCard, { CardProps } from '@/components/ui/projectsComponets'


const Projects = () => {

  const [cardData] =  useState<CardProps[]>([
    {
      backgroundImage: 'https://img.freepik.com/free-photo/medium-shot-empowered-business-people_23-2149333006.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Eazzi Exchange',
      description: 'A Crypto trading platform for buying and selling of gift-cards and iTunes',
      languages: ['HTML', 'CSS', 'Javascript'],
      projectLink: 'https://eazii-exchange-mtap.vercel.app/',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/business-leader-interviewing-job-candidate_74855-1146.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Portfolio Site',
      description: 'A sleek personal portfolio showcasing projects.',
      languages: ['Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'MongoDb'],
      projectLink: 'https://example.com/tech-website',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060229.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Portfolio Site',
      description: 'A sleek personal portfolio showcasing projects.',
      languages: ['Next.js', 'Chakra UI', 'TypeScript'],
      projectLink: 'https://example.com/tech-website',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/close-up-colleagues-chatting-table_23-2149304764.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Portfolio Site',
      description: 'A sleek personal portfolio showcasing projects.',
      languages: ['Next.js', 'Chakra UI', 'TypeScript'],
      projectLink: 'https://example.com/tech-website',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/medium-shot-empowered-business-people_23-2149333006.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Eazzi Exchange',
      description: 'A Crypto trading platform for buying and selling of gift-cards and iTunes',
      languages: ['HTML', 'CSS', 'Javascript'],
      projectLink: 'https://eazii-exchange-mtap.vercel.app/',
    },
  ])




   /* eslint-disable react/no-unescaped-entities */
  return (
    <div className='overflow-hidden'>
      <NavigationBar/>

      {/* Hero Section */}
      <div className='w-[100%] sm:h-[40vh] h-[30vh] sm:mt-0 mt-10  grid place-items-center bg-[#dee9ff]'>
        <div className="lg:text-[4vw] text-[7vw]  text-center font-semibold">
              Advance your <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent">business</span>  to new heights.
          </div>
      </div>

      {/* Projects */}
      <div className='grid  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:w-[90%] w-[95%] m-auto place-items-center  my-5'>
        {cardData.map((d, i) => (
            // Renders each `Card` component with the properties from `cardData`
            <ProjectCard
              key={i}
              backgroundImage={d.backgroundImage}
              projectName={d.projectName}
              description={d.description}
              languages={d.languages}
              projectLink={d.projectLink}
            />
          ))}
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Projects