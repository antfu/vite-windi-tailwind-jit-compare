import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'

console.time('windicss')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3100
  },
  plugins: [
    vue(),
    windicss({
      scan: {
        dirs: ['..'],
        fileExtensions: ['vue']
      }
    }),
    {
      name: 'time-log',
      apply: 'build',
      closeBundle() {
        console.timeEnd('windicss')
      }
    }
  ]
})
