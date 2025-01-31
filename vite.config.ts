import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.ts
export default defineConfig({
  base: '/my-portfolio/',  // 確保這裡是你的 GitHub Pages 路徑
  plugins: [react()],
});