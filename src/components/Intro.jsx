import earthImg from '../assets/earth.jpg'


export function Intro () {
    return (
        <header className='relative h-dvh w-full text-white flex flex-col justify-center items-center'>
            <img src={earthImg} alt="Earth"
            className="absolute h-full object-cover opacity-80 z-0 
            mask-radial-at-center mask-radia-from-45% mask-radial-to-70% "
            />
            <div className='absolute inset-0 flex flex-col justify-center items-centerz-10'>
                <span className='flex flex-row justify-center items-end'>
                    <h1 className='text-5xl sm:text-6xl md:text-8xl mr-4'>Astronomical</h1>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl'>View</h1>
                </span>
                <h2 className='text-center text-2xl sm:text-3xl md:text-4xl mt-6'>A NASA API viewer</h2>
            </div>

            <a href="#viewer" className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-10 h-10 text-white/70"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </a>
        </header>
    )
}