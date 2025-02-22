'use client'

import Footer from '@/components/ui/footer'
import { NavigationBar } from '@/components/ui/navBar'
import TeamCard, {CardProps} from '@/components/ui/teamCard'
import React, { useState } from 'react'

const Team = () => {

  const [cardData, setCardData] = useState<CardProps[]>([
    {
      backgroundImage: 'https://img.freepik.com/free-photo/worldface-american-man-white-background_53876-31194.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Temitope',
      about: 'CEO and visionary leader with a passion for innovation and growth.',
      stack: 'Leadership, Strategy',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/young-african-american-woman-with-headband-posing_23-2148183427.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Amara',
      about: 'Creative director driving impactful designs and user experiences.',
      stack: 'UI/UX Design',
    },
    {
      backgroundImage: 'https://img.freepik.com/premium-photo/minimal-head-shoulders-portrait-handsome-africanamerican-man-looking-camera-against-blue_236854-33949.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'James',
      about: 'Backend developer ensuring seamless system performance.',
      stack: 'Backend Development',
    },
    {
      backgroundImage: 'https://img.freepik.com/premium-photo/afro-american-woman-mixed-race-posing-dark-background-urban-clothes-modern-pretty-smiling_188913-1681.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Chinwe',
      about: 'Frontend developer crafting interactive and responsive interfaces.',
      stack: 'Frontend Development',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Adeola',
      about: 'Data scientist uncovering insights to fuel smarter decisions.',
      stack: 'Data Science',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/portrait-serious-man_23-2148779998.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Victor',
      about: 'Marketing expert connecting technology with the right audience.',
      stack: 'Digital Marketing',
    },
    {
      backgroundImage: 'https://img.freepik.com/premium-photo/close-up-portrait-young-woman-with-dreadlocks-against-white-background_1048944-19549237.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Aisha',
      about: 'Mobile app developer delivering user-friendly experiences.',
      stack: 'Mobile Development',
    },
    {
      backgroundImage: 'https://img.freepik.com/free-photo/young-beautiful-african-girl-smiling-dark-wall_176420-5816.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Fatima',
      about: 'Cybersecurity specialist safeguarding digital assets and systems.',
      stack: 'Cybersecurity',
    },
  ])


  return (
    <div className='overflow-hidden'>
      <NavigationBar/>

      {/* Hero Section */}
      <div className='w-[100%] sm:h-[40vh] h-[30vh] sm:mt-0 mt-10  grid place-items-center text-center '>
        <div className="flex flex-col gap-6">
          <div className="lg:text-[4vw] text-[7vw]  text-center font-semibold">
          The <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent"> Minds </span> Behind the Code
          </div>
          <div className="flex flex-col gap-4 text-2xl">
            <p>Meet the visionaries shaping the future of technology—one  code at a time.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className='grid  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-[80%] md:w-[90%] w-[95%] m-auto place-items-center  my-5 pb-10'>

        {cardData.map((d,i) => (
          <TeamCard
            key={i}
            backgroundImage={d.backgroundImage}
            name={d.name}
            about={d.about}
            stack={d.stack}
          />
        ) )}

      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Team