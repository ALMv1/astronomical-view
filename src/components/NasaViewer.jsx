import { useState, useEffect } from "react"

export function NasaViewer () {
    const [apod, setApod] = useState(null)

    useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=lMnTBIYoTeGl5lY2ny2T9EH48Tbv8zBF7a3UCwk1")
    .then((response) => response.json())
    .then((data) => { setApod(data); })
    .catch((error) => console.error("Space error:", error));
    }, []); // <--- Los corchetes vacíos son VITALES: Solo se ejecuta 1 vez.

    if (!apod) {
        return (
            // Le damos altura, centramos el texto y lo ponemos en blanco
            <div className="flex flex-col justify-center items-center py-20 text-white italic">
            <p className="text-xl animate-pulse">
                Loading the Astronomical Picture of the day...
            </p>
            </div>
        )
    }

    return (

    <section id="viewer" className=" max-w-7/12 mx-auto p-6 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 my-10">
        <h2 className="text-3xl font-bold text-slate-400 mb-5 text-center">{apod.title}</h2>
        
        <div className="overflow-hidden rounded-xl shadow-2xl mb-6">
        {apod.media_type === 'image' ? (
            <img 
            src={apod.url} 
            alt={apod.title} 
            className="w-full h-auto object-cover" 
            />
        ) : (
            <iframe 
            src={apod.url} 
            title={apod.title} 
            className="w-full aspect-video rounded-xl"
            allowFullScreen
            />
        )} 
        </div>
        <p className="text-slate-300 sm:text-[1.2rem] text-balance">
        {apod.explanation}
        </p>
    </section>

    )
}