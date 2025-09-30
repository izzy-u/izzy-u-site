'use client'
import {X} from 'lucide-react'

export const PracticeModal = ({isModal}) => {
    return (
    <>
       <div className = "backdrop"></div>
       <div className = "dialog">
        <div className = "z-10000 bg-card p-8 rounded-lg shadow-xs border border-white max-w-xl">
   <div className = "p-3 rounded-full bg-primary/10 inline-block hover:bg-primary/40 transition-colors duration-1000">
    <X className = "h-6 w-6 text-primary transition-colors duration-300" onClick = {(isModal)}/> {" "}
    </div>
    
    <p className = "text-sm justify-center align-center courier-font"> Dec. 2024 - Present </p>
    <p className = "text-xl text-glow font-semibold justify-center align-center courier-font"> Webmaster <span className = "text-primary courier-font animate-pulse-subtle"> at Delta Kappa Alpha </span></p>
    <p className = "text-sm text-glow justify-center mb-6 align-center courier-font"> Web Designer & Film Editor </p>
    <p className = "text-sm justify-center align-center courier-font"> 
        Updating images, videos, and event information for the pre-professional cinematography society on a live website
for 100+ monthly visitors.
    </p>
    </div>
    </div>
    </>
    )
}
