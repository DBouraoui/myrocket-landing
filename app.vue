<script setup lang="ts">
import NavigationBar from "~/components/Navigation-bar.vue";
import FooterMenu from "~/components/Footer-menu.vue";
useSeoMeta({
  title: 'MyRocket',
  ogTitle: 'MyRocket',
  description: 'Création de solutions web sur mesure pour les TPE/PME',
  ogDescription: 'Création de solutions web sur mesure pour les TPE/PME',
  ogImage: 'https://myrocket.fr/logo.webp',
  twitterCard: 'summary_large_image',
})
const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NavigationBar/>
    <NuxtPage/>
    <FooterMenu/>
  </UApp>
</template>
