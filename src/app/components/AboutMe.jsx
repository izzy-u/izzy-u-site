'use client'
import {Moon} from 'lucide-react'

export const AboutMe = () => {
    return(

        <section id = "about">
  
            <div className = "container mx-auto max-w-5xl justify-center align-center">
          
                <div className = "bg-card p-8 rounded-lg shadow-xs border border-white max-w-xl">
                    <h3 className = "text-2xl text-glow font-semibold mb-6 justify-center align-center courier-font"> who am <span className = "text-primary courier-font animate-pulse-subtle"> i? </span></h3>
                
            <div className = "space-y-6 justify-center">
                        <div className = "flex items-start space-x-4">
                            <div className = "p-3 rounded-full bg-primary/10">
                            <Moon className = "h-6 w-6 text-primary" /> {" "}
                            </div>

                            <div> 
                                <h4 className = "courier-font text-glow"> my name is<span className = "text-primary"> isabella yoeu</span>! i'm a 2nd year ling/CS student at UCLA pursuing minors in mathematics and film. i grew up in the bay area and have interest in all things CS + cinema. i enjoy rating music and reading classics in my free time :D   </h4> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </section>


    )
}
