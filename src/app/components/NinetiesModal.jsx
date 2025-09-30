'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const ninetiesSongs = [
    {
        title: "90s recommendations!",
        artist: "you chose:",
        lyrics: "",
    },
    
    {

        title: "jumper", 
        artist: "third eye blind",
        lyrics: "i wish u would step off of that ledge, my friend"

    },
    {

        title: "fields of gold",
        artist: "sting",
        lyrics: "you'll remember me, when the west wind moves, upon the fields of barley",

    },
    {
   
        title: "the man who sold the world", 
        artist: "nirvana (cover)",
        lyrics: "i must have died alone...a long, long time ago..."

    },
    {
        title: "something in the way",
        artist: "nirvana",
        lyrics: "the animals i've trapped have all become my pets",
    },
    {
        title: "breakfast at tiffany's",
        artist: "deep blue something",
        lyrics: "our lives have come between us...still, i just know u don't care"
    },
    {
        title: "don't look back in anger",
        artist: "oasis",
        lyrics: "slip inside the eye of ur mind..."
    },
    {
        title: "pink triangle",
        artist: "weezer",
        lyrics: "we were good as married in my mind, but married in my mind's no good"
    },
    {
        title: "re-feel-it",
        artist: "bettie serveert",
        lyrics: "funny how we run around"
    },
    {
        title: "the freshman",
        artist: "the verve pipe",
        lyrics: "when i was young, i knew everything"
    },
    {
        title: "champagne supernova",
        artist: "oasis",
        lyrics: "how many special people change? how many lives are livin' strange?"
    },
    {
        title: "iris",
        artist: "the goo goo dolls",
        lyrics: "you're the closest to heaven that i'll ever be."
    },
    {
        title: "with or without you",
        artist: "U2",
        lyrics: "through the storm, we reach the shore...you give it all, but i want more."
    },
    {
        title: "1979",
        artist: "the smashing pumpkins",
        lyrics: "i don't even care to shake these zipper blues"
    },
    {
        title: "back 2 good",
        artist: "matchbox twenty",
        lyrics: "there's no getting back to good."
    },
    {
        title: "100 years",
        artist: "five for fighting",
        lyrics: "when you've only got a hundred years to live."
    },
    {
        title: "high and dry",
        artist: "radiohead",
        lyrics: "you just sit there wishin' you could still make love"
    },
    {
        title: "real world",
        artist: "matchbox twenty",
        lyrics: "i wish the real world would just stop hassling me."
    },
    {
        title: "sick love",
        artist: "red hot chili peppers",
        lyrics: "sick love com,es to wash us away..."
    },
    {
        title: "runaway train",
        artist: "soul asylum",
        lyrics: "so many secrets that i couldn't keep."
    },
    {
        title: "collide",
        artist: "howie day",
        lyrics: "the dawn is breaking...a light shining through"
    }

]

export const NinetiesModal = ({isModal}) => {

    const [ ninetiesIndex, setNinetiesIndex ] = useState(0); 
    const [ wasClicked, setWasClicked ] = useState(false);
    const maxNineties = ninetiesSongs.length - 1; 

    function getRandomInt (min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    function handleNinetiesIndex() {
        setNinetiesIndex(getRandomInt(1, maxNineties));
        if(wasClicked == false){
            setWasClicked(true);
        }
    }

    let ninetiesSong = ninetiesSongs[ninetiesIndex]; 


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
    
    <p className = "text-sm justify-center align-center courier-font"> {ninetiesSong.artist} </p>
    <p className = "text-xl text-glow font-semibold justify-center align-center courier-font"> {ninetiesSong.title} <span className = "text-primary courier-font animate-pulse-subtle">  </span></p>
    <p className = "text-sm text-glow justify-center mb-6 align-center courier-font"> {ninetiesSong.lyrics} </p>

{ wasClicked ? (<a href="#" className = "text-sm items-center justify-center text-primary inline-block text-glow text-semibold p-2 m-1 rounded-full border border-primary hover:bg-primary/10 hover:text-foreground hover:border-text-foreground focus:bg-primary/20 transition-colors duration-300 courier-font" onClick = {handleNinetiesIndex}> click me again! </a>) : <button className = "cosmic-button courier-font" onClick = {handleNinetiesIndex}> go! </button>}
    </div>
    </div>
    </>
    )

}