export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-phosphor-icons'
  ],
  css: [
    '~/assets/css/main.css',
  ],
  phosphor: {
    expose: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    app: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
});