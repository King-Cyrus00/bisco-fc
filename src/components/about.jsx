import React from 'react'
import { useNavigate } from 'react-router'
import clubImage from '../assets/images/hero1.jpeg'
import Button from '../components/button'

const CLUB_DATA = {
  tagline: 'Building Champions',
  subline: 'On and Off the Field',
  description:
    'Bisco Football Club has been nurturing young talent and building championship teams for over two decades. Our commitment to excellence, teamwork, and sportsmanship has made us one of the premier football clubs in the region.',
  foundedYear: '2000',
  stats: [
    { number: '25+', label: 'Trophies Won' },
    { number: '200+', label: 'Active Players' },
    { number: '20+', label: 'Years Legacy' },
  ],
}

export default function AboutSection() {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&family=Roboto:wght@400;500;600&display=swap');
        .about-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
        }
        .about-body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>

      <section
        id="about"
        className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-red-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Section */}
          <div className="space-y-8 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
              About Us
            </span>

            <h2 className="about-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {CLUB_DATA.tagline}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {CLUB_DATA.subline}
              </span>
            </h2>

            <p className="about-body text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {CLUB_DATA.description}
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
              {CLUB_DATA.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white font-semibold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group w-full">
            <div className="relative overflow-hidden rounded-3xl shadow-lg sm:shadow-xl">
              <img
                src={clubImage}
                alt="Bisco FC team celebrating victory"
                className="w-full h-64 sm:h-80 md:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>

              {/* Established Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 sm:px-5 sm:py-3 border border-white/30 shadow-md">
                <div className="text-[10px] sm:text-xs text-gray-700 uppercase">
                  Established
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">
                  {CLUB_DATA.foundedYear}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
