"use client";

import React, { useRef } from "react";


import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { RiMenu4Line } from "react-icons/ri";
import { Button  } from "@chakra-ui/react";




export const NavigationBar = () => {

  const ref = useRef<HTMLInputElement>(null)


  return (
      <div>
        {/* Navigation */}
        <section className="fixed w-full z-50 backdrop-blur-lg bg-white/50 shadow-md ">
          <div className="flex justify-between py-3 items-center md:w-[90%] w-[95%] m-auto ">
            {/* Logo */}
            <div className="text-xl font-mono font-bold">TechCrib</div>

            {/* Nav list */}
            <div className="hidden lg:block">
              <ul className="flex gap-5">
                <li className="hover:text-red-700 cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Our Team</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Nav button */}
            <div className="lg:hidden sm:block">
              <DrawerRoot initialFocusEl={() => ref.current} >
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                  <Button variant="outline" size="sm">
                    <div
                      className="sm:block"
                      data-aos="fade-left"
                      data-aos-duration="1400"
                    >
                      <RiMenu4Line size={30} />
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerBody>
                  <div className="">
                    <ul className="flex flex-col py-5 gap-5">
                      <li className="cursor-pointer">Home</li>
                      <li className="cursor-pointer">About Us</li>
                      <li className="cursor-pointer">Our Team</li>
                      <li className="cursor-pointer">Contact</li>
                    </ul>
                  </div>
                  </DrawerBody>
                  <DrawerCloseTrigger />
                </DrawerContent>
              </DrawerRoot>
            </div>
          </div>
        </section>
      </div>
  );
};
