<template>
  <div class="relative bg-gray-900 py-24 overflow-hidden">
    <!-- Motifs de fond et éléments décoratifs -->
    <div class="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <!-- Grille de code -->
      <div class="absolute inset-0 grid grid-cols-12 gap-x-6">
        <div v-for="i in 12" :key="i" class="col-span-1 h-full opacity-10">
          <div class="h-full w-px bg-emerald-500 bg-opacity-50"/>
        </div>
      </div>

      <!-- Fragments de code flottants -->
      <div class="absolute top-20 left-10 opacity-40 transform -rotate-12">
        <div class="font-mono text-xs text-emerald-400 whitespace-pre">
          &lt;template&gt;
          &lt;div class="container"&gt;
          &lt;h1&gt;{{ title }}&lt;/h1&gt;
          &lt;NuxtPage /&gt;
          &lt;/div&gt;
          &lt;/template&gt;
        </div>
      </div>

      <div class="absolute bottom-40 right-10 opacity-20 transform rotate-6">
        <div class="font-mono text-xs text-emerald-400 whitespace-pre">
          @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
          })
          export class AppComponent {
          title = 'modern-app';
          }
        </div>
      </div>

      <!-- Orbes lumineux -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full blur-3xl opacity-20"/>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-600 to-blue-500 rounded-full blur-3xl opacity-20"/>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 bg-emerald-500 bg-opacity-20 rounded-full mb-4">
          <Code class="h-4 w-4 text-black mr-2" />
          <span class="text-sm text-white font-medium">Technologies de pointe</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Des <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">technologies modernes</span> pour des performances exceptionnelles
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Nous utilisons les frameworks et outils les plus avancés pour créer des expériences web rapides, évolutives et sécurisées.
        </p>
      </div>

      <!-- Frameworks principaux -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <!-- Nuxt.js -->
        <div class="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-gray-700 border-opacity-50 group">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400"/>
          <div class="p-8">
            <div class="flex items-start justify-between">
              <div class="flex flex-col">
                <div class="h-14 w-14 bg-black rounded-xl flex items-center justify-center mb-6 p-2 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-green-400 transition-all duration-300">
                  <NuxtImg src="nuxtjs-logo.svg" heigth="50" width="50" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Nuxt.js</h3>
                <p class="text-gray-300 mb-6">
                  Framework Vue.js intuitif qui offre une expérience de développement exceptionnelle et des performances optimales pour votre site.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                    <Zap class="h-3 w-3 text-emerald-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Performance optimisée</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                    <Smartphone class="h-3 w-3 text-emerald-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Responsive par défaut</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                    <Search class="h-3 w-3 text-emerald-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">SEO-friendly</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                    <Lock class="h-3 w-3 text-emerald-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Sécurité renforcée</span>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-gray-700 border-opacity-40">
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-emerald-500"/>
                <div class="text-xs text-gray-400 font-mono">
                  Idéal pour : Sites vitrines, E-commerce, Applications marketing
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Angular -->
        <div class="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-gray-700 border-opacity-50 group">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-800"/>
          <div class="p-8">
            <div class="flex items-start justify-between">
              <div class="flex flex-col">
                <div class="h-14 w-14 bg-black rounded-xl flex items-center justify-center mb-6 p-2 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-pink-400 transition-all duration-300">
                  <NuxtImg src="angular-logo.svg" heigth="50" width="50" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Angular</h3>
                <p class="text-gray-300 mb-6">
                  Framework robuste pour la création d'applications d'entreprise complexes et de haute qualité qui nécessitent évolutivité et maintenance.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center">
                    <Grid class="h-3 w-3 text-red-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Architecture modulaire</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center">
                    <RefreshCw class="h-3 w-3 text-red-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Développer par Google depuis plus de 10 ans</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center">
                    <Server class="h-3 w-3 text-red-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Fiable et robust</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center">
                    <Shield class="h-3 w-3 text-red-400" />
                  </div>
                </div>
                <span class="text-gray-300 text-sm">Sécurité entreprise</span>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-gray-700 border-opacity-40">
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-red-500"/>
                <div class="text-xs text-gray-400 font-mono">
                  Idéal pour : Applications d'entreprise, Intranets, Dashboards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stack technique complet -->
      <div class="mb-20">
        <div class="text-center mb-14">
          <h3 class="text-2xl font-bold text-white mb-4">Notre stack technique complet</h3>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Nous sélectionnons les technologies les plus adaptées à chaque projet pour garantir des performances optimales et une évolution sereine.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4">
          <!-- Tech logos -->
          <div class="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-750 transition-all hover:border-emerald-500 border border-transparent">
            <div class="h-16 w-16 flex items-center justify-center mb-3">
              <NuxtImg src="nuxtjs-logo.svg" />
            </div>
            <span class="text-white font-medium text-sm">Nuxt.js</span>
          </div>

          <div class="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-750 transition-all hover:border-emerald-500 border border-transparent">
            <div class="h-16 w-16 flex items-center justify-center mb-3">
              <NuxtImg src="angular-logo.svg" />
            </div>
            <span class="text-white font-medium text-sm">Angular</span>
          </div>

          <div class="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-750 transition-all hover:border-emerald-500 border border-transparent">
            <div class="h-16 w-16 flex items-center justify-center mb-3">
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12">
                <path fill="#38BDF8" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"/>
              </svg>
            </div>
            <span class="text-white font-medium text-sm">Tailwind CSS</span>
          </div>

          <div class="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-750 transition-all hover:border-emerald-500 border border-transparent">
            <div class="h-16 w-16 flex items-center justify-center mb-3">
            <NuxtImg src="symfony-logo.png" />
            </div>
            <span class="text-white font-medium text-sm">Symfony</span>
          </div>
        </div>
      </div>

      <!-- Appel à l'action -->
      <div class="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 border-opacity-50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-2xl font-bold text-white mb-3">Prêt à construire avec les meilleures technologies ?</h3>
          <p class="text-gray-300">
            Discutons de votre projet et voyons comment nos technologies modernes peuvent répondre à vos besoins.
          </p>
        </div>

        <UButton size="lg" class="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white min-w-48 shadow-lg group flex items-center gap-2">
          <span>Démarrer un projet</span>
          <ArrowRight class="transition-transform group-hover:translate-x-1" />
        </UButton>
      </div>
    </div>

    <!-- Indicateur visuel de code/technologie -->
    <div class="absolute bottom-8 right-8 hidden lg:block">
      <div class="bg-gray-800 rounded-full p-3 shadow-lg">
        <Terminal class="h-8 w-8 text-emerald-400" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Code,
  Zap,
  Smartphone,
  Search,
  Lock,
  Grid,
  RefreshCw,
  Server,
  Shield,
  ArrowRight,
  Terminal
} from 'lucide-vue-next'
</script>