import React from "react";

export default function GalleryCard({ image, name }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03]">
      {/* Image */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold tracking-wide drop-shadow-md uppercase">
          {name}
        </h3>
      </div>
    </div>
  );
}
