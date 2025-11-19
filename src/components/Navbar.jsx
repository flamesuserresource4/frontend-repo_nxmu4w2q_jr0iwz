import { Menu, Search, User, Gamepad2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.6)]">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-white text-lg font-semibold tracking-tight">Arcadia</span>
          </div>

          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 w-[420px]">
            <Search className="w-4 h-4 text-white/60" />
            <input
              type="text"
              placeholder="Search games, genres, studios..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-white/50 w-full"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition">
              Explore
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Sign in</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 border border-white/10">
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
