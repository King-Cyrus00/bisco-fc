import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router'
import Button from '../components/button'
import { FaFacebookF, FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import logo from '../assets/images/bisco-logo.png'
import hero1 from '../assets/images/hero1.jpeg'
import hero2 from '../assets/images/hero2.jpeg'
import hero3 from '../assets/images/hero3.jpeg'

const heroConfig = {
  slides: [
    { src: hero1, alt: 'Fans cheering at the stadium' },
    { src: hero2, alt: 'Bisco FC team celebrating victory' },
    { src: hero3, alt: 'Players training on the field' }
  ],
  timing: {
    logoDisplay: 2500,
    slideInterval: 5000,
    textAnimation: 3000
  }
}

export default function HeroSection() {
  const navigate = useNavigate()
  const [showLogo, setShowLogo] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(1)
  const [showWelcome, setShowWelcome] = useState(true)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), heroConfig.timing.logoDisplay)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showLogo) {
      const interval = setInterval(() => {
        setNextSlide((prev) => (prev + 1) % heroConfig.slides.length)
        setTimeout(() => setCurrentSlide((prev) => (prev + 1) % heroConfig.slides.length), 100)
      }, heroConfig.timing.slideInterval)
      return () => clearInterval(interval)
    }
  }, [showLogo])

  useEffect(() => {
    if (!showLogo) {
      const textCycle = setInterval(() => {
        setShowWelcome(prev => !prev)
        setAnimationKey(prev => prev + 1)
      }, heroConfig.timing.textAnimation)
      return () => clearTimeout(textCycle)
    }
  }, [showLogo])

  const socialLinks = [
    { icon: <FaFacebookF size={18} />, label: 'Facebook', href: 'https://facebook.com/biscofc', hover: 'hover:bg-blue-600' },
    { icon: <FaInstagram size={18} />, label: 'Instagram', href: 'https://instagram.com/biscofc', hover: 'hover:bg-pink-600' },
    { icon: <FaTiktok size={18} />, label: 'TikTok', href: 'https://tiktok.com/@biscofc', hover: 'hover:bg-black' },
    { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', href: 'https://wa.me/1234567890', hover: 'hover:bg-green-600' }
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800;900&display=swap');

        .hero-title {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(239, 68, 68, 0.8));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        }

        .slide-image {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.9) contrast(1.05);
          z-index: -1;
        }

        @keyframes slideZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        .animate-slide {
          animation: slideZoom 8s ease-in-out infinite alternate;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
            line-height: 1.3;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Static Background */}
        {!showLogo && (
          <>
            <img src={heroConfig.slides[currentSlide].src} alt={heroConfig.slides[currentSlide].alt} className="slide-image animate-slide" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          </>
        )}

        {/* Intro Logo Animation */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="absolute inset-0 z-30 flex items-center justify-center bg-gradient-to-br from-blue-50 to-red-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={logo}
                alt="Bisco FC Logo"
                className="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Text + Buttons */}
        <AnimatePresence>
          {!showLogo && (
            <motion.div
              className="relative z-20 text-center flex flex-col items-center justify-center px-6 sm:px-8 md:px-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                key={animationKey}
                className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-3 sm:mb-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
              >
                {showWelcome ? 'WELCOME TO' : 'BISCO FOOTBALL CLUB'}
              </motion.h1>

              <motion.p
                className="text-white/90 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Home of Champions. Join the Blue Army and Experience the Passion of Football.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button onClick={() => navigate('/teams')} className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
                  Explore Teams
                </Button>
                <Button onClick={() => navigate('/contact')} variant="secondary" className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Media Icons */}
        {!showLogo && (
          <motion.div
            className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg text-white backdrop-blur-md transition-colors duration-300 ${item.hover}`}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        )}
      </section>
    </>
  )
}
