'use client'
import {X} from 'lucide-react'
import {useState} from 'react'


const rapSongs = [
    {
        title: "hip-hop recommendations!",
        artist: "you chose:",
        lyrics: "",
    },
    {

        title: "american wedding", 
        artist: "frank ocean",
        lyrics: "you can have my mustang, it's all i got in my name.",

    },
    {

        title: "nikes", 
        artist: "frank ocean",
        lyrics: "they're lookin' for a check. tell them it ain't likely.",

    },
    {
   
        title: "pyramids", 
        artist: "frank ocean",
        lyrics: "she's workin' at the pyramids tonight",

    },
    {
      title: "CAN U BE",
      artist: "Ye & Travis Scott",
      lyrics: "met 2 girls at Uniqlo (go both ways, they unisex)", 

    },
    {
        title: "coming home",
        artist: "Pusha T",
        lyrics: "when love is strong, you can't do anything...things go wrong",
    },
    {
        title: "love lost",
        artist: "mac miller",
        lyrics: "how the hell did you make me fall in love with you?"
    },
    {
        title: "money trees",
        artist: "kendrick lamar",
        lyrics: "money trees is the perfect place for shade"
    },
    {
        title: "white ferrari",
        artist: "frank ocean",
        lyrics: "watch the clouds float, white ferrari...had a good time"
    },
    {
        title: "runaway",
        artist: "kanye west",
        lyrics: "baby, i got a plan. run away as fast as u can."
    },
    {
        title: "small worlds",
        artist: "mac miller",
        lyrics: "the world is so small ('til it ain't)"
    },
    {
        title: "everyday",
        artist: "a$ap rocky",
        lyrics: "waiting here to find the sign that i can understand"
    },
    {
        title: "highjack",
        artist: "a$ap rocky",
        lyrics: "talk to God before i go to sleep, he hit me right back"

    },
    {
        title: "lock on me", 
        artist: "metro boomin'",
        lyrics: "had to switch the form, got a new technique"

    },
    {
        title: "congratulations",
        artist: "post malone",
        lyrics: "i dreamed it all ever since i was young"
    },
    {
        title: "pursuit of happiness",
        artist: "kid cudi",
        lyrics: "everything that shine ain't always gonna be gold"
    },
    {
        title: "cocoa butter kisses",
        artist: "chance the rapper",
        lyrics: "i miss my cocoa butter kisses"
    },
    {
        title: "mr. rager",
        artist: "kid cudi",
        lyrics: "tell me where you're going, tell us where you're headed"
    },
    {
        title: "the spins",
        artist: "mac miller",
        lyrics: "wanna get a mansion, a jacuzzi, a theater to watch my movies"
    },
    {
        title: "PRIDE",
        artist: "kendrick lamar",
        lyrics: "a perfect world is never perfect, only filled with lies"
    },
    {
        title: "LOVE",
        artist: "kendrick lamar",
        lyrics: "if i minimized my net worth, would you still love me?"
    }

]

export const RapModal = ({isModal}) => {

    const [ rapIndex, setRapIndex ] = useState(0); 
    const [ wasClicked, setWasClicked ] = useState(false);
    const rapMax = rapSongs.length - 1; 

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    function handleRandomIndex() {
        setRapIndex(getRandomInt(1, rapMax));
        if(wasClicked == false) {
            setWasClicked(true);
        }
    }

    let rapSong = rapSongs[rapIndex];


    return (
    <>
       <div className = "backdrop"></div>
       <div className = "dialog">
        <div className = "bg-card p-8 rounded-lg shadow-xs border border-white max-w-xl">
            <div className = "flex items-start space-x-4">
   <div className = "p-3 rounded-full bg-primary/10 inline-block hover:bg-primary/20 focus:bg-primary/40 transition-colors duration-1000 justify-self-end">
                   
    <X className = "h-6 w-6 text-primary transition-colors duration-300 justify-self-end" onClick = {(isModal)}/> {" "}
    </div>
    </div>
    
    <p className = "text-sm justify-center align-center courier-font"> {rapSong.artist} </p>
    <p className = "text-xl text-glow font-semibold justify-center align-center courier-font"> {rapSong.title} <span className = "text-primary courier-font animate-pulse-subtle">  </span></p>
    <p className = "text-sm text-glow justify-center mb-6 align-center courier-font"> {rapSong.lyrics} </p>
    
    { wasClicked ? (<a href="#" className = "text-sm inline-block items-center justify-center text-glow text-semibold p-2 m-1 rounded-full border border-primary hover:bg-primary/10 hover:text-foreground hover:border-text-foreground focus:bg-primary/20 transition-colors duration-300 courier-font" onClick = {handleRandomIndex}> click me again! </a>) : <button className = "cosmic-button courier-font" onClick = {handleRandomIndex}> go! </button>}
 
    </div>
    </div>
    </>
    )
}