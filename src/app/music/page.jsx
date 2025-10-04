'use client'

import { Music } from '../components/Music';
import { ThemeToggle } from '../components/ThemeToggle';
import CablesPatch from '../components/cables_react/src/CablesPatch';





export default function Home() {

  return  <div className = "relative min-h-screen">
        <div className = "fixed inset-0 -z-10"> 
                 <CablesPatch patchDir={"/izzy-u-site/music-patch/"} canvasId={"othercanvas"} patchOptions={{ "glCanvasResizeToWindow": true }}/>
        </div>

        <main>

          <ThemeToggle/>
          <Music/>
        </main>
   

   
  </div>
  
  

}
