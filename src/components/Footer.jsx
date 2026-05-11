export function Footer () {
    return(
    <footer className="w-full py-8 bg-slate-950/80 backdrop-blur-md text-slate-400 text-sm border-t border-white/10">
        <div className="flex flex-col items-center gap-4"> 
        <p>Data provided by NASA API</p>

        <div className="flex gap-6">
        <a href="https://github.com/ALMv1" className="hover:text-yellow-200 transition-colors">GitHub</a>
        </div>

        <p className="text-xs opacity-50">© 2026 Made by ALMv1</p>
        </div>
    </footer>
    )
}