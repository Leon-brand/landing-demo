import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 /*  base: 'https//Leon-brand.github.io/landing-demo', */
 base: "/landing-demo/"
})
