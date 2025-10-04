'use client'
import {X} from 'lucide-react'

export const DbModal = ({isModal}) => {
    return (
    <>
       <div className = "backdrop"></div>
       <div className = "dialog">
        <div className = "bg-card p-8 rounded-lg shadow-xs border border-white max-w-xl">
   <div className = "p-3 rounded-full bg-primary/10 inline-block hover:bg-primary/40 transition-colors duration-1000">
    <X className = "h-6 w-6 text-primary transition-colors duration-300" onClick = {(isModal)}/> {" "}
    </div>
    
    <p className = "text-sm justify-center align-center courier-font"> Oct. 2024 - Present </p>
    <p className = "text-xl text-glow font-semibold justify-center align-center courier-font"> Daily Bruin Intern <span className = "text-primary courier-font animate-pulse-subtle"> </span></p>
    <p className = "text-sm text-glow justify-center mb-6 align-center courier-font"> Video Production Team </p>
    <p className = "text-sm justify-center align-center courier-font mb-5"> 
        Increased skills in video editing through Adobe Premiere Pro and DaVinci Resolve. Practicing live reporting,
videography, and active communication in a team setting.
    </p>
    <a href = "https://dailybruin.com/author/isabella-yoeu" className = "cosmic-button hover:bg-primary courier-font text-glow"> my work </a>
    </div>
    </div>
    </>
    )
}