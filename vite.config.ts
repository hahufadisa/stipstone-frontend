import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    cssCodeSplit: true,
    minify: true,
    cssMinify: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/carousel',
      'framer-motion',
      'react-router-dom',
      'react-helmet'
    ],
    exclude: [
      '@mantine/dates',
      '@mantine/dropzone',
      '@mantine/form',
      '@mantine/modals',
      '@mantine/notifications',
      '@mantine/nprogress',
      '@mantine/spotlight',
      '@mantine/tiptap'
    ]
  },
  server: {
    hmr: {
      overlay: false
    },
    host: true
  },
  // esbuild: {
  //   drop: ['console', 'debugger']
  // }
})
