import React from 'react'


import { cn } from "@/lib/utils";


export type CardProps = {
  backgroundImage: string; // Background image for the card
  projectName: string;     // Name of the project
  description: string;     // Brief description of the project
  languages: string[];     // List of languages/technologies used
  projectLink: string; 
};


export default function ProjectCard(props: CardProps){
  return(
    <CardContent>
      <a
        href={props.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
          <div
          className="relative group w-full h-64 rounded-lg overflow-hidden "
          style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent transition-opacity duration-1000 ease-in-out group-hover:opacity-0"></div>

          {/* Project Name */}
          <div className="absolute bottom-0 left-0 w-full   text-center py-4 transition-all duration-1000 ease-in-out group-hover:bottom-[75%] text-white group-hover:text-gray-400 z-10 ">
            <h2 className="text-lg font-bold uppercase">{props.projectName}</h2>
          </div>

          {/* Description and Languages */}
          <div className="absolute bottom-0 left-0 w-full h-[100%] grid place-items-center bg-[#151750] bg-opacity-90 text-white text-center p-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100">
            <div className='flex flex-col gap-3 flex-wrap'>
              <p className="text-sm mb-2 ">{props.description}</p>
              <div className="flex justify-center gap-2 text-xs flex-wrap">
                {props.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-[#292e86] rounded-full px-2 py-1"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </CardContent>
  )
}



export function CardContent(props:React.HTMLAttributes<HTMLDivElement>){
  return <div 
          {...props}
          className={cn(
            "flex w-full  flex-col justify-between gap-4 rounded-xl border p-1 shadow ",
            props.className
          )}
        />
}