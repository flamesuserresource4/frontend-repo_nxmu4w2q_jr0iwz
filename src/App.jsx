import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import { Home, Compass, Gamepad2, Grid2X2, User } from 'lucide-react'

function MobileDock() {
  const items = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', active: true },
    { icon: <Compass className="w-5 h-5" />, label: 'Explore' },
    { icon: <Gamepad2 className="w-6 h-6" />, label: 'Play' },
    { icon: <Grid2X2 className="w-5 h-5" />, label: 'Library' },
    { icon: <User className="w-5 h-5" />, label: 'Profile' }
  ]

  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%]">
      <div className="mx-auto flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-3 text-white shadow-[0px_10px_40px_rgba(0,0,0,0.35)]">
        {items.map((it) => (
          <button
            key={it.label}
            className={`flex flex-col items-center gap-1 px-2 py-1 text-[11px] ${
              it.active ? 'text-white' : 'text-white/70'
            }`}
          >
            {it.icon}
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

function Sections() {
  return (
    <>
      {/* Categories */}
      <section className="relative -mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {['Trending', 'New', 'Arcade', 'RPG', 'Racing', 'Shooter', 'Strategy', 'Indie'].map((c) => (
              <button
                key={c}
                className="snap-start whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 transition"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <FeaturedGrid />

      {/* Collections */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Just for you</h2>
              <p className="text-white/70 mt-1">Personalized picks based on your play style</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">
              Refresh
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06]">
                <div className="p-6">
                  <h3 className="text-white font-semibold">Collection {i}</h3>
                  <p className="text-white/70 text-sm mt-1">Hand‑curated titles around a theme</p>
                </div>
                <div className="grid grid-cols-3 gap-1 p-1">
                  {[...Array(6)].map((_, idx) => (
                    <div key={idx} className="aspect-[4/3] bg-white/5" />
                  ))}
                </div>
                <div className="p-4">
                  <button className="w-full rounded-xl bg-white text-slate-900 font-semibold py-2.5 hover:opacity-90 transition">
                    View collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <Navbar />
      <Hero />
      <Sections />
      <MobileDock />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} Arcadia. Play beautifully.</p>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <a className="hover:text-white" href="#">Terms</a>
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="/test">System status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
