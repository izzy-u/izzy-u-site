'use client'
import { Sprout, Menu, NotebookPen } from 'lucide-react'
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const myCourseWork = [
    {code: "COMSCI31", name: "Intro to Computer Science I"},
    {code: "COMSCI32", name: "Intro to Computer Science II"},
    {code: "COMSCI33", name: "Intro to Computer Organization"},
    {code: "COMSCI35L", name: "Software Construction"},
    {code: "MATH 32", name: "Multivariable Differential Calculus"},
    {code: "MATH 33A", name: "Linear Algebra and Applications"},
    {code: "MATH 33B", name: "Differential Equations"},
    {code: "LING1/LING20", name: "Linguistic Analysis"},
//empty to give us some extra padding at the beginning
]

const highSchoolWork = [
    {name: "AP Computer Science A (Java)"},
    {name: "AP Calculus BC"},
    {name: "AP Chemistry"},
    {name: "AP English Literature and Composition"},
    {name: "AP Statistics"},
    {name: "AP Microeconomics and Macroeconomics"},
    {name: "AP World History"},
    {name: "AP Psychology"},
]


export const Education = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll); 
    
    }, []);

    return(
        <section id = "education">
            <div className = "container mx-auto max-w-5xl justify-center align-center">
                <div className = "bg-card p-8 rounded-lg shadow-xs border border-white">
                    <h3 className = "text-2xl text-glow font-semibold mb-6 justify-center align-center courier-font"> <span className = "text-primary courier-font animate-pulse-subtle"> education </span></h3>
                        <div className = "space-y-6 justify-center"> 
                            <div className = "flex items-start space-x-4">
                                <div className = "p-3 rounded-full bg-primary/10">
                                    <Sprout className = "h-6 w-6 text-primary" /> {" "}
                                </div>
                            <div> 
                            <details className = "animate-fade-in">
                                <summary className = "pointer-events-auto courier-font text-glow"> Linguistics and Computer Science Major <span className = "text-primary text-glow animate-pulse-subtle"> @ UCLA </span></summary>
                            <div className = "animate-fade-in">
                            {myCourseWork.map((item, key) => (
                                <h4 key = {key} className = "justify-self-start courier-font text-glow"> {item.code}: <span className = "courier-font text-primary"> {item.name} </span></h4> 
                            ))}
                            </div>
                            </details>
                            
                            </div>
                        
                            </div>

                            <div className = "flex items-start space-x-4">
                                <div className = "p-3 rounded-full bg-primary/10">
                                    <NotebookPen className = "h-6 w-6 text-primary" /> {" "}
                                </div>
                            <div>
                                <details className = "justify-self-start animate-fade-in">
                                <summary className = "pointer-events-auto courier-font text-glow"> Milpitas <span className = "text-primary text-glow animate-pulse-subtle"> High School </span></summary>
                            
                                <div className = "animate-fade-in">
                                {highSchoolWork.map((item, key) => (
                                    <h4 key = {key} className = "justify-self-start courier-font text-glow"> {item.name} </h4> 
                                ))}
                                </div>
                                </details>
                            </div>
    
                            </div>

                        </div>
            </div>
            </div>


        </section>
    )
}