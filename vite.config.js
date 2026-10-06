import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/Community-Library-/',   // must match the repo name exactly, including the trailing hyphen
})
