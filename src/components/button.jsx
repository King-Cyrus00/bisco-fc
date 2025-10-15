import React, { useState } from 'react'

export default function CTAButton({ 
  children = "Get Started", 
  onClick,
  variant = "primary"
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  const styles = {
    primary: "bg-gradient-to-r from-[#E30613] to-[#FF1744] hover:from-[#C00510] hover:to-[#E30613] text-white shadow-lg shadow-red-500/30",
    secondary: "bg-white hover:bg-zinc-50 text-zinc-900 shadow-md",
    ghost: "bg-transparent border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-700"
  }
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative px-8 py-3.5 font-semibold text-[15px] rounded-full
        ${styles[variant]}
        hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50
        overflow-hidden
      `}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      
      <span className="relative flex items-center justify-center gap-2">
        {children}
        <svg className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>
  )
}