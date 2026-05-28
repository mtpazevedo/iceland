import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'iceland-map.webp'],
      manifest: {
        name: 'Ísland 2026 — Trip Planner',
        short_name: 'Ísland 26',
        description: 'Reykjavík, Ring Road, Snæfellsnes — 5 friends, June 2026.',
        theme_color: '#AE98AA',
        background_color: '#AE98AA',
        display: 'standalone',
        start_url: './',
        scope: './',
        icons: [
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2}'],
        // Precache everything in the build + runtime-cache OSM tiles and Unsplash photos.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname.endsWith('tile.openstreetmap.org'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'osm-tiles',
              expiration: { maxEntries: 2000, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.hostname === 'images.unsplash.com',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'unsplash',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.hostname === 'api.open-meteo.com',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'open-meteo',
              networkTimeoutSeconds: 4,
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
