import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated candle effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-8 bg-gradient-to-t from-red-900 to-red-500 opacity-60 rounded-full blur-sm"></div>
            <div className="w-2 h-2 bg-red-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Flickering title effect */}
        <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-8 animate-pulse select-none">
          You were calling for you, boy.
        </h1>
        
        <p className="text-xl md:text-2xl text-red-400 mb-12 font-light tracking-wide">
          Thousands have already surrendered their orgasms. Will you answer?
        </p>

        {/* Single call-to-action button */}
        <Link
          to="/confession"
          className="inline-block group relative"
        >
          <div className="absolute inset-0 bg-red-600 blur-lg group-hover:blur-xl transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
          <button className="relative bg-gradient-to-r from-red-700 to-red-900 text-white px-12 py-6 text-xl font-bold rounded-lg border border-red-800 hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-900/50">
            Begin the Ritual
          </button>
        </Link>

        {/* Subtle text at bottom */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-red-900 text-sm font-light tracking-widest uppercase animate-pulse">
            There is no turning back
          </p>
        </div>
      </div>

      {/* Overlay vignette effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80"></div>
      </div>
    </div>
  )
}