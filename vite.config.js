import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TugasWeb-Pertemuan6-QuizApp/',
  plugins: [
    tailwindcss(),
  ],
})