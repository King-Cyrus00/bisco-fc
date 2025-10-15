import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from '../components/nav-bar'
import HeroSection from '../components/hero'
import Footer from '../components/footer'
import AboutSection from '../components/about'
import Teams from '../components/teams'
import GallerySection from '../components/gallery'
import ContactSection from '../components/contact-section'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <main className="relative w-full overflow-x-hidden font-inter bg-white">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Static Hero Section */}
        <section
          id="hero"
          className="fixed top-0 left-0 w-full h-screen z-0 bg-gradient-to-br from-blue-900 via-blue-700 to-red-600 text-white flex items-center justify-center"
        >
          <HeroSection />
        </section>

        {/* ✅ Scrollable Content */}
        <div className="relative z-10 pt-[100vh]">
          {/* About Section */}
          <section
            id="about"
            className="relative min-h-screen bg-white text-gray-800 transition-colors duration-500 flex items-center justify-center px-4 sm:px-6 md:px-10"
          >
            <AboutSection />
          </section>

          {/* Teams Section */}
          <section
            id="teams"
            className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 md:px-10"
          >
            <Teams />
          </section>

          {/* Gallery Section */}
          <section
            id="gallery"
            className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-red-50 flex items-center justify-center px-4 sm:px-6 md:px-10"
          >
            <GallerySection />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 md:px-10"
          >
            <ContactSection />
          </section>

          {/* Footer */}
          <Footer />
        </div>

        {/* ✅ Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={scrollToTop}
              className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-gradient-to-r from-blue-600 to-red-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
