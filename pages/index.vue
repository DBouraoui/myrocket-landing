<template>
<section>
  <HeroSection />
  <SecondeSection />
  <ThirdSection />
  <ContactSection />
</section>
</template>

<script setup lang="ts">
useHead({
  title: 'Création de Sites Web Vitrines pour TPE/PME | Solutions Digitales Modernes',

  meta: [
    {
      name: 'description',
      content: 'Agence spécialisée dans la création de sites web vitrines sur mesure pour TPE/PME. Technologies modernes (Nuxt.js, Angular), design responsive et accompagnement personnalisé. Devis gratuit.'
    },
    {
      name: 'keywords',
      content: 'création site web, site vitrine, TPE PME, Nuxt.js, Angular, développement web, agence digitale, site responsive, SEO, La Seyne-sur-Mer, PACA'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'MyRocket' },
    { name: 'geo.region', content: 'FR-PACA' },

    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'MyRocket' },
    { property: 'og:title', content: 'Création de Sites Web Vitrines pour TPE/PME | Solutions Digitales Modernes' },
    { property: 'og:description', content: 'Agence spécialisée dans la création de sites web vitrines sur mesure pour TPE/PME. Technologies modernes, design responsive et accompagnement personnalisé.' },
    { property: 'og:url', content: 'https://myrocket.fr' },
    { property: 'og:image', content: 'https://myrocket.fr/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'fr_FR' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Création de Sites Web Vitrines pour TPE/PME' },
    { name: 'twitter:description', content: 'Agence spécialisée dans la création de sites web vitrines sur mesure pour TPE/PME. Technologies modernes et accompagnement personnalisé.' },

    // Meta supplémentaires pour le business
    { name: 'format-detection', content: 'telephone=yes' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

    // Schema.org pour les moteurs de recherche
    { name: 'application-name', content: 'MyRocket' },
    { name: 'msapplication-TileColor', content: '#059669' },
    { name: 'theme-color', content: '#059669' }
  ],

  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.webp' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.webp.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },

    { rel: 'canonical', href: 'https://myrocket.fr' },

    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MyRocket",
        "description": "Agence spécialisée dans la création de sites web vitrines pour TPE/PME",
        "url": "https://myrocket.fr",
        "logo": "https://myrocket.fr/logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Service client",
          "availableLanguage": "French"
        },
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "PACA",
          "addressCountry": "FR"
        },
        "offers": {
          "@type": "Service",
          "name": "Création de sites web vitrines",
          "description": "Service de création de sites web sur mesure pour TPE et PME",
          "provider": {
            "@type": "Organization",
            "name": "MyRocket"
          }
        }
      })
    }
  ],

  htmlAttrs: {
    lang: 'fr'
  },

  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>