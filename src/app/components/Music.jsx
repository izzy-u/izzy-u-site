"use client"
import {useState} from "react";
import { RapModal } from "./RapModal";
import { NinetiesModal } from "./NinetiesModal";
import { RandomModal } from "./RandomModal";
import { ArrowLeft } from "lucide-react";

export const Music = () => {
 const [ isModalOneOpen, setModalOneOpen ] = useState(false);
  const [ isModalTwoOpen, setModalTwoOpen ] = useState(false);  
  const [ isModalThreeOpen, setModalThreeOpen ] = useState(false); 

  return (

   <div className = "container mx-auto max-w-5xl justify-center align-center pointer-events-auto">
    <div className = "bg-card p-8 rounded-lg shadow-xs border border-gray-200">
                   <div className = "flex items-start space-x-4">
                                <div className = "p-3 rounded-full bg-primary/10 hover:bg-primary/40">
                                <a href = "/izzy-u-site"> 
                                    <ArrowLeft className = "h-6 w-6 text-primary" /> {" "}
                                </a>
                                </div>
                    </div>
         
        <h1 className = "text-glow font-semibold mb-3 justify-center align-center courier-font text-primary animate-pulse-subtle"> WHAT'S YOUR MOOD? </h1>
        <h3 className = "text-glow font-semibold mb-3 justify-center align-center courier-font text-bg-primary/10 animate-fade-in-delay-1"> i love music...let me <span className = "text-glow text-primary"> recommend </span> you a song! </h3>

     <a href="#" className="flex flex-col text-foreground/80 items-center justify-center hover:text-primary transition-colors duration-300 courier-font mb-3">
               <picture>
                    <img src= '/izzy-u-site/music-notes-green.png'
                        className = "w-16 h-16 hover:scale-110 dark:hidden"
                        alt = "music note icon"
                        />
                    <img src = '/izzy-u-site/music-notes.png' className = "hidden dark:block w-16 h-16 hover:scale-110" alt = "music note icon" /> 
     
                </picture>
                    click on one of the categories below!
    </a>
    <div> 
     <button className = "cosmic-button m-3 courier-font" onClick={() => {setModalOneOpen(!isModalOneOpen);}}> HIP-HOP </button>
     { isModalOneOpen ? (<RapModal isModal = {() => setModalOneOpen(false)}/>) : null }

      <button className = "cosmic-button m-3 courier-font" onClick = {() => {setModalTwoOpen(!isModalTwoOpen); }}> 90s </button>
      { isModalTwoOpen ? (<NinetiesModal isModal = {() => setModalTwoOpen(false)}/>) : null}

      <button className = "cosmic-button m-3 courier-font" onClick = {() => {setModalThreeOpen(!isModalThreeOpen); }}> FAVORITES </button>
      { isModalThreeOpen ? (<RandomModal isModal = {() => setModalThreeOpen(false)}/>) : null}
 </div>
  
  </div>
  </div>
  )

}