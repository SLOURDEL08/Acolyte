export default defineNuxtConfig({
  devtools: { enabled: true },

  plugins: [
    '~/plugins/locomotiveScroll.client.js',
    '~/plugins/gsap.client.js'

  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  compatibilityDate: '2024-09-20'
});