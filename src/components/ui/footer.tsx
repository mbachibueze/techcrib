import Link from 'next/link'
import React, { useState } from 'react';
import { FaChevronRight, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

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

import axios from "axios";

const Footer = () => {

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

  return (
    <div>
      {/* Footer */}
            <section className="relative bg-[#18194e] text-white lg:py-5"
  style={{
    WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, #000 15px, #000 100%)",
    maskImage: "linear-gradient(to bottom, transparent 0px, #000 15px, #000 100%)"
  }}
>
                <div className="lg:w-[80%] md:w-[90%] w-[95%] m-auto py-5">
                  <div className="flex justify-between items-center py-10 border-b-2 border-gray-600">
                    <h1 className="lg:text-[2.2vw] md:text-[3w] sm:text-[2.5vw] ">Got an exciting project idea? <br/> Let's have a conversation about it. </h1>

                    <DrawerRoot placement="bottom">
                      <DrawerBackdrop />
                      <DrawerTrigger asChild>
                        <div className="bg-[#5b6df9] rounded-full h-[20vw] w-[20vw] sm:h-[16vw] sm:w-[16vw] lg:h-40 lg:w-40 grid place-items-center text-xs lg:text-lg md:text-sm cursor-pointer shadow-inner-custom SP text-center">
                        Start Project
                      </div>
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