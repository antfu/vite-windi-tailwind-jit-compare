import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    windicss({
      scan: {
        dirs: ['..'],
        fileExtensions: ['vue']
      }
    })
  ]
})
