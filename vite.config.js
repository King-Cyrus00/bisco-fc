import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
          },
          colors: {
            brandRed: '#E30613',
            brandBlue: '#0046AD',
            brandWhite: '#FFFFFF',
            brandBlack: '#000000',
          },
        },
      },
    }),
  ],
})
