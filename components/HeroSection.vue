<script setup>
import {ArrowRightIcon, ChartNoAxesCombinedIcon, Globe, CheckIcon } from "lucide-vue-next";

</script>

<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-emerald-500/0 to-green-800/20">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute inset-0">
      <!-- Formes géométriques modernes -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-bl-full opacity-10"/>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-300 to-emerald-500 rounded-tr-full opacity-10"/>

    </div>

    <div class="container mx-auto px-4 py-16 md:py-24 lg:py-28">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">

        <!-- Contenu texte -->
        <div class="w-full md:w-1/2 text-white z-10 space-y-6">
          <div class="inline-block px-4 py-2 bg-emerald-500 bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium mb-2 border border-emerald-400 border-opacity-30">
            Solutions digitales pour TPE/PME
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Votre présence web <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">qui vous démarque</span>
          </h1>

          <p class="text-lg md:text-xl text-emerald-50 max-w-lg">
            Nous créons des sites web vitrines sur mesure qui vous connectent à vos clients et renforcent votre présence digitale.
          </p>

          <div class="pt-4 space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 bg-opacity-30">
                <CheckIcon class="h-4 w-4 text-emerald-300" />
              </span>
              <span>Design personnalisé selon votre identité</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 bg-opacity-30">
                <CheckIcon class="h-4 w-4 text-emerald-300" />
              </span>
              <span>Optimisé pour les moteurs de recherche</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 bg-opacity-30">
                <CheckIcon class="h-4 w-4 text-emerald-300" />
              </span>
              <span>Parfaitement responsive sur tous les appareils</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 pt-8">
            <button v-scroll-to="'#contact'" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-700/30 hover:shadow-emerald-600/40 hover:-translate-y-1">
              Contactez nous
              <ArrowRightIcon class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Illustration moderne -->
        <div class="w-full md:w-1/2 z-10">
          <div class="relative">
            <!-- Carte principale -->
            <div class="bg-gradient-to-tr from-emerald-600 to-green-500 rounded-2xl shadow-2xl p-8 mx-auto max-w-lg backdrop-blur-sm border border-emerald-400 border-opacity-30">
              <!-- Écran moderne -->
              <div class="bg-black bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-400"/>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"/>
                  <div class="w-3 h-3 rounded-full bg-green-400"/>
                </div>

                <div class="space-y-4">
                  <!-- Navbar stylisée -->
                  <div class="flex justify-between items-center">
                    <div class="w-8 h-8 rounded-lg bg-white bg-opacity-20"/>
                    <div class="flex gap-4">
                      <div class="w-12 h-2 bg-white bg-opacity-20 rounded-full"/>
                      <div class="w-12 h-2 bg-white bg-opacity-20 rounded-full"/>
                      <div class="w-12 h-2 bg-white bg-opacity-20 rounded-full"/>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-white bg-opacity-20"/>
                  </div>

                  <!-- Contenu stylisé -->
                  <div class="flex gap-4 mt-6">
                    <div class="w-1/2 space-y-2">
                      <div class="h-6 w-24 bg-white bg-opacity-20 rounded-md"/>
                      <div class="h-3 w-full bg-white bg-opacity-10 rounded-md"/>
                      <div class="h-3 w-3/4 bg-white bg-opacity-10 rounded-md"/>
                      <div class="h-3 w-5/6 bg-white bg-opacity-10 rounded-md"/>
                      <div class="h-8 w-24 mt-4 bg-emerald-400 bg-opacity-30 rounded-md"/>
                    </div>
                    <div class="w-1/2">
                      <div class="h-32 rounded-lg bg-gradient-to-br from-emerald-300 to-green-400 bg-opacity-20"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Éléments flottants -->
            <div class="absolute -top-6 -left-6 w-20 h-20 bg-white backdrop-blur-xl rounded-2xl border border-emerald-200 border-opacity-20 shadow-xl flex items-center justify-center rotate-12">
              <ChartNoAxesCombinedIcon class="h-10 w-10 text-emerald-600" />
            </div>

            <div class="absolute -bottom-8 -right-8 w-24 h-24 bg-white backdrop-blur-xl rounded-2xl border border-emerald-200 border-opacity-20 shadow-xl flex items-center justify-center -rotate-12">
              <Globe class="h-12 w-12 text-emerald-600" />
            </div>

            <!-- Cercles lumineux -->
            <div class="absolute -bottom-10 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl opacity-20"/>
            <div class="absolute -top-10 right-20 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-20"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

