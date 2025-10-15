import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Button from "../components/button";
import { getFeaturedImages } from "../assets/data/gallery";

const GallerySection = () => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({});

  // Fetch featured images
  const galleryImages = getFeaturedImages();

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            gap: 2rem;
          }
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          background: #f3f4f6;
          aspect-ratio: 4/3;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 1rem;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .skeleton-loader {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Mobile Enhancements */
        @media (max-width: 640px) {
          .gallery-overlay {
            padding: 0.75rem;
          }

          .gallery-body {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section
        className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-white to-red-50"
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
            <h3
              className="gallery-body text-sm font-bold tracking-widest mb-3 uppercase"
              style={{ color: "#E30613" }}
            >
              Gallery
            </h3>

            <h2 className="gallery-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Capturing Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #2563EB, #E30613)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Journey
              </span>
            </h2>

            <p className="gallery-body text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Relive our memorable victories, milestones, and the unwavering
              spirit that defines Bisco FC.
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
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="gallery-item"
              >
                {!loadedImages[image.id] && <div className="skeleton-loader" />}
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
                <div className="gallery-overlay">
                  <p className="gallery-body text-white font-medium text-sm sm:text-base">
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
            className="text-center mt-10 sm:mt-12"
          >
            <Button
              onClick={() => navigate("/gallery")}
              className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Full Gallery
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
