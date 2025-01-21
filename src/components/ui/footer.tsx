import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
            <section className="bg-[#18194e] text-white">
                <div className="md:w-[90%] w-[95%] m-auto py-5">
                  <div className="flex justify-between items-center py-10 border-b-2 border-gray-600">
                    <h1 className="lg:text-[2.2vw] md:text-[3w] sm:text-[2.5vw] ">Got an exciting project idea? <br/> Let's have a conversation about it. </h1>
                    <div className="bg-[#5b6df9] rounded-full h-[20vw] w-[20vw] sm:h-[16vw] sm:w-[16vw] lg:h-40 lg:w-40 grid place-items-center text-xs lg:text-lg md:text-sm cursor-pointer shadow-inner-custom SP">
                      Start Project
                    </div>
                  </div>
                  {/* cta */}
                  <div className="grid md:grid-cols-2 items-center py-10 border-b-2 border-gray-600 md:text-left text-center gap-10">
                    <div className="flex flex-col gap-5 items-center md:items-start">
                      <h2 className="font-semibold text-xl">TechCrib</h2>
                      <h3 className="font-semibold">Subscribe to our newsletter</h3>
                      <div className="flex items-center bg-white w-fit rounded-md text-black border-2 border-white ">
                        <input
                          type="text"
                          placeholder="Enter your text here"
                          className="border-none p-2 rounded w-[300px] bg-transparent outline-none"
                        />
                        <div className="bg-black rounded h-10 w-10 grid place-items-center cursor-pointer">
                          <FaChevronRight color="white"/>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 justify-between gap-5 text-gray-400 text-sm">
                      <div className="flex flex-col gap-5 cta-li ">
                        <h3 className="text-white font-semibold">Services</h3>
                        <p>Email Marketing</p>
                        <p>Campaigns</p>
                        <p>Branding</p>
                        <p>Offline</p>
                      </div>
      
                      <div className="flex flex-col gap-5 cta-li ">
                        <h3 className="text-white font-semibold">About</h3>
                        <Link href="/ourStory">
                          <p>Our Story</p>
                        </Link>
                        <p>Benefits</p>
                        <Link href="/team">
                          <p>Team</p>
                        </Link>
                        <p>Careers</p>
                      </div>
      
                      <div className="flex flex-col gap-5 cta-li ">
                        <h3 className="text-white font-semibold">Help</h3>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                      </div>
                    </div>
                  </div>
      
                  <div className="flex justify-between items-center text-xs py-5">
                    <div className="flex items-center gap-[3vw] footer">
                      <p>Terms and Conditions</p> <p>Privacy Policy</p>
                    </div>
                    <div className="flex gap-[3vw] ">
                      <FaFacebookF className="cursor-pointer"/>
                      <FaTwitter className="cursor-pointer"/>
                      <FaInstagram className="cursor-pointer"/>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Footer