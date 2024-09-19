module.exports = {
  content: [
    './pages/**/*.{vue,js}',    // Pour les fichiers Vue dans le dossier "pages"
    './components/**/*.{vue,js}', // Pour les composants Vue
    './layouts/**/*.{vue,js}',   // Si tu as un dossier "layouts"
    './app.vue',                 // Si tu utilises un fichier app.vue racine
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};