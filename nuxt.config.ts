// Temporary GitHub Pages project-site configuration.
// Remove this fallback and set baseURL to '/' when moving to a root/custom domain.
const baseURL = process.env.NUXT_APP_BASE_URL || '/jc-protese/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Manrope: [600, 700],
    },
    display: 'swap',
  },
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'JC Protético - Laboratório de Prótese Dentária',
      meta: [
        { name: 'description', content: 'Laboratório de prótese dentária com mais de 20 anos de experiência, precisão e cuidado em cada trabalho.' },
        { name: 'theme-color', content: '#050505' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://lh3.googleusercontent.com' },
        { rel: 'icon', type: 'image/webp', href: `${baseURL}jc_logo.webp` },
      ],
    },
  },
})
