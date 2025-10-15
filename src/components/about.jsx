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
    { number: '20+', label: 'Years Legacy' }
  ]
}

export default function AboutSection() {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        body {
          font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
      `}</style>

      <section
        id="about"
        className="relative py-20 md:py-28 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-red-50 font-sans"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Section */}
          <div className="space-y-8">
            <span className="text-sm font-semibold uppercase text-red-500 tracking-widest">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {CLUB_DATA.tagline}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {CLUB_DATA.subline}
              </span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              {CLUB_DATA.description}
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {CLUB_DATA.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center rounded-xl bg-white shadow-md border border-gray-100 p-6 hover:shadow-lg transition duration-300"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                    {stat.number}
                  </div>
                  <div className="text-md text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              onClick={() => navigate('/about')}
              className="mt-6 bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right: Image Section */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={clubImage}
                alt="Bisco FC team celebrating victory"
                className="w-full h-[450px] md:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Established Badge */}
              <div className="absolute bottom-5 left-5 bg-white/70 backdrop-blur-md rounded-lg px-5 py-3 border border-white/30 shadow-md">
                <div className="text-xs text-gray-700 uppercase">Established</div>
                <div className="text-xl font-bold text-gray-900">
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
