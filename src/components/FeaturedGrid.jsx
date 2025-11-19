import GameCard from './GameCard'

const games = [
  {
    title: 'Neon Drift',
    cover: 'https://images.unsplash.com/photo-1558980664-10ea180d2737?q=80&w=1974&auto=format&fit=crop',
    rating: '4.8',
    tags: ['Racing', 'Arcade']
  },
  {
    title: 'Starforge',
    cover: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1974&auto=format&fit=crop',
    rating: '4.9',
    tags: ['Sci‑Fi', 'Shooter']
  },
  {
    title: "Elder's Path",
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1974&auto=format&fit=crop',
    rating: '4.7',
    tags: ['RPG', 'Adventure']
  },
  {
    title: 'Pixel Clash',
    cover: 'https://images.unsplash.com/photo-1614388581175-99f2c8fdc5c1?q=80&w=1974&auto=format&fit=crop',
    rating: '4.6',
    tags: ['Arcade', 'Party']
  }
]

export default function FeaturedGrid() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured</h2>
            <p className="text-white/70 mt-1">Handpicked titles, optimized for instant play</p>
          </div>
          <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {games.map((g) => (
            <GameCard key={g.title} {...g} />
          ))}
        </div>
      </div>
    </section>
  )
}
