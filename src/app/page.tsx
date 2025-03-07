'use client'


import Image from "next/image";
import React, { useState } from 'react';
import Link from 'next/link'
import Footer from "@/components/ui/footer";

import axios from "axios";

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




import Autoplay from 'embla-carousel-autoplay'
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


  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    features: "",
    deadline: "",
    budget: "",
    contact: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


    const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Dummy API URL

    try {
      const response = await axios.post(apiUrl, formData);

      setFormData({
        projectName: "",
        projectDescription: "",
        features: "",
        deadline: "",
        budget: "",
        contact: "",
        notes: "",
      });

      toaster.create({ title: "Form submitted successfully!", description: "We'll get back to you shortly.", type: "success", duration: 3000 });
      console.log("Response:", response.data);
    } catch (error) {
      toaster.create({ title: "Submission failed", description: "An error occurred while submitting the form. Please try again.", type: "error", duration: 3000 });
      console.error("Error:", error);
    } finally {
      setLoading(false);
      
    }
  };


  const [activeService, setActiveService] = useState('Web Development');

  const crew = [
    <div key="1" className="flex flex-col gap-2 w-fit rounded-lg">
      <div>
        <img
          src="https://img.freepik.com/free-photo/worldface-american-man-white-background_53876-31194.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid"
          style={{ width: "300px", height: "250px", borderRadius: "15px", objectFit: "cover" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Temitope</h3>
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
          src="https://img.freepik.com/premium-photo/minimal-head-shoulders-portrait-handsome-africanamerican-man-looking-camera-against-blue_236854-33949.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid"
          style={{ width: "300px", height: "250px", borderRadius: "15px", objectFit: "cover" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">James</h3>
          <p className="text-sm text-gray-600">Backend Dev</p>
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
          src="https://img.freepik.com/premium-photo/afro-american-woman-mixed-race-posing-dark-background-urban-clothes-modern-pretty-smiling_188913-1681.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid"
          style={{ width: "300px", height: "250px", borderRadius: "15px", objectFit: "cover" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Chinwe</h3>
          <p className="text-sm text-gray-600">Frontend Dev</p>
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
          src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid" 
          alt="Description of the image"
          style={{ width: "300px", height: "250px", borderRadius: "15px", objectFit: "cover" }} // Styling
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg text-bold">Adeola</h3>
          <p className="text-sm text-gray-600">Data Scientist </p>
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
      src="/adyen.svg"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='2'
      src="/meta.svg"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='3'
      src="/netflix.svg"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='4'
      src="/microsoft.svg"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,

    <Image
    key='4'
      src="/windows.svg"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,
    
    <Image
    key='4'
      src="/mastercard.svg"  // Path from the public folder
      alt="Description of Image"
      width={75}                  // Image width
      height={25}                 // Image height
    />,

    <Image
    key='4'
      src="/arduino.svg"  // Path from the public folder
      alt="Description of Image"
      width={75}                  // Image width
      height={50}                 // Image height
    />,

    <Image
    key='4'
      src="/axios.svg"  // Path from the public folder
      alt="Description of Image"
      width={150}                  // Image width
      height={100}                 // Image height
    />,
   
  ].map((divContent, index) => (
    <div key={index}>
      {divContent}
    </div>
  ));

  const services = [
    {
      name: 'Web Development',
      description:
        'Is it a game idea? Or a business? Or anything else? If you can dream it, we can code it! Our Apps are well designed, fluid and loved by everyone',
      items: [
        'Building for iOS and Android Platform',
        'Flutter and Java Development',
        'Routine Maintenance',
      ],
      image: 'https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
    },
    {
      name: 'App Development',
      description:
        'From conceptualisation to launch, we build user-friendly mobile apps that meet your specific business needs.',
      items: [
        'Custom app development',
        'Cross-platform compatibility',
        'Regular updates and support',
      ],
      image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
    },
    {
      name: 'Machine Learning',
      description:
        'Empowering your applications with advanced AI and ML solutions tailored to your requirements.',
      items: [
        'Predictive analytics',
        'Natural language processing',
        'Custom ML model development',
      ],
      image: 'https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
    },
  ];

  const currentService = services.find((service) => service.name === activeService);


   /* eslint-disable react/no-unescaped-entities */
  return (
      <div className="overflow-hidden">
        {/* Navigation */}
        <NavigationBar/>
        <Toaster />

        {/* Hero Section */}
        <section className="hero lg:w-[80%] md:w-[90%] w-[95%] m-auto flex flex-col justify-around py-20 gap-5 lg:grid lg:grid-cols-2  h-screen text-center lg:text-left mt-5">

          <div className="grid place-items-center " data-aos="fade-right" data-aos-duration="800">
            
            <div className="flex flex-col gap-12">
              <div className="lg:text-[4vw] text-[7vw] font-semibold leading-tight">
                Advance your <span className="bg-gradient-to-r from-[#272ba0] to-[#a0baff] bg-clip-text text-transparent">business</span>  to new heights.
              </div>
              <div className="flex flex-col gap-4">
                <p>The art of visual communication, creatively impacting the world around us-one good design at a time</p>
                <div className="flex gap-3 text-center m-auto lg:m-0 md:text-base text-[13px]">

                  
                  
                <DrawerRoot placement="bottom">
                  <DrawerBackdrop />
                  <DrawerTrigger asChild>
                    <button className="border-3 border-[#3d44ee] bg-[#3d44ee] text-white p-2 rounded-md">
                      Get Started on a Project
                    </button>
                  </DrawerTrigger>
                  <DrawerContent roundedTop="lg" className="grid place-items-center overflow-y-auto max-h-[90vh]">
                    <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[100%] m-auto scrollbar-none">
                      <DrawerHeader>
                        <DrawerTitle className="font-bold text-lg">Start Your Project</DrawerTitle>
                      </DrawerHeader>
                      <DrawerBody>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                          {/* Project Name */}
                          <div>
                            <label htmlFor="projectName" className="block text-sm font-medium">
                              Project Name
                            </label>
                            <input
                              id="projectName"
                              type="text"
                              placeholder="Enter project name"
                              className="w-full p-2 border rounded-md"
                              value={formData.projectName}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Project Description */}
                          <div>
                            <label htmlFor="projectDescription" className="block text-sm font-medium">
                              Project Description
                            </label>
                            <textarea
                              id="projectDescription"
                              placeholder="Briefly describe the project"
                              className="w-full p-2 border rounded-md"
                              rows={4}
                              value={formData.projectDescription}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Features */}
                          <div>
                            <label htmlFor="features" className="block text-sm font-medium">
                              Key Features or Requirements
                            </label>
                            <textarea
                              id="features"
                              placeholder="List the key features you want in the project"
                              className="w-full p-2 border rounded-md"
                              rows={3}
                              value={formData.features}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Deadline */}
                          <div>
                            <label htmlFor="deadline" className="block text-sm font-medium">
                              Deadline
                            </label>
                            <input
                              id="deadline"
                              type="date"
                              className="w-full p-2 border rounded-md"
                              value={formData.deadline}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Budget */}
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium">
                              Estimated Budget
                            </label>
                            <input
                              id="budget"
                              type="text"
                              placeholder="Enter your budget (e.g., $5000)"
                              className="w-full p-2 border rounded-md"
                              value={formData.budget}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Contact Information */}
                          <div>
                            <label htmlFor="contact" className="block text-sm font-medium">
                              Contact Email
                            </label>
                            <input
                              id="contact"
                              type="email"
                              placeholder="Enter your email address"
                              className="w-full p-2 border rounded-md"
                              value={formData.contact}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Additional Notes */}
                          <div>
                            <label htmlFor="notes" className="block text-sm font-medium">
                              Additional Notes
                            </label>
                            <textarea
                              id="notes"
                              placeholder="Any other details you'd like to share"
                              className="w-full p-2 border rounded-md"
                              rows={3}
                              value={formData.notes}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Submit Button */}

                          <div className="flex justify-end space-x-2">
                            <DrawerActionTrigger asChild>
                              <button
                                type="button"
                                className="border border-gray-300 px-4 py-2 rounded-md"
                              >
                                Cancel
                              </button>
                            </DrawerActionTrigger>
                            <button
                              type="submit"
                              className="bg-[#3d44ee] text-white px-4 py-2 rounded-md"
                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </button>
                          </div>
                        </form>
                      </DrawerBody>
                      <DrawerCloseTrigger />
                    </div>
                  </DrawerContent>
                </DrawerRoot>

                  <Link href="/projects">
                    <button className="border-2 border-[#3d44ee] p-2 px-10 rounded-md hover:text-[#3d44ee]">View Projects</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid place-items-center" data-aos="fade-up" data-aos-duration="1400">
          <Image
              src="/globe.png"  // Path from the public folder
              alt="Description of Image"
              width={500}                  // Image width
              height={400}                 // Image height
            />
          </div>
        </section>

        {/* Ratings */}
        <section className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-5 border-y-2">
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
        <section className="lg:w-[80%] md:w-[90%] w-[100%] m-auto py-5 flex flex-col gap-5 overflow-x-visible">
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
                <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/3 flex justify-around gap-5 p-1 ">
                  {divContent}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          </div>
      </section>
        
        {/* Work flow */}
        <section className="relative bg-[#18194e] text-white lg:py-5"
  // style={{
  //   WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, #000 20px, #000 calc(100% - 20px), transparent 100%)",
  //   maskImage: "linear-gradient(to bottom, transparent 0px, #000 20px, #000 calc(100% - 20px), transparent 100%)"
  // }}
>
          <div className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-10">
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
              <div className=" col-span-2 grid md:grid-cols-2 gap-2">

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3rem] h-[3rem]  grid place-items-center rounded-full  ">
                    <RiQuillPenAiFill
                    size="30px"/>
                  </div>

                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl md:text-xl text-base">Designing</h3>
                    <p className="text-gray-400 text-sm">Designed according to client's requirements</p>
                  </div>
                </div>

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3rem] h-[3rem]  grid place-items-center rounded-full  ">
                    <HiOutlinePresentationChartBar
                    size={30}/>
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl text-xl">Live Testing</h3>
                    <p className="text-gray-400 text-sm">After completing the work, live test is done</p>
                  </div>
                </div>

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3rem] h-[3rem]  grid place-items-center rounded-full  ">
                    <GiCubes
                    size={30}/>
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <h3 className="lg:text-2xl text-xl">Development</h3>
                    <p className="text-gray-400 text-sm">Deployment by skilled team developers</p>
                  </div>
                </div>

                <div className="border-[1px] border-gray-500 p-3 rounded-[20px] grid grid-cols-5 gap-6 items-center">
                  <div className="bg-gray-500  w-[3rem] h-[3rem]  grid place-items-center rounded-full  ">
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
                <p className="lg:text-[1.3vw] md:text-[2vw] text-[3vw] sm:text-[2vw] text-gray-400 text-center md:text-left">We adhere to the finest, and uncomplicated operational methods to optimize your business expansion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-10 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-2 flex flex-col gap-5 items-center text-center md:text-left">
            <h2 className="lg:text-5xl text-3xl font-semibold">Services That Add Significant <span className="bg-gradient-to-r from-[#272ba0] to-[rgb(160,186,255)] bg-clip-text text-transparent">Business</span> Value</h2>
            <p className="text-sm lg:text-xl text-gray-500 lg:hidden">We provide a comprehensive range of services designed to support and empower startups through personalised mentoring, strategic guidance, and hands-on collaboration. Our goal is to contribute to the growth and development of your business by enhancing its value proposition, refining your market positioning, and equipping you with the tools and insights needed to thrive in a competitive landscape.</p>
          </div>

          <div className="flex flex-row justify-between lg:gap-[3vw]  m-auto items-center ">

            <div><p className="text-sm lg:text-xl text-gray-500 lg:block hidden">We provide a comprehensive range of services designed to support and empower startups through personalised mentoring, strategic guidance, and hands-on collaboration. Our goal is to contribute to the growth and development of your business by enhancing its value proposition, refining your market positioning, and equipping you with the tools and insights needed to thrive in a competitive landscape.</p></div>

            <div className="place-items-center justify-center gap-5 flex flex-col w-fit m-auto col-span-2">

                {/* Header Tabs */}
              <div className="grid grid-cols-3 sm:text-base text-[2.7vw] lg:text-[1vw] sm:gap-12 gap-4 bg-[#c4d5ff] text-[#18194e] p-2 rounded lg:w-[100%] w-fit">
                {services.map((service) => (
                  <span
                    key={service.name}
                    className={`services ${
                      activeService === service.name ? 'bg-[#18194e] text-white' : ''
                    }`}
                    onClick={() => setActiveService(service.name)}
                  >
                    {service.name}
                  </span>
                ))}
              </div>
              
              {/* Content Area */}
              <div className="border-[3px] border-[#c4d5ff] rounded-md sm:w-[624.16px] w-fit p-2">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 m-auto">
                  {/* Image */}
                  <div className="bg-[#c4d5ff] text-[#18194e] rounded-sm sm:block sm:h-full h-[200px]">
                    <img
                      src={currentService?.image}
                      alt={currentService?.name}
                      className="rounded-md w-full h-full object-cover "
                    />
                  </div>

                  {/* Write up */}
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold  text-lg sm:text-left text-center">{currentService?.name}</h2>
                    <p className="text-sm text-gray-500 sm:text-left text-center">{currentService?.description}</p>
                    <div className="text-gray-500 text-sm w-full sm:flex grid place-items-center">
                      <ul className="flex flex-col gap-2">
                        {currentService?.items.map((item, index) => (
                          <li key={index}>
                            <span className="text-white text-xs px-2 bg-[#5a6afa] rounded-full">
                              {index + 1}
                            </span>{' '}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* FAQ's */}
        <section className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-10z flex flex-col gap-4">
          <div className="  md:text-[4vw] lg:text-[3vw] text-[6vw] text-center lg:text-left">FAQ's</div>
          <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="sm:text-lg text-md">What services do you offer to advance my business?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-base text-xs ">
                  We provide comprehensive services, including custom design, live testing, skilled development, and thorough research to ensure your business reaches new heights. Our solutions are tailored to meet your specific requirements and optimise your workflow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="sm:text-lg text-md">How do you ensure the designs align with my requirements?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-base text-xs ">
                  We collaborate closely with our clients, understanding their needs and preferences to create designs that reflect their vision while effectively communicating their brand's message.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="sm:text-lg text-md">What is your workflow process?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-base text-xs ">
                  Our workflow is simple, dynamic, and efficient. We begin with in-depth research, proceed with designing and development, and conclude with live testing to ensure a seamless and optimal result.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="sm:text-lg text-md">What is included in the live testing phase?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-base text-xs ">
                  Live testing involves deploying the completed project in a real-world environment to identify and resolve any issues. This ensures the final product is flawless and ready for your audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="sm:text-lg text-md">How does your work add value to my business?</AccordionTrigger>
                <AccordionContent className="text-gray-500 sm:text-base text-xs ">
                  Our services are designed to not just meet but exceed your expectations. By leveraging startup mentoring, enhanced value propositions, and cutting-edge operational methods, we help your business achieve significant growth and success.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </section>

        {/* Evolution */}
        <section>
          <div className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-10 md:grid md:grid-cols-2 flex flex-col gap-10 items-center">

            <div className="grid grid-cols-1 gap-3 border-3 border-red-600">
              <div>
                <h1 className=" md:text-[4vw] text-[6vw] text-center md:text-left">The Evolution of Our Firm</h1>
              </div>
              <div className=" grid place-items-center md:place-items-start">
                <Link href='/ourStory'>
                  <button className="bg-[#3d44ee] py-3 px-6 md:px-16 text-white rounded-full items-start text-center shrink-0">Learn More</button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 text-gray-500 text-center md:text-left md:text-base text-sm lg:text-lg">
              <p>We've established a platform for budding enterpreneurs to master the art of initiating and expanding their business successfully</p>
              <p>We encompass all aspects from initiation to expansion, even embracing setbacks. In a world where success often centers on a few, we're here to explore what unfolds beyond the elevator pitch</p>
            </div>
          </div>
        </section>

        {/* Crew */}
        <section>
          <div className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-10 flex flex-col gap-5">
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
        <Footer/>
      </div>
  );
}
