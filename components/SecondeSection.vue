<template>
  <div class="relative py-20 bg-white overflow-hidden">
    <!-- Éléments de décoration en mouvement -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Formes géométriques qui bougent légèrement -->
      <div class="absolute -top-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply opacity-70 animate-float-slow"/>
      <div class="absolute top-1/4 -right-20 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply opacity-60 animate-float-medium"/>
      <div class="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-50 rounded-full mix-blend-multiply opacity-50 animate-float-fast"/>

      <!-- Grille moderne -->
      <div class="absolute inset-0 grid grid-cols-6 gap-8">
        <div v-for="i in 6" :key="i" class="h-full border-r border-emerald-100"/>
      </div>
      <div class="absolute inset-0 grid grid-rows-6 gap-8">
        <div v-for="i in 6" :key="i" class="w-full border-b border-emerald-100"/>
      </div>

      <!-- Éléments techniques qui flottent -->
      <div class="absolute top-20 left-1/3 transform rotate-12 opacity-10 animate-float-slow">
        <Code class="text-emerald-900 w-24 h-24" />
      </div>
      <div class="absolute bottom-40 right-1/4 transform -rotate-12 opacity-10 animate-float-medium">
        <Layers class="text-emerald-900 w-20 h-20" />
      </div>
      <div class="absolute bottom-20 left-10 opacity-10 animate-float-fast">
        <Palette class="text-emerald-900 w-16 h-16" />
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Titre de section avec animation -->
      <div class="text-center mb-16 reveal-section">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">
          Sites web sur mesure qui <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">captent l'attention</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Notre approche personnalisée transforme votre vision en une expérience web unique et performante.
        </p>
      </div>

      <!-- Grille de services - s'anime en entrée -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <!-- Carte de service 1 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group card-reveal">
          <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
            <Paintbrush class="text-white w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Design Personnalisé</h3>
          <p class="text-gray-600">Chaque pixel est conçu pour refléter l'identité de votre entreprise et séduire vos clients.</p>
          <div class="mt-6 flex items-center gap-2 text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span>En savoir plus</span>
            <ArrowRight class="w-4 h-4" />
          </div>
        </div>

        <!-- Carte de service 2 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group card-reveal">
          <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
            <Smartphone class="text-white w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Responsive & Adaptatif</h3>
          <p class="text-gray-600">Expérience fluide sur tous les appareils, de l'ordinateur au smartphone, pour toucher votre audience partout.</p>
          <div class="mt-6 flex items-center gap-2 text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span>En savoir plus</span>
            <ArrowRight class="w-4 h-4" />
          </div>
        </div>

        <!-- Carte de service 3 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group card-reveal">
          <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
            <Search class="text-white w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">SEO & Performance</h3>
          <p class="text-gray-600">Optimisé pour les moteurs de recherche et conçu pour des performances exceptionnelles qui convertissent.</p>
          <div class="mt-6 flex items-center gap-2 text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span>En savoir plus</span>
            <ArrowRight class="w-4 h-4" />
          </div>
        </div>
      </div>

      <!-- Section de processus avec animation séquentielle -->
      <div class="mb-24 process-section">
        <h3 class="text-3xl font-bold text-center mb-16 text-gray-800">Notre processus de création</h3>

        <div class="relative">
          <!-- Ligne de progression -->
          <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-100 transform -translate-x-1/2 hidden md:block"/>

          <!-- Étapes du processus -->
          <div class="space-y-24">
            <!-- Étape 1 -->
            <div class="flex flex-col md:flex-row items-center process-item">
              <div class="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h4 class="text-xl font-bold mb-3 text-gray-800">1. Consultation & Analyse</h4>
                <p class="text-gray-600">Nous comprenons vos besoins, vos objectifs et votre audience pour créer une stratégie digitale sur mesure.</p>
              </div>

              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 relative z-10 process-node">
                <FileSearch class="text-white w-6 h-6" />
              </div>

              <div class="md:w-1/2 md:pl-16 md:mt-0 mt-8"/>
            </div>

            <!-- Étape 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center process-item">
              <div class="md:w-1/2 md:pl-16 mb-8 md:mb-0 md:text-left">
                <h4 class="text-xl font-bold mb-3 text-gray-800">2. Design & Prototypage</h4>
                <p class="text-gray-600">Nous créons des maquettes visuelles qui définissent l'identité unique de votre site et valident l'expérience utilisateur.</p>
              </div>

              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 relative z-10 process-node">
                <PenTool class="text-white w-6 h-6" />
              </div>

              <div class="md:w-1/2 md:pr-16 md:mt-0 mt-8"/>
            </div>

            <!-- Étape 3 -->
            <div class="flex flex-col md:flex-row items-center process-item">
              <div class="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h4 class="text-xl font-bold mb-3 text-gray-800">3. Développement & Intégration</h4>
                <p class="text-gray-600">Nous donnons vie à votre site avec un code propre, des fonctionnalités sur mesure et une attention aux détails.</p>
              </div>

              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 relative z-10 process-node">
                <Code2 class="text-white w-6 h-6" />
              </div>

              <div class="md:w-1/2 md:pl-16 md:mt-0 mt-8"/>
            </div>

            <!-- Étape 4 -->
            <div class="flex flex-col md:flex-row-reverse items-center process-item">
              <div class="md:w-1/2 md:pl-16 mb-8 md:mb-0 md:text-left">
                <h4 class="text-xl font-bold mb-3 text-gray-800">4. Lancement & Support</h4>
                <p class="text-gray-600">Nous assurons que votre site performe parfaitement dès son lancement et vous offrons un support continu pour évoluer.</p>
              </div>

              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 relative z-10 process-node">
                <Rocket class="text-white w-6 h-6" />
              </div>

              <div class="md:w-1/2 md:pr-16 md:mt-0 mt-8"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Call-to-Action avec effet de parallaxe -->
      <div class="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-12 shadow-xl relative overflow-hidden cta-section">
        <div class="absolute inset-0 pointer-events-none">
          <!-- Motifs dynamiques -->
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full animate-float-slow"/>
          <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full animate-float-medium"/>

          <div class="absolute right-10 top-10 opacity-10 transform rotate-12">
            <Laptop class="w-32 h-32 text-white" />
          </div>
          <div class="absolute left-10 bottom-10 opacity-10 transform -rotate-12">
            <Monitor class="w-24 h-24 text-white" />
          </div>
        </div>

        <div class="relative z-10 text-center text-white">
          <h3 class="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre présence en ligne ?</h3>
          <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Discutons de votre projet et créons ensemble un site web qui répond parfaitement à vos objectifs.</p>
          <button v-scroll-to="'#contact'" class="px-8 py-4 bg-white text-emerald-600 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-white focus:ring-opacity-50">
            Parlez nous de votre projet !
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Paintbrush,
  Smartphone,
  Search,
  ArrowRight,
  FileSearch,
  PenTool,
  Code2,
  Rocket,
  Laptop,
  Monitor,
  Code,
  Layers,
  Palette
} from 'lucide-vue-next'

onMounted(() => {
  if (import.meta.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1
    })

    // Observer les éléments de la section
    document.querySelectorAll('.reveal-section, .card-reveal, .process-item, .process-node, .process-image, .cta-section').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')
      observer.observe(el)
    })

    // Animation séquentielle pour le processus
    const processItems = document.querySelectorAll('.process-item')
    processItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 150}ms`
    })
  }
})
</script>

<style scoped>
/* Animations de flottement */
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

/* Animation au défilement */
.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>