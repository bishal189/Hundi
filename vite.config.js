import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Use an array of globs to include only specific directories or files
      include: ['src/**'],
    },
  },
});
