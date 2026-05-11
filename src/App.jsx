import { Intro } from "./components/Intro"
import { NasaViewer } from "./components/NasaViewer"
import { Footer } from "./components/Footer"


export function App () {
    return(

        <div className="min-h-screen bg-linear-to-b from-slate-950 via-black to-slate-900 w-full flex flex-col">

            <Intro/>

            <NasaViewer/>

            <Footer/>

        </div>
    )
}