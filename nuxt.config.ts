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
  }
});
