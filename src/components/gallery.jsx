import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Button from "../components/button";
import { getFeaturedImages } from "../assets/data/gallery";

const GallerySection = () => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({});
  
  // Get only featured images for the homepage
  const galleryImages = getFeaturedImages();

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Roboto:wght@400;500;600&display=swap');
        
        .gallery-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
        }
        
        .gallery-body {
          font-family: 'Roboto', sans-serif;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          background: #F3F4F6;
          aspect-ratio: 4/3;
        }
        
        .gallery-item:first-child {
          grid-row: span 2;
          aspect-ratio: 2/3;
        }
        
        @media (min-width: 768px) {
          .gallery-item:first-child {
            grid-column: span 1;
            grid-row: span 2;
          }
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-item:hover img {
          transform: scale(1.08);
        }
        
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .skeleton-loader {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #F3F4F6 25%, #E5E7EB 50%, #F3F4F6 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <section
        className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-red-50"
        id="gallery"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gallery-body text-sm font-bold tracking-widest mb-3 uppercase"
              style={{ color: "#EF4444" }}
            >
              GALLERY
            </motion.h3>

            <h2 className="gallery-heading text-4xl md:text-5xl text-gray-900 mb-4">
              Capturing Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #60A5FA, #EF4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Journey
              </span>
            </h2>

            <p className="gallery-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Relive the memorable moments, victories, and the spirit that defines
              Bisco FC
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="gallery-grid"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="gallery-item"
              >
                {/* Skeleton Loader */}
                {!loadedImages[image.id] && (
                  <div className="skeleton-loader" />
                )}

                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                  style={{
                    opacity: loadedImages[image.id] ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />

                {/* Hover Overlay */}
                <div className="gallery-overlay">
                  <p className="gallery-body text-white font-medium text-sm">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View Full Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button onClick={() => navigate("/gallery")}>
              View Full Gallery
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;