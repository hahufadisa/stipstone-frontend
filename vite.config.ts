import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mantine: ['@mantine/core', '@mantine/hooks', '@mantine/carousel'],
          motion: ['framer-motion'],
          router: ['react-router-dom'],
          seo: ['react-helmet']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/css/i.test(ext || '')) {
            return `assets/css/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        }
      }
    },
    chunkSizeWarningLimit: 800,
    sourcemap: false,
    reportCompressedSize: false,
    assetsInlineLimit: 4096
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
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "src/styles/variables.scss" as *;`
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
