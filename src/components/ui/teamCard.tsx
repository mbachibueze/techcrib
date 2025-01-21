'use client'


import React from 'react'

import { cn } from "@/lib/utils";

export type CardProps = {
  backgroundImage: string;
  name: string;
  about: string;
  stack: string;
}

const TeamCard = (props: CardProps) => {
  return (
    <CardContent>
      <div className=' relative group w-full h-64 rounded-lg overflow-hidden' style={{backgroundImage: `url(${props.backgroundImage})`, backgroundSize:  'cover', backgroundPosition: 'center'}}>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black to-transparent transition-opacity duration-1000 ease-in-out group-hover:opacity-0"></div>

        {/* Member Name */}
        <div className="absolute bottom-0 left-0 w-full   text-center py-4 transition-all duration-1000 ease-in-out group-hover:bottom-[75%] text-white group-hover:text-gray-400 z-10 ">
              <h2 className="text-2xl font-bold uppercase">{props.name}</h2>
            </div>


        {/* About/ stack */}
        <div className='absolute bottom-0 left-0 w-full h-[100%] grid place-items-center bg-[#151750] bg-opacity-90 text-center p-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100 text-white'>
          <div className='flex flex-col gap-3 flex-wrap text-center justify-center items-center'>
            <p className='text-base mb-2'>{props.about}</p>
            <p className='text-sm mb-2 text-center rounded-full px-2 py-1 bg-[#292e86] w-fit'>{props.stack}</p>
          </div>

        </div>

      </div>

      


    </CardContent>
  )
}

export default TeamCard


export function CardContent(props:React.HTMLAttributes<HTMLDivElement>){
  return <div
          {...props}
          className={cn("flex w-full  flex-col justify-between gap-4 rounded-xl border p-1 shadow cursor-pointer transition-all duration-1000 ease-in-out ")}
        />
}