<template>
 <section class="min-h-screen">
  <WebHeroSection />
   <WebTechnologies />
   <WebIdentity />
 </section>
</template>
<script setup lang="ts">
import WebHeroSection from "~/components/web-app/Web-HeroSection.vue";
import WebTechnologies from "~/components/web-app/Web-technologies.vue";
import WebIdentity from "~/components/web-app/Web-identity.vue";
</script>