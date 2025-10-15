import React from 'react'
import { Link } from 'react-router'
import { Facebook, Instagram, } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/images/bisco-logo.png'

export default function Footer() {
  const footerData = {
    about: {
      name: 'BISCO FC',
      // tagline: 'Football Club',
      description:
        'Home of champions. Join the blue army and experience the passion of football.',
      socials: [
        { name: 'Facebook', icon: <Facebook size={18} />, url: '#' },
        { name: 'Instagram', icon: <Instagram size={18} />, url: '#' },
        { name: 'Whatsapp', icon: <FaWhatsapp size={18} />, url: '#' },
        { name: 'Tiktok', icon: <FaTiktok size={18} />, url: '#' },
      ],
    },
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
    ],
    teams: [
      { name: 'Management', path: '/team/management' },
      { name: 'Under 10', path: '/team/under-10' },
      { name: 'Under 12', path: '/team/under-12' },
      { name: 'Under 15', path: '/team/under-15' },
      { name: 'Under 17', path: '/team/under-17' },
    ],
    contact: {
      address: '123 Stadium Road, City',
      phone: '+1 234 567 8900',
      email: 'info@biscofc.com',
    },
  }

  return (
    <footer className="bg-[#0B162B] text-gray-200 font-inter">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 py-16">
        
        {/* Club Info */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10">
              <img
                src={logo}
                alt="Bisco FC logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2
                className="text-xl font-extrabold tracking-tight"
                style={{ color: '#E30613' }}
              >
                BISCO <span style={{ color: '#E30613' }}>FC</span>
              </h2>
              <p className="text-sm text-gray-400 -mt-1">
                {footerData.about.tagline}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            {footerData.about.description}
          </p>

          <div className="flex gap-4">
            {footerData.about.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E30613] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <nav>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {footerData.quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-[#E30613] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Teams */}
        <nav>
          <h3 className="text-white font-semibold mb-4">Our Teams</h3>
          <ul className="space-y-2 text-sm">
            {footerData.teams.map((team) => (
              <li key={team.name}>
                <Link
                  to={team.path}
                  className="hover:text-[#E30613] transition-colors"
                >
                  {team.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="not-italic">
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="block font-semibold text-white">Address</span>
              {footerData.contact.address}
            </li>
            <li>
              <span className="block font-semibold text-white">Phone</span>
              {footerData.contact.phone}
            </li>
            <li>
              <span className="block font-semibold text-white">Email</span>
              {footerData.contact.email}
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Bisco Football Club. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
