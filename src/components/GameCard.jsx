import { Star } from 'lucide-react'

export default function GameCard({ title, cover, rating, tags = [] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={cover} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold tracking-tight">{title}</h3>
          <div className="flex items-center gap-1 text-amber-300">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-white/80 bg-white/10 border border-white/10 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <button className="mt-4 w-full rounded-xl bg-white text-slate-900 font-semibold py-2.5 hover:opacity-90 transition">
          Play
        </button>
      </div>
    </div>
  )
}
