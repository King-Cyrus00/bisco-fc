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
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.7), rgba(239, 68, 68, 0.7));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        }
        
        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.9) contrast(1.05);
        }
        
        @keyframes slideZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        
        .animate-slide {
          animation: slideZoom 8s ease-in-out infinite alternate;
        }
        
        .tooltip {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-family: 'Roboto', sans-serif;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 1000;
        }
        
        .tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-left-color: rgba(0, 0, 0, 0.8);
        }
        
        .social-icon-container:hover .tooltip {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
            line-height: 1.2;
          }
          
          .tooltip {
            right: 50px;
            font-size: 11px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .tooltip {
            display: none;
          }
        }
      `}</style>

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {!showLogo && (
            <>
              <img src={heroConfig.slides[currentSlide].src} alt={heroConfig.slides[currentSlide].alt} className="slide-image animate-slide" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
            </>
          )}
        </div>

        {/* Intro Badge Animation */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #E3F2FD 30%, #FFEBEE 70%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <img src={logo} alt="Bisco FC logo" className="w-48 h-48 sm:w-56 md:w-64 lg:w-80 object-contain relative z-10" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Content */}
        <AnimatePresence>
          {!showLogo && (
            <motion.div
              className="relative z-20 text-center flex flex-col items-center justify-center px-4 sm:px-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Animated Title */}
              <motion.div
                key={animationKey}
                className="mb-4 px-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
                  {showWelcome ? 'WELCOME TO' : 'BISCO FOOTBALL CLUB'}
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-white/90 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-6 sm:mb-8 md:mb-10 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Home of Champions. Join the Blue Army and Experience the Passion of Football.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <Button onClick={() => navigate('/teams')} className="w-full sm:w-auto">Explore Teams</Button>
                <Button onClick={() => navigate('/contact')} variant="secondary" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Icons (Right Side Vertical) */}
        {!showLogo && (
          <motion.div
            className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 sm:gap-3 md:gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {socialLinks.map((item, index) => (
              <div key={index} className="relative group social-icon-container">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 sm:w-11 md:w-12 bg-white/10 rounded-lg text-white backdrop-blur-md transition-colors duration-300 ${item.hover}`}
                >
                  <div className="w-full h-full flex items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                </a>
                <div className="tooltip">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </section>
    </>
  )
}
