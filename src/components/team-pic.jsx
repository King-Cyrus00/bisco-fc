import React, { Suspense } from 'react'

// Lazy load the player image component
const PlayerImage = React.lazy(() => import('../pages/player-image'))

export default function PlayerCard({ number, name, position, image }) {
  return (
    <div className="relative group w-72 sm:w-80 md:w-96 rounded-xl overflow-hidden bg-gradient-to-b from-[#0D47A1] via-[#E30613] to-[#ffffff] shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      
      {/* Player Image */}
      <div className="relative w-full h-80 overflow-hidden">
        <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
          <PlayerImage src={image} alt={name} />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
      </div>

      {/* Player Info */}
      <div className="absolute bottom-0 left-0 w-full text-center py-5">
        <h2 className="text-6xl font-extrabold text-white drop-shadow-md leading-none">
          {number}
        </h2>
        <h3 className="text-2xl font-bold text-white mt-2 tracking-wide uppercase">
          {name}
        </h3>
        <p className="text-sm text-white uppercase mt-1">{position}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
