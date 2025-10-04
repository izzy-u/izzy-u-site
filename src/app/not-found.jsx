import CablesPatch from "./components/cables_react/src/CablesPatch"


export default function Custom404() {
  return (
    <>
     <div className = "relative min-h-screen">
        <div className = "fixed inset-0 -z-10"> 
     <CablesPatch patchDir={"/izzy-u-site/notfound-patch/"} canvasId={"othercanvas"} patchOptions={{ "glCanvasResizeToWindow": true }}/>
     </div>
      <div className = "container mx-auto max-w-5xl justify-center align-center pointer-events-auto">
    <div className = "bg-card p-8 rounded-lg shadow-xs border border-gray-200">
        <h1 className = "text-glow font-semibold mb-3 justify-center align-center courier-font text-blue-400 animate-pulse-subtle"> whoops!</h1>
        <h3 className = "text-2xl text-glow font-semibold mt-2 align-center courier-font text-bg-primary mb-5"> i think you're lost. </h3>
        <a href="/" className = "text-sm text-glow p-2 m-1 rounded-full border border-blue-400 text-blue-400 hover:bg-primary/10 hover:text-purple-300 hover:border-purple-300 transition-colors duration-300 courier-font"> let's go home. </a>

        </div>
        </div>
    </div>
    </>
  )
}