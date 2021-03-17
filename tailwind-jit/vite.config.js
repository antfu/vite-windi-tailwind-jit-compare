import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.time('tailwind-jit')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3200
  },
  plugins: [
    vue(),
    {
      name: 'time-log',
      apply: 'build',
      closeBundle() {
        console.timeEnd('tailwind-jit')
      }
    }
  ]
})
