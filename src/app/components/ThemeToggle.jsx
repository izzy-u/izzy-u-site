'use client'

import { Moon, Sun, SquareTerminal, SquareTerminalIcon } from "lucide-react"; 
import { useEffect, useInsertionEffect, useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme"); 
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
        else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }


    }, [])


    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); /* changes in local storage but we still need userEffect */
            setIsDarkMode(false); 
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return (
    <button onClick = {toggleTheme}
    className = "fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-colors duration-300 focus:outline-hidden z-51" 
    /*

    className = {cn("fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-colors duration-300 focus:outline-hidden" )}
        */
    >
        
    
    {isDarkMode ? (
    <SquareTerminal className = "h-6 w-6 text-indigo-700" /> 
    ) : ( 
    <Moon className = "h-6 w-6 text-green-500" /> ) } 
    
    </button>
    );
    
};