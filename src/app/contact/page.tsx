'use client'


import { NavigationBar } from '@/components/ui/navBar';
import React, { useState } from 'react';
import { Toaster, toaster } from "@/components/ui/toaster"

const ContactForm: React.FC = () => {
  const toast = Toaster();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call or form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toaster.create({
        title: 'Message sent!',
        description: 'Thank you for reaching out. We will get back to you shortly.',
        type: 'success',
        placement: "bottom-end"
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (

    <div className='overflow-hidden'>
      <NavigationBar/>
      <Toaster/>
      <div className="min-h-screen grid place-items-center  sm:w-[95%] m-auto w-[90%] sm:mt-0 mt-[50px]">

        <div className="bg-white rounded-lg shadow-lg sm:p-8 p-4 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Enter a subject"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Write your message here"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
