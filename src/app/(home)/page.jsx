import { ThemeToggle } from "../components/ThemeToggle"
import { HomeBox } from "../components/HomeBox"
import { AboutMe } from "../components/AboutMe"
import { Education } from "../components/Education"
import { Skillz } from "../components/Skillz"
import { Work } from "../components/Work"
import { Contact } from "../components/Contact"
import CablesPatch from "../components/cables_react/src/CablesPatch"

export default function Home() {


  return <div className = "relative min-h-screen"> 
  <div className = "fixed inset-0 -z-10"> 

             <CablesPatch patchDir={"/izzy-u-site/home-patch/"} canvasId={"maincanvas"} patchOptions={{ "glCanvasResizeToWindow": true }}/>
    </div>

  
    
        <main>
            <ThemeToggle/>
            <HomeBox/>
            <AboutMe/>
            <Education/>
            <Skillz/>
            <Contact/>

         
        </main>
    </div>
  
}