'use client'
import {LucideHeading2, Moon, ArrowRightCircleIcon} from 'lucide-react'
import { useState } from "react";
import { PracticeModal } from './PracticeModal';
import { DbModal } from './DbModal';

const devSkills = [
    {name: "C"},
    {name: "C++"},
    {name: "Java"},
    {name: "Javascript"},
    {name: "HTML/CSS"},
    {name: "Python"},
    {name: "React"},
    {name: "Next.js"},
    
]

const toolSkills = [
    {name: "VSCode"},
    {name: "XCode"},
    {name: "Adobe Premiere Pro"},
    {name: "Touch Designer"},
    {name: "DaVinci Resolve"}
]

const awards = [
    {id: 0, company: "NSLI-Y", name: "Study Abroad Scholarship Recipient", location: "Kaoshiung, Taiwan", year: "2024"},
    {id: 1, company: "Scholastic", name: "Gold Key in Art & Writing (Personal Memoir)", location: "Bay Area, CA", year: "2023"},
    {id: 2, company: "Brown University", name: "Documentary Production & Practice Workshop", location: "Providence, RI", year: "2023"},
    {id: 3, company: "ACM", name: "Diploma in Social Music - Piano Award", location: "Bay Area, CA", year: "2022"}
]



export const Skillz = () => {
    const [ isModalOneOpen, setModalOneOpen ] = useState(false);
    const [ isModalTwoOpen, setModalTwoOpen ] = useState(false);
    const [ index, setIndex ] = useState(0);
    const [ showMore, setShowMore ] = useState(false);
    const hasNext = index < awards.length - 1;

    function handleNextClick () {
        if(hasNext) {
            setIndex(index + 1); 
        } else {
            setIndex(0)
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let award = awards[index];


    return(

    <section id = "skills">
        <div className = "container mx-auto max-w-5xl justify-center align-center">
            <div className = "bg-card p-8 rounded-lg shadow-xs border border-white pointer-events-auto mt-2 mb-2">
                <h3 className = "text-2xl text-glow font-semibold mb-6 justify-center align-center courier-font"> <span className = "text-primary courier-font animate-pulse-subtle"> experience </span></h3>
            <div className = "grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[auto_auto]">
                <div className = "bg-card p-8 shadow-xs align-left pointer-events-auto max-w-sm"> 
                    <h2 className = "courier-font text-xl text-glow font-semibold"> Development Skills </h2>
                    
                    {devSkills.map((skill, key) => (
                    <div key = {key} className = "inline-block">
                    <p key = {key} className = "text-sm text-glow p-2 m-1 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 courier-font"> 
                            {skill.name}
                        </p>
                    </div>
                    ))}


                </div>


                <div className = "bg-card p-8 shadow-xs pointer-events-auto max-w-sm"> 
                    <h2 className = "courier-font text-xl text-glow font-semibold"> Tools </h2>
   
                    {toolSkills.map((skill, key) => (
                    <div key = {key} className = "inline-block">
                    <p key = {key} className = "text-glow text-sm p-2 m-1  rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 courier-font"> 
                            {skill.name}
                        </p>
                    </div>
                    ))}
                


                </div>



                <div className = "bg-card p-8 shadow-xs float-left pointer-events-auto max-w-sm courier-font">
                <ol className ="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className ="mb-10 ms-4">
        <div className ="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className ="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> Sept. 2024 - Present </time>
        <h3 className ="text-lg font-semibold text-primary"> Daily Bruin Intern @ UCLA </h3>
        <p className ="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> Video Production Team </p>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 border border-gray-200 rounded-lg hover:border-primary hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-primary/20 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" onClick={() => {setModalOneOpen(!isModalOneOpen);}}>Learn more 
    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  </button>
    { isModalOneOpen ? (<DbModal isModal = {() => setModalOneOpen(false)}/>) : null }

    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> Dec. 2024 - Present </time>
        <h3 className="text-lg font-semibold text-primary"> Webmaster @ Delta Kappa Alpha </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> Web Designer & Film Editor </p>
 <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 border border-gray-200 rounded-lg hover:border-primary hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-primary/20 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" onClick={() => {setModalTwoOpen(!isModalTwoOpen);}}>Learn more 
 
    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
    </button>
    { isModalTwoOpen ? (<PracticeModal isModal = {() => setModalTwoOpen(false)}/>) : null }
    </li>

</ol>
    </div>

    

        <div className = "bg-card p-8 shadow-xs float-right pointer-events-auto max-w-sm relative content-center"> 

            <h2 className = "courier-font text-xl text-glow font-semibold  mb-4 transition-opacity"> Achievements </h2>
            <h3 className = "text-xl text-primary text-glow font-semibold mb-2 courier-font"> {award.company} </h3>
            <h4 className = "text-lg courier-font animate-pulse-subtle"> {award.name} </h4>
            <p className = "text-glow mb-2 courier-font"> {award.location} </p>
            <p className = "text-glow text-primary"> {award.year} </p>
            
         
 <ArrowRightCircleIcon className = "w-7 h-7 text-primary mt-3 hover:scale-110 hover:text-primary-foreground justify-self-center" onClick = {handleNextClick}/>
            
        </div>
             


                
        
            
            </div>

    
        </div>
    </div>

        </section>

    )
}