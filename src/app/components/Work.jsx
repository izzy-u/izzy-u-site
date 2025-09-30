'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowRightCircleIcon, PackageX } from 'lucide-react'

const filmList = [
    {title: 'Chungking Express', director: 'Wong Kar-Wai', opinion: 'the neon lights of hong kong transport us to a world of heartbreak and blurry beauty'},
    {title: 'Eternal Sunshine of the Spotless Mind', director: 'Michel Gondry', opinion: 'the world forgetting, by the world forgot'},
    {title: 'Dune', director: 'Denis Villeneuve', opinion: 'her blue on blue eyes, constructing the prophets'},
    {title: 'Arrival', director: 'Denis Villeneuve', opinion: 'if you could see your whole life, from start to finish, would you change things?'}
]

const projects = [
    {
        id: 1, 
        title: "american wedding", 
        description: "after school she ran to me, jumped in my 5.0",
        image: "/app2.png",
        tags: ["React", "TailwindCSS", "VSCode"], 

    },
    {
        id: 2, 
        title: "nikes", 
        description: "these girls want nikes, lookin' for a check",
        image: "/globe.svg",
        tags: ["React", "TailwindCSS", "VSCode"], 

    },
    {
        id: 3, 
        title: "pyramids", 
        description: "she's workin' at the pyramids tonight",
        image: "/next.svg",
        tags: ["React", "TailwindCSS", "VSCode"], 

    },
]

export const Work = () => {
    const [index, setIndex ] = useState(0);
    const [projectIndex, setProjectIndex] = useState(0);
    const [ showOpinion, setOpinion ] = useState(false); 
    const hasNext = index < filmList.length - 1; 
    const hasNextProject = projectIndex < projects.length - 1;

    function handleNextClick () {
        if (hasNext) {
            setIndex(index + 1); 
        } else {
            setIndex(0);
        }
    }

    function handleNextProject () {
        if (hasNextProject) {
            setProjectIndex(projectIndex + 1); 
        } else {
            setProjectIndex(0);
        }
    }

        function handleMoreClick() {
            setOpinion(!showOpinion); 
        }

        let film = filmList[index]; 
        let project = projects[projectIndex];

        return (
<section id = "work">

  <div className = "container mx-auto max-w-5xl justify-center align-center z-48 pointer-events-auto">
    <div className = "bg-card p-8 rounded-lg shadow-xs border border-gray-200">
        <h3 className = "text-2xl text-glow font-semibold mb-3 justify-center align-center courier-font"> my <span className = "courier-font text-primary"> work </span></h3>
            
            <div className = "bg-card gap-8">
                <div className = "bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                    <div className = "h-48 overflow-hidden"> 
                            <Image
                                src = {project.image}
                                width = {100}
                                height = {100}
                                alt = {project.title}
                                className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            /> 
                        </div>                     

                        
                        <div className = "p-6">
                            <div className = "flex flex-wrap gap-2 mb-4"> 
                             {project.tags.map((tag, key) => (
                                <span key = {key} className = "px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        </div>

                        <h3 className = "text-xl font-semibold mb-2"> {project.title} </h3> 
                        <p className = "text-muted-foreground text-sm mb-4"> {project.description} </p>
                   
                   <button className = "carousel__navigation-button" onClick = {handleNextProject}> temp button next</button>
                    </div>
                
                
            </div>
        
    <button className = "cosmic-button" onClick = {handleNextClick}> next </button>
            <h2> </h2>
        </div>
    </div>

</section>

        )
}