'use client'
import {Mail, Send} from "lucide-react";
import { useEffect, useState, useRef, Fragment } from "react";
import { AnimatedText } from "./TypingIntro";

const navItems = [
    {name: "ABOUT", href: "#about", img: "${process.env.NEXT_PUBLIC_BASE_PATH}/coin-icon-pixel.png", darkimg: "/coin-icon-pixel-green.png", alt: "about me icon"},
    {name: "EDU", href: "#education", img: "${process.env.NEXT_PUBLIC_BASE_PATH}/book-icon-pixel.png", darkimg: "/book-icon-pixel-green.png", alt: "book icon"},
    {name: "WORK", href: "#skills", img: "${process.env.NEXT_PUBLIC_BASE_PATH}/cat-icon-pixel.png", darkimg: "/cat-icon-pixel-green.png", alt: "work icon"},
    {name: "CONTACT", href: "#contact", img: "${process.env.NEXT_PUBLIC_BASE_PATH}/mail-icon-pixel.png", darkimg: "/mail-icon-pixel-green.png", alt: "mail icon"},
    {name: "MUSIC", href: "/music", img: "${process.env.NEXT_PUBLIC_BASE_PATH}/headphones-icon-pixel.png", darkimg: "/headphones-icon-pixel-green.png", alt: "music page icon"}

]

export const HomeBox = () => {
   
return( 
 
    
  <div className = "container mx-auto max-w-5xl justify-center align-center">  

    <div className = "bg-card p-8 rounded-lg shadow-xs border border-gray-200">
        <h3 className = "text-2xl text-glow font-semibold mb-3 justify-center align-center courier-font text-primary"> hi! i'm <span className = "courier-font text-primary"> isabella yoeu </span></h3>
        
        <div className = "typingspan"> <AnimatedText/></div>

        <div className = "mb-4">

        <p className = "courier-font text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-1"> 
            Linguistics & Computer Science Major at UCLA.
        </p>

        </div>

        <hr className = "mb-4"/>

            <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pointer-events-auto justify-center items-center">
            {navItems.map((item, key) => ( 
                <Fragment key = {key}>
                <a key = {key} href={item.href} className="flex flex-col text-foreground/80 items-center justify-center hover:text-primary transition-colors duration-300 courier-font">
                <picture>
                    <img src= {item.darkimg}
                        className = "w-16 h-16 hover:scale-110 dark:hidden"
                        />
                    <img src = {item.img} className = "hidden dark:block w-16 h-16 hover:scale-110" alt = {item.alt} /> 
                    {item.name}
                </picture>
                    

                </a>
                </Fragment>
            ))}

        </div>
   </div>
   </div>
    )
    
}