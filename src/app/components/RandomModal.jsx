'use client'

import {useState} from 'react'; 
import { Maximize, X } from 'lucide-react';


const randomSongs = [
    {
        title: "my favorite recommendations!",
        artist: "you chose:",
        lyrics: ""
    },

    {
    title: "roses",
    artist: "the chainsmokers",
    lyrics: "deep in my bones i can feel u. take me back to a time only we knew."
  },
  {
    title: "a quick one before the eternal worm devours connecticut",
    artist: "have a nice life",
    lyrics: "sometimes i just- i just- i don't know.",
  },
  {
    title: "paint",
    artist: "the paper kites",
    lyrics: "where i am is where i wanted to be",
  },
  {
    title: "water",
    artist: "luke thompson",
    lyrics: "i walked a thousand miles in the wrong direction. what was it for?"
  },
  {
    title: "ocean eyes",
    artist: "billie eillish",
    lyrics: "careful creatures made friends with time",
  },
  {
    title: "white mustang",
    artist: "lana del rey",
    lyrics: "why i'm staying - wild mustang - white mustang",
  },
  {
    title: "i remember everything",
    artist: "zach bryan",
    lyrics: "cold shoulder at closing time, you were beggin' me to stay 'til the sun rose",
  },
  {
    title: "almost famous",
    artist: "g-easy",
    lyrics: "still, i ask myself: how long does famous last?"
  },
  {
    title: "4 morant",
    artist: "doja cat",
    lyrics: "i've been moving in backward directions during astral projection"
  },
  {
    title: "after dark",
    artist: "mr. kitty",
    lyrics: "i see u, u see me. how pleasant this feeling"
  },
  {
    title: "pistol",
    artist: "cigarettes after sex",
    lyrics: "give me the pistol, aim it high...'cause i really miss u"
  },
  {
    title: "upward over the mountain",
    artist: "iron & wine",
    lyrics: "sons are like birds, flying upwards over the mountain"
  },
  {
    title: "call it dreaming",
    artist: "iron & wine",
    lyrics: "for all the love you've left behind, you can have mine.",
  },
  {
    title: "stay high",
    artist: "tove lo",
    lyrics: "spend my days locked in a haze, tryna forget your face",
  },
  {
    title: "second chances",
    artist: "gregory alan isakov",
    lyrics: "if it weren't for second chances, we'd all be alone."
  },
  {
    title: "trailer we call home",
    artist: "whiskey meyers",
    lyrics: "i had dreams, what can i say? sometimes life gets in the way."
  },
  {
    title: "neon moon",
    artist: "brooks & dunn",
    lyrics: "i spend most every night beneath the light of a neon moon"
  },
  {
    title: "reaper",
    artist: "sia",
    lyrics: "you follow me like the darkest cloud"
  },
  {
    title: "would that i",
    artist: "hozier",
    lyrics: "i fell in love with the fire long ago"
  },
  {
    title: "something in the orange",
    artist: "zach bryan",
    lyrics: "i miss u in the mornings when i see the sun."
  }


]

export const RandomModal = ({isModal}) => {
    const [ randomIndex, setRandomIndex ] = useState(0); 
    const [ wasClicked, setWasClicked ] = useState(false);
    const maxRandom = randomSongs.length - 1; 

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function handleRandomIndex() {
        setRandomIndex(getRandomInt(1, maxRandom));
        if(wasClicked == false){
            setWasClicked(true);
        }
    }

    let randomSong = randomSongs[randomIndex]; 

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
    
    <p className = "text-sm justify-center align-center courier-font"> {randomSong.artist} </p>
    <p className = "text-xl text-glow font-semibold justify-center align-center courier-font"> {randomSong.title} <span className = "text-primary courier-font animate-pulse-subtle">  </span></p>
    <p className = "text-sm text-glow justify-center mb-6 align-center courier-font"> {randomSong.lyrics} </p>

  { wasClicked ? (<a href="#" className = "text-sm inline-block items-center justify-center text-primary text-glow text-semibold p-2 m-1 rounded-full border border-primary hover:bg-primary/10 hover:text-foreground hover:border-text-foreground focus:bg-primary/20 transition-colors duration-300 courier-font" onClick = {handleRandomIndex}> click me again! </a>) : <button className = "cosmic-button courier-font" onClick = {handleRandomIndex}> go! </button>}
    </div>
    </div>
    </>
    )
}