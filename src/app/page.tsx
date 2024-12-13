'use client'


import Image from "next/image";
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'




import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




import { RiQuillPenAiFill } from "react-icons/ri";
import { FaStar, FaFacebook, FaTwitter, FaInstagram, FaChevronRight } from "react-icons/fa";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { GiCubes } from "react-icons/gi";
import { SiRoamresearch } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { NavigationBar } from "@/components/ui/navBar";





export default function Home() {


  const crew = [
    <div key="1" className="flex flex-col gap-2 w-fit rounded-lg">
      <div>
        <img
          src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-crossed-arms-isolated-grey-studio-background-copy-space_1258-1277.jpg?w=740&t=st=1664507814~exp=1664508414~hmac=3398a06ec9c1fbc1dcee56b95d7902027c4b48c368b809fbe06f9e5a90f460c2" // Replace with the image URL
          alt="Description of the image"
          style={{ width: "300px", height: "250px", borderRadius: "15px" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Candice Wu</h3>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <BsInstagram 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaFacebook 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaTwitter 
              color="white"
              size={14}
            />
          </div>
        </div>
      </div>
    </div>,

    <div key="2" className="flex flex-col gap-2 w-fit rounded-lg">
      <div>
        <img
          src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-crossed-arms-isolated-grey-studio-background-copy-space_1258-1277.jpg?w=740&t=st=1664507814~exp=1664508414~hmac=3398a06ec9c1fbc1dcee56b95d7902027c4b48c368b809fbe06f9e5a90f460c2" // Replace with the image URL
          alt="Description of the image"
          style={{ width: "300px", height: "250px", borderRadius: "15px" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Candice Wu</h3>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <BsInstagram 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaFacebook 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaTwitter 
              color="white"
              size={14}
            />
          </div>
        </div>
      </div>
    </div>,

    <div key="3" className="flex flex-col gap-2 w-fit rounded-lg">
      <div>
        <img
          src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-crossed-arms-isolated-grey-studio-background-copy-space_1258-1277.jpg?w=740&t=st=1664507814~exp=1664508414~hmac=3398a06ec9c1fbc1dcee56b95d7902027c4b48c368b809fbe06f9e5a90f460c2" // Replace with the image URL
          alt="Description of the image"
          style={{ width: "300px", height: "250px", borderRadius: "15px" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Candice Wu</h3>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <BsInstagram 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaFacebook 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaTwitter 
              color="white"
              size={14}
            />
          </div>
        </div>
      </div>
    </div>,

    <div key="4" className="flex flex-col gap-2 w-fit rounded-lg">
      <div>
        <img
          src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-crossed-arms-isolated-grey-studio-background-copy-space_1258-1277.jpg?w=740&t=st=1664507814~exp=1664508414~hmac=3398a06ec9c1fbc1dcee56b95d7902027c4b48c368b809fbe06f9e5a90f460c2" // Replace with the image URL
          alt="Description of the image"
          style={{ width: "300px", height: "250px", borderRadius: "15px" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Candice Wu</h3>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <BsInstagram 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaFacebook 
              color="white"
              size={14}
            />
          </div>
          <div className="bg-black h-7 w-7 grid place-items-center rounded-full">
            <FaTwitter 
              color="white"
              size={14}
            />
          </div>
        </div>
      </div>
    </div>
   
  ].map((divContent, index) => (
    <div key={index}>
      {divContent}
    </div>
  ));

  const companies = [
    <Image
    key='1'
      src="/logo.png"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='2'
      src="/logo.png"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='3'
      src="/logo.png"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='4'
      src="/logo.png"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,
   
  ].map((divContent, index) => (
    <div key={index}>
      {divContent}
    </div>
  ));

  // useEffect(() => {
  //   AOS.init({
  //     duration: 500, // Animation duration in milliseconds
  //     easing: 'ease-in-out', // Animation easing
  //   });
  // }, []);


   /* eslint-disable react/no-unescaped-entities */
  return (
      <div className="overflow-hidden">
        {/* Navigation */}
        {/* <section className="fixed w-[100%] z-50 bg-white text-black">
          <div className="flex justify-between py-3 items-center md:w-[90%] w-[95%] m-auto border-b-2" >
            <div className="text-xl font-mono font-bold">TechCrib</div>
            <div className="navlinks items-center hidden lg:block">
              <ul className="flex gap-5">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="lg:hidden sm:block toggle-btn cursor-pointer" data-aos="fade-left" data-aos-duration="1400">
              <RiMenu4Line size={24}/>
            </div>

          </div>
        </section> */}
        <NavigationBar/>

        {/* Hero Section */}
        <section className="hero md:w-[90%] w-[95%] m-auto flex flex-col justify-around py-20 gap-5 lg:grid lg:grid-cols-2  h-screen text-center lg:text-left">
        <div className="grid place-items-center " data-aos="fade-right" data-aos-duration="800">
          <div className="flex flex-col gap-12">
            <div className="lg:text-[4vw] text-[7vw] font-semibold">
              Advance your <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent">business</span>  to new heights.
            </div>
            <div className="flex flex-col gap-4">
              <p>The art of visual communication, creatively impacting the world around us-one good design at a time</p>
              <div className="flex gap-3 text-center m-auto lg:m-0 md:text-base text-[13px]">
                <button className="border-3 border-[#3d44ee] bg-[#3d44ee] text-white p-2 rounded-md">Get Started on a Project</button>
                <button className="border-2 border-[#3d44ee] p-2 px-10 rounded-md">View Projects</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center" data-aos="fade-up" data-aos-duration="1400">
        <Image
            src="/techy.png"  // Path from the public folder
            alt="Description of Image"
            width={600}                  // Image width
            height={500}                 // Image height
          />
        </div>
        </section>

        {/* Ratings */}
        <section className="md:w-[90%] w-[95%] m-auto py-5 border-y-2">
        <div className="flex justify-around gap-5 flex-wrap">

          <div className="flex flex-col gap-1 text-center items-center md:items-start">
            <p className="font-semibold text-2xl flex gap-1 items-center "><FaStar size={19} color="gold"/> 4,8</p>
            <p className="text-xs text-gray-500">from 178 Reviews</p>
          </div>

          
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl md:text-left text-center">8+</h3>
            <p className="text-xs text-gray-500">Years of experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl md:text-left text-center">1.2K</h3>
            <p className="text-xs text-gray-500">Customers Worldwid</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="flex items-center gap-1"><FaStar
                  color="green"
                />Trustpilot</p>
            <div className="flex gap-1 star">
              <div className="bg-green-700  p-1 grid place-items-center">
                <FaStar
                  className="text-white w-[3vw] h-[3vw] md:w-3 md:h-3 lg:h-4 lg:w-4" 
                />
              </div>
              <div className="bg-green-700  p-1 grid place-items-center">
                <FaStar
                  className="text-white w-[3vw] h-[3vw] md:w-3 md:h-3 lg:h-4 lg:w-4" 
                />
              </div>
              <div className="bg-green-700  p-1 grid place-items-center">
                <FaStar
                  className="text-white w-[3vw] h-[3vw] md:w-3 md:h-3 lg:h-4 lg:w-4" 
                />
              </div>
              <div className="bg-green-700  p-1 grid place-items-center">
                <FaStar
                  className="text-white w-[3vw] h-[3vw] md:w-3 md:h-3 lg:h-4 lg:w-4" 
                />
              </div>
              <div className="bg-green-700  p-1 grid place-items-center">
                <FaStar
                  className="text-white w-[3vw] h-[3vw] md:w-3 md:h-3 lg:h-4 lg:w-4" 
                />
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Companies */}
        <section className="md:w-[90%] w-[95%] m-auto py-5 flex flex-col gap-5 overflow-x-visible">
          <h3 className="text-center text-md text-gray-600">Trusted by Big Companies</h3>
          <div className="flex justify-around">
          <Carousel 
            className="md:w-[90%] w-[95%]"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="-ml-1  flex items-center justify-between">
              {companies.map((divContent, index) => (
                <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/3 flex justify-around gap-5 bg-white p-1 ">
                  {divContent}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          </div>
      </section>
        
        {/* Work flow */}
        <section className=" bg-[#18194e] text-white">
          <div className="md:w-[90%] w-[95%] m-auto py-10">
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="grid md:grid-cols-2 gap-2">

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3.5rem] h-[3.5rem]  grid place-items-center rounded-full  ">
                    <RiQuillPenAiFill
                    size={30}/>
                  </div>

                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl text-xl">Designing</h3>
                    <p className="text-gray-400 text-sm">Designed according to client's requirements</p>
                  </div>
                </div>

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3.5rem] h-[3.5rem]  grid place-items-center rounded-full  ">
                    <HiOutlinePresentationChartBar
                    size={30}/>
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl text-xl">Live Testing</h3>
                    <p className="text-gray-400 text-sm">After completing the work, live test is done</p>
                  </div>
                </div>

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3.5rem] h-[3.5rem]  grid place-items-center rounded-full  ">
                    <GiCubes
                    size={30}/>
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl text-xl">Development</h3>
                    <p className="text-gray-400 text-sm">Deployment by skilled team developers</p>
                  </div>
                </div>

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3.5rem] h-[3.5rem]  grid place-items-center rounded-full  ">
                    <SiRoamresearch
                    size={30}/>
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl text-xl">Research</h3>
                    <p className="text-gray-400 text-sm">We do research before we start any project</p>
                  </div>
                </div>

              </div>
              <div className="flex flex-col gap-2">
                <h2 className="md:text-[2.5vw] text-[4vw] text-center md:text-left">
                  Easy, Dynamic, and Optimal Workflow
                </h2>
                <p className="lg:text-[1.1vw] md:text-[2vw] text-[3vw] sm:text-[2vw] text-gray-400 text-center md:text-left">We adhere to the finest, and uncomplicated operational methods to optimize your business expansion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="md:w-[90%] w-[95%] m-auto py-10 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-2 flex flex-col gap-5 items-center text-center md:text-left">
            <h2 className="lg:text-5xl text-3xl font-semibold">Services That Add Significant <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent">Business</span> Value</h2>
            <p className="text-sm lg:text-lg text-gray-500">Our offerings encompass services that serce as startup mentoring or include, contributing to the enhanced value proposition of your business</p>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="sm:text-lg text-md">What services do you offer to advance my business?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-md text-xs ">
                  We provide comprehensive services, including custom design, live testing, skilled development, and thorough research to ensure your business reaches new heights. Our solutions are tailored to meet your specific requirements and optimise your workflow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="sm:text-lg text-md">How do you ensure the designs align with my requirements?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-md text-xs ">
                  We collaborate closely with our clients, understanding their needs and preferences to create designs that reflect their vision while effectively communicating their brand's message.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="sm:text-lg text-md">What is your workflow process?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-md text-xs ">
                  Our workflow is simple, dynamic, and efficient. We begin with in-depth research, proceed with designing and development, and conclude with live testing to ensure a seamless and optimal result.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="sm:text-lg text-md">What is included in the live testing phase?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-md text-xs ">
                  Live testing involves deploying the completed project in a real-world environment to identify and resolve any issues. This ensures the final product is flawless and ready for your audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="sm:text-lg text-md">How does your work add value to my business?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-md text-xs ">
                  Our services are designed to not just meet but exceed your expectations. By leveraging startup mentoring, enhanced value propositions, and cutting-edge operational methods, we help your business achieve significant growth and success.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Evolution */}
        <section>
          <div className="md:w-[90%] w-[95%] m-auto py-10 md:grid md:grid-cols-2 flex flex-col gap-10 items-center">

            <div className="grid grid-cols-1 gap-3 border-3 border-red-600">
              <div>
                <h1 className=" md:text-[4vw] text-[6vw] text-center md:text-left">The Evolution of Our Firm</h1>
              </div>
              <div className=" grid place-items-center md:place-items-start">
                <button className="bg-[#3d44ee] py-3 px-6 md:px-16 text-white rounded-full items-start text-center shrink-0">Learn More</button>
              </div>
            </div>

            <div className="flex flex-col gap-5 text-gray-500 text-center md:text-left md:text-base text-sm">
              <p>We've established a platform for budding enterpreneurs to master the art of initiating and expanding their business successfully</p>
              <p>We encompass all aspects from initiation to expansion, even embracing setbacks. In a world where success often centers on a few, we're here to explore what unfolds beyond the elevator pitch</p>
            </div>
          </div>
        </section>


        {/* Crew */}
        <section>
          <div className="md:w-[90%] w-[95%] m-auto py-10 flex flex-col gap-5">
            <div>
              <h1 className="md:text-[4vw] lg:text-[3vw] text-[6vw] text-center md:text-left">Meet our Creative crew.</h1>
              <p className="text-gray-500 text-center md:text-left md:text-base text-sm">Exploring the Talented members of Our Creative Crew</p>
            </div>
            {/* crew members  */}
            <div className="flex justify-around gap-5 flex-wrap items-center">
            <Carousel 
                  className="w-[70vw] "
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                >
                  <CarouselContent className="-ml-1  flex items-center justify-between">
                    {crew.map((divContent, index) => (
                      <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/3 flex justify-around gap-5">
                        {divContent}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
            </div>
          </div>
        </section>

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
                  <p>Our Story</p>
                  <p>Benefits</p>
                  <p>Team</p>
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
  );
}
