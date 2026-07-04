import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project page: https://kariemelsedfy.github.io/personal-website/
export default defineConfig({
  base: '/personal-website/',
  plugins: [react()],
})
