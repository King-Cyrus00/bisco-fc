import React from "react";
import GalleryCard from "../components/gallery-card";
import pic1 from "../assets/images/hero1.jpeg";
import pic2 from "../assets/images/hero2.jpeg";
import pic3 from "../assets/images/small.png";

const galleryImages = [
  { name: "Team Celebration", image: pic1 },
  { name: "Match Day Action", image: pic2 },
  { name: "Training Session", image: pic3 },
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Bisco FC Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((item, index) => (
          <GalleryCard key={index} image={item.image} name={item.name} />
        ))}
      </div>
    </section>
  );
}
