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
      projectName: 'Bill Payment App',
      description: 'A bill payment app that allows users to pay bills with ease.',
      languages: ['Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'MongoDb'],
      projectLink: 'https://example.com/tech-website',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060229.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Inventory Management System',
      description: 'A system that helps businesses manage their inventory with ease.',
      languages: ['Next.js', 'Chakra UI', 'TypeScript'],
      projectLink: 'https://example.com/tech-website',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/close-up-colleagues-chatting-table_23-2149304764.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Real Estate Website',
      description: 'A website that helps users find the perfect home for them.',
      languages: ['Next.js', 'Chakra UI', 'TypeScript'],
      projectLink: 'https://example.com/tech-website',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/medium-shot-empowered-business-people_23-2149333006.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid', // Replace with your project image URL
      projectName: 'Home Automation System',  
      description: 'An App that helps users control their home appliances with ease.',
      languages: ['HTML', 'CSS', 'Javascript'],
      projectLink: 'https://eazii-exchange-mtap.vercel.app/',
    },
  ])




   /* eslint-disable react/no-unescaped-entities */
  return (
    <div className='overflow-hidden'>
      <NavigationBar/>

      {/* Hero Section */}
      <div className='w-[100%] sm:h-[40vh] h-[30vh] sm:mt-0 mt-10  grid place-items-center '>
        <div className="lg:w-[80%] md:w-[90%] w-[95%] lg:text-[5vw] text-[5vw] mt-5 text-center font-semibold">
              Advance your <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent">business</span>  to new heights and Beyond
          </div>
      </div>

      {/* Projects */}
      <div className='grid  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-[80%] md:w-[90%] w-[95%] m-auto place-items-center  my-5 pb-10'>
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