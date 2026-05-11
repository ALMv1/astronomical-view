export function Footer () {
    return(
    <footer className="w-full py-8 bg-slate-950/70 backdrop-blur-md text-slate-400 text-sm border-t border-white/10">
        <div className="flex flex-col items-center gap-4"> 
        <p>Data provided by NASA API</p>

        <div className="flex gap-6">
        <a href="https://github.com/ALMv1" className="hover:text-blue-500 transition-colors">GitHub</a>
        </div>

        <p className="text-xs opacity-60">© 2026 Made by ALMv1</p>
        </div>
    </footer>
    )
}