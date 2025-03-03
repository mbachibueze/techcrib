'use client'


import React from 'react'
import Footer from '@/components/ui/footer'


import { NavigationBar } from '@/components/ui/navBar'


const Story = () => {
  return (
    <div className='overflow-hidden'>
      <NavigationBar/>

      {/* Hero Section */}
      <div className='w-[100%] sm:h-[40vh] h-[30vh] sm:mt-0 mt-10  grid place-items-center text-center '>
        <div className="flex flex-col gap-6">
          <div className="lg:text-[4vw] text-[7vw]  text-center font-semibold">
              The <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent"> Code </span>Behind Us
          </div>
          <div className="flex flex-col gap-4 text-2xl">
            <p>Writing the script of innovation, one byte at a time.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className='lg:w-[80%] md:w-[90%] w-[95%] m-auto place-items-center  my-5 mt-0'>
        <div className='flex flex-col gap-6 text-base font-light'>
          <p>In the ever-evolving world of technology, we are the architects of innovation, crafting solutions that transcend boundaries and redefine possibilities. Our journey began with a simple yet profound belief: that technology holds the power to create, connect, and transform lives. From our humble beginnings as a team of visionaries united by a shared passion for progress, we’ve grown into a collective force driving change in the digital landscape. Every line of code we write and every product we build is infused with a commitment to excellence and a relentless pursuit of what’s next.</p>
          <p>At our core, we are more than just a tech company—we are dreamers, builders, and problem-solvers. We thrive at the intersection of creativity and technology, tackling challenges head-on and transforming them into opportunities. Whether developing intuitive user experiences, leveraging the latest in AI and machine learning, or creating robust systems that empower businesses, our mission is to deliver solutions that inspire and endure. Our story isn’t just about what we’ve accomplished but the impact we aspire to make in shaping a brighter, smarter future for all.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Story