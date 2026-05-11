import { useState, useEffect } from "react"

const apiKey = import.meta.env.VITE_NASA_KEY;

export function NasaViewer () {
    const [apod, setApod] = useState(null)

    useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
        let finalUrl = data.url;

        if (data.media_type === "video" && finalUrl.includes("youtube.com")) {
            finalUrl = finalUrl.replace("youtube.com", "youtube-nocookie.com");
        }

        setApod({
            ...data,
            url: finalUrl
        });
    })
    .catch((error) => console.error("Space error:", error));
    }, []);

    if (!apod) {
        return (
            <div className="flex flex-col justify-center items-center py-20 text-white italic">
            <p className="text-xl animate-pulse">
                Loading the Astronomical Picture of the day...
            </p>
            </div>
        )
    }

    return (

    <section id="viewer" className="rounded-xl max-w-10/12 lg:max-w-7/12 mx-auto p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 my-10">
        <h2 className="text-3xl font-bold text-white/90 mb-5 text-center">{apod.title}</h2>
        
        <div className="overflow-hidden shadow-2xl mb-6">
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
            className="w-full aspect-video"
            allowFullScreen
            />
        )} 
        </div>
        <p className="text-slate-200 sm:text-[1.2rem] text-balance">
        {apod.explanation}
        </p>
    </section>

    )
}