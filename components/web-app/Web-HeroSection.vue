<template>
  <div class="relative overflow-hidden bg-gray-900 py-20">
    <!-- Éléments décoratifs de fond -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-500 blur-3xl"/>
      <div class="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-green-400 blur-3xl"/>

      <div class="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"/>
      <div class="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"/>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Contenu textuel -->
        <div class="space-y-8">
          <div>
            <div class="inline-block px-4 py-1.5 bg-emerald-500 bg-opacity-20 rounded-full mb-4">
              <span class="text-sm text-white font-medium">Sites Web Vitrines</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              Nous créons votre <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">vitrine virtuelle</span>, vous gérez votre business
            </h2>
          </div>

          <p class="text-xl text-gray-300">
            Concentrez-vous sur ce que vous faites de mieux, pendant que nous concevons un site web qui convertit vos visiteurs en clients.
          </p>

          <div class="space-y-5">
            <div class="flex items-start gap-3">
              <div class="mt-1 flex-shrink-0">
                <div class="w-6 h-6 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                  <Check class="h-4 w-4 text-emerald-400" />
                </div>
              </div>
              <p class="text-gray-300">Design sur mesure qui reflète l'identité unique de votre entreprise</p>
            </div>

            <div class="flex items-start gap-3">
              <div class="mt-1 flex-shrink-0">
                <div class="w-6 h-6 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                  <Check class="h-4 w-4 text-emerald-400" />
                </div>
              </div>
              <p class="text-gray-300">Optimisé pour les moteurs de recherche pour attirer plus de clients potentiels</p>
            </div>

            <div class="flex items-start gap-3 mb-10">
              <div class="mt-1 flex-shrink-0">
                <div class="w-6 h-6 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                  <Check class="h-4 w-4 text-emerald-400" />
                </div>
              </div>
              <p class="text-gray-300">Expérience utilisateur intuitive qui met en valeur vos produits et services</p>
            </div>
          </div>
        </div>

        <!-- Illustration -->
        <div class="relative">
          <!-- Mockup de site web -->
          <div class="bg-gray-800 rounded-xl shadow-2xl p-5 relative max-w-lg mx-auto">
            <!-- Barre supérieure avec boutons navigateur -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex space-x-2">
                <div class="h-3 w-3 rounded-full bg-red-500"/>
                <div class="h-3 w-3 rounded-full bg-yellow-500"/>
                <div class="h-3 w-3 rounded-full bg-green-500"/>
              </div>
              <div class="h-6 w-2/3 bg-gray-700 rounded-full"/>
              <div class="h-6 w-6 bg-gray-700 rounded-md"/>
            </div>

            <!-- Contenu du site web -->
            <div class="bg-gray-900 rounded-lg p-6 mb-4">
              <!-- Header du site -->
              <div class="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                <div class="flex items-center space-x-2">
                  <div class="h-8 w-8 rounded-md bg-emerald-500"/>
                  <div class="h-4 w-20 bg-gray-700 rounded"/>
                </div>
                <div class="flex space-x-4">
                  <div class="h-3 w-12 bg-gray-700 rounded"/>
                  <div class="h-3 w-12 bg-gray-700 rounded"/>
                  <div class="h-3 w-12 bg-gray-700 rounded"/>
                </div>
              </div>

              <!-- Hero section du site -->
              <div class="mb-6">
                <div class="h-6 w-48 bg-gray-700 rounded-lg mb-2"/>
                <div class="h-10 w-64 bg-emerald-700 rounded-lg mb-4"/>
                <div class="h-4 w-full bg-gray-700 rounded mb-2"/>
                <div class="h-4 w-5/6 bg-gray-700 rounded mb-4"/>
                <div class="h-8 w-28 bg-emerald-600 rounded-lg"/>
              </div>

              <!-- Contenu services -->
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="p-3 bg-gray-800 rounded-lg">
                  <div class="h-8 w-8 bg-emerald-600 rounded-md mb-2"/>
                  <div class="h-4 w-full bg-gray-700 rounded mb-1"/>
                  <div class="h-4 w-3/4 bg-gray-700 rounded"/>
                </div>
                <div class="p-3 bg-gray-800 rounded-lg">
                  <div class="h-8 w-8 bg-emerald-600 rounded-md mb-2"/>
                  <div class="h-4 w-full bg-gray-700 rounded mb-1"/>
                  <div class="h-4 w-3/4 bg-gray-700 rounded"/>
                </div>
                <div class="p-3 bg-gray-800 rounded-lg">
                  <div class="h-8 w-8 bg-emerald-600 rounded-md mb-2"/>
                  <div class="h-4 w-full bg-gray-700 rounded mb-1"/>
                  <div class="h-4 w-3/4 bg-gray-700 rounded"/>
                </div>
              </div>

              <!-- Galerie -->
              <div class="grid grid-cols-2 gap-2 mb-4">
                <div class="h-20 bg-gray-800 rounded-md"/>
                <div class="h-20 bg-gray-800 rounded-md"/>
              </div>

              <!-- Footer -->
              <div class="pt-4 border-t border-gray-800">
                <div class="flex justify-between">
                  <div class="h-4 w-24 bg-gray-700 rounded"/>
                  <div class="h-4 w-32 bg-gray-700 rounded"/>
                </div>
              </div>
            </div>

            <!-- Barre d'état -->
            <div class="flex justify-between">
              <div class="h-4 w-16 bg-gray-700 rounded"/>
              <div class="h-4 w-16 bg-gray-700 rounded"/>
            </div>
          </div>

          <!-- Éléments flottants -->
          <div class="absolute -top-6 -right-6 transform rotate-12 bg-gradient-to-br from-emerald-500 to-green-400 rounded-xl p-1.5 shadow-lg hidden md:block">
            <div class="bg-gray-800 p-3 rounded-lg">
              <Layout class="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <div class="absolute -bottom-8 -left-8 transform -rotate-12 bg-gradient-to-br from-emerald-500 to-green-400 rounded-xl p-1.5 shadow-lg hidden md:block">
            <div class="bg-gray-800 p-3 rounded-lg">
              <Smartphone class="w-8 h-8 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Check,
  Layout,
  Smartphone
} from 'lucide-vue-next'
</script>