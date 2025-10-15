import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/images/bisco-logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [teamDropdown, setTeamDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTeamDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { 
      name: 'BISCO TEAMS', 
      path: '/team',
      dropdown: [
        { name: 'MANAGEMENT', path: '/team/management' },
        { name: 'UNDER 10', path: '/team/under-10' },
        { name: 'UNDER 13', path: '/team/under-13' },
        { name: 'UNDER 15', path: '/team/under-15' },
        { name: 'UNDER 17', path: '/team/under-17' },
      ]
    },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap');
        
        .nav-link {
          position: relative;
          font-family: 'Roboto', sans-serif;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #EF4444;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
      
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`} style={{ backgroundColor: '#F8F9FE' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Bisco FC home">
            <img
              src={logo}
              alt="Bisco FC logo"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold tracking-tight transition-colors duration-300 text-[#EF4444]" style={{ fontFamily: 'Inter, sans-serif' }}>
              BISCO FC
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                {link.dropdown ? (
                  <div
                    onMouseEnter={() => setTeamDropdown(true)}
                    onMouseLeave={() => setTeamDropdown(false)}
                  >
                    <button
                      className="nav-link flex items-center gap-1 px-1 py-2 font-medium text-base text-gray-700 hover:text-[#EF4444] transition-colors duration-200"
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transition-transform ${teamDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {teamDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200" style={{ backgroundColor: '#FAFBFF' }}>
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `
                              block px-5 py-3 text-sm font-medium
                              transition-colors duration-150
                              ${isActive 
                                ? 'text-[#EF4444] bg-red-50' 
                                : 'text-gray-700 hover:text-[#EF4444] hover:bg-gray-50'
                              }
                            `}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                            onClick={() => setTeamDropdown(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    end
                    to={link.path}
                    className={({ isActive }) => `
                      nav-link px-1 py-2 font-medium text-base
                      transition-colors duration-200
                      ${isActive 
                        ? 'text-[#EF4444] active' 
                        : 'text-gray-700 hover:text-[#EF4444]'
                      }
                    `}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 shadow-lg" style={{ backgroundColor: '#F8F9FE' }}>
            <ul className="px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setTeamDropdown(!teamDropdown)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-base text-gray-700 hover:text-[#EF4444] hover:bg-gray-50 transition-all duration-200"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        {link.name}
                        <ChevronDown size={18} className={`transition-transform ${teamDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {teamDropdown && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.path}
                              onClick={() => {
                                setOpen(false)
                                setTeamDropdown(false)
                              }}
                              className={({ isActive }) => `
                                block px-4 py-2 rounded-lg text-sm font-medium
                                transition-colors duration-200
                                ${isActive 
                                  ? 'text-[#EF4444] bg-red-50' 
                                  : 'text-gray-600 hover:text-[#EF4444] hover:bg-gray-50'
                                }
                              `}
                              style={{ fontFamily: 'Roboto, sans-serif' }}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => `
                        block px-4 py-3 rounded-lg font-medium text-base
                        transition-all duration-200
                        ${isActive 
                          ? 'text-[#EF4444] bg-red-50' 
                          : 'text-gray-700 hover:text-[#EF4444] hover:bg-gray-50'
                        }
                      `}
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}