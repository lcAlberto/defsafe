export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'nuxt-phosphor-icons'
  ],
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      // supabaseUrl: process.env.SUPABASE_URL,
      // supabaseKey: process.env.SUPABASE_KEY,
    },
    app: {
      databaseUrl: process.env.DATABASE_URL,
      directUrl: process.env.DIRECT_URL,
      //
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
});
