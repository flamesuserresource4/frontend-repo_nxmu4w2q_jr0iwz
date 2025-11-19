import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 bg-white/10 border border-white/10 px-3 py-1 rounded-full">
              Next-gen gaming platform
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight text-white">
              Play beautifully.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400"> Anywhere. Anytime. </span>
            </h1>
            <p className="mt-6 text-white/80 text-lg">
              Discover console-quality titles, cloud saves, and instant play. Designed like a premium mobile app and perfected for every screen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition shadow-lg">
                Start playing
              </button>
              <button className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                Browse catalog
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950"></div>
    </section>
  )
}
