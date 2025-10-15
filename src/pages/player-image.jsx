import React from 'react';
import defaultPlayer from '../assets/images/big.png'; // fallback image

export default function PlayerImage({ src, alt }) {
  return (
    <img
      src={src || defaultPlayer}
      alt={alt || 'Player'}
      loading="lazy"
      className="w-full h-full object-cover"
    />
  );
}
