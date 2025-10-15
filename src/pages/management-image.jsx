import React from 'react'
import dummy from '../assets/images/coach.png' // replace later with real player image

export default function PlayerImage() {
  return (
    <img
      src={dummy}
      alt="Player"
      loading="lazy"
      className="w-full h-full object-cover"
    />
  )
}
