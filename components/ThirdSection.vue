<template>
  <div class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">
          Un site web en 2025 : <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">un investissement stratégique</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Pour les TPE/PME françaises, une présence web professionnelle n'est plus une option mais une nécessité concurrentielle.
        </p>
      </div>

      <!-- Statistiques clés avec animation compteur -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <!-- Stat 1 -->
        <div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all border border-emerald-100">
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <Users class="text-emerald-600 w-10 h-10" />
            </div>
          </div>
          <h3 class="text-5xl font-bold text-emerald-600 my-4 counter" data-target="87">0%</h3>
          <p class="text-gray-700">des consommateurs français recherchent une entreprise en ligne avant d'acheter</p>
        </div>

        <!-- Stat 2 -->
        <div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all border border-emerald-100">
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <ShoppingCart class="text-emerald-600 w-10 h-10" />
            </div>
          </div>
          <h3 class="text-5xl font-bold text-emerald-600 my-4 counter" data-target="72">0%</h3>
          <p class="text-gray-700">des clients considèrent un site web comme gage de crédibilité pour une entreprise</p>
        </div>

        <!-- Stat 3 -->
        <div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all border border-emerald-100">
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <TrendingUp class="text-emerald-600 w-10 h-10" />
            </div>
          </div>
          <h3 class="text-5xl font-bold text-emerald-600 my-4 counter" data-target="63">0%</h3>
          <p class="text-gray-700">de croissance moyenne du CA après le lancement d'un site web professionnel</p>
        </div>

        <!-- Stat 4 -->
        <div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all border border-emerald-100">
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <Clock class="text-emerald-600 w-10 h-10" />
            </div>
          </div>
          <h3 class="text-5xl font-bold text-emerald-600 my-4"><span class="counter" data-target="24">0</span>/7</h3>
          <p class="text-gray-700">Votre entreprise accessible à tout moment, même pendant vos heures de fermeture</p>
        </div>
      </div>

      <!-- Graphique d'évolution version simplifiée -->
      <div class="mb-20">
        <div class="bg-white rounded-xl shadow-md p-8 border border-emerald-100">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Évolution de l'adoption digitale des TPE/PME en France</h3>
            <p class="text-gray-600">Les entreprises avec un site web professionnel surpassent systématiquement la concurrence</p>
          </div>

          <div class="h-96 relative">
            <canvas id="performanceChart" width="400" height="200"/>
          </div>
        </div>
      </div>

      <!-- Bloc "Avec vs Sans site web" -->
      <h3 class="text-2xl font-bold text-center text-gray-800 mb-10">Impact concret d'un site web sur votre activité</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <!-- Sans site web -->
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
          <div class="bg-red-50 px-6 py-4 flex items-center gap-3 rounded-t-xl">
            <XCircle class="text-red-500 w-6 h-6" />
            <h4 class="text-xl font-bold text-gray-800">Sans site web professionnel</h4>
          </div>

          <div class="p-6 space-y-4">
            <div class="flex items-start gap-3">
              <MinusCircle class="text-red-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Visibilité limitée aux clients de proximité immédiate</p>
            </div>
            <div class="flex items-start gap-3">
              <MinusCircle class="text-red-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Perte de clients potentiels qui recherchent des services en ligne</p>
            </div>
            <div class="flex items-start gap-3">
              <MinusCircle class="text-red-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Communication difficile et coûteuse pour présenter vos produits/services</p>
            </div>
            <div class="flex items-start gap-3">
              <MinusCircle class="text-red-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Image de marque perçue comme dépassée par rapport à la concurrence</p>
            </div>
            <div class="flex items-start gap-3">
              <MinusCircle class="text-red-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Dépendance aux plateformes tierces avec commissions élevées</p>
            </div>
          </div>
        </div>

        <!-- Avec site web -->
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-emerald-100">
          <div class="bg-emerald-50 px-6 py-4 flex items-center gap-3 rounded-t-xl">
            <CheckCircle class="text-emerald-500 w-6 h-6" />
            <h4 class="text-xl font-bold text-gray-800">Avec un site web professionnel</h4>
          </div>

          <div class="p-6 space-y-4">
            <div class="flex items-start gap-3">
              <CheckCircle class="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Visibilité 24/7 auprès de clients potentiels sans limite géographique</p>
            </div>
            <div class="flex items-start gap-3">
              <CheckCircle class="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Génération constante de leads qualifiés via le référencement naturel</p>
            </div>
            <div class="flex items-start gap-3">
              <CheckCircle class="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Présentation complète et attractive de vos produits/services</p>
            </div>
            <div class="flex items-start gap-3">
              <CheckCircle class="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Image de marque professionnelle et moderne qui inspire confiance</p>
            </div>
            <div class="flex items-start gap-3">
              <CheckCircle class="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
              <p class="text-gray-700">Contact direct avec vos clients, sans intermédiaires ni commissions</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ROI et bénéfices tangibles -->
      <div class="mb-16">
        <div class="bg-white rounded-xl shadow-md border border-emerald-100 p-8">
          <h3 class="text-2xl font-bold text-center text-gray-800 mb-8">Retour sur investissement concret</h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- KPI 1 -->
            <div class="bg-emerald-50 rounded-xl p-6 text-center">
              <div class="flex justify-center mb-4">
                <Search class="text-emerald-600 w-10 h-10" />
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Visibilité locale améliorée</h4>
              <p class="text-gray-700 mb-4">Les recherches « près de chez moi » ont augmenté de 900% ces quatre dernières années.</p>
              <div class="text-center">
                <p class="text-2xl md:text-3xl font-bold text-emerald-600">+70%</p>
                <p class="text-sm text-gray-600">de clients trouvés en recherche locale</p>
              </div>
            </div>

            <!-- KPI 2 -->
            <div class="bg-emerald-50 rounded-xl p-6 text-center">
              <div class="flex justify-center mb-4">
                <UserPlus class="text-emerald-600 w-10 h-10" />
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Acquisition clients</h4>
              <p class="text-gray-700 mb-4">Un site web professionnel convertit en moyenne 3x plus de visiteurs en clients.</p>
              <div class="text-center">
                <p class="text-2xl md:text-3xl font-bold text-emerald-600">-61%</p>
                <p class="text-sm text-gray-600">du coût d'acquisition client</p>
              </div>
            </div>

            <!-- KPI 3 -->
            <div class="bg-emerald-50 rounded-xl p-6 text-center">
              <div class="flex justify-center mb-4">
                <PieChart class="text-emerald-600 w-10 h-10" />
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Retour sur investissement</h4>
              <p class="text-gray-700 mb-4">Le ROI moyen d'un site web professionnel pour une TPE/PME est positif dès les premiers mois.</p>
              <div class="text-center">
                <p class="text-2xl md:text-3xl font-bold text-emerald-600">385%</p>
                <p class="text-sm text-gray-600">ROI moyen sur 2 ans</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call-to-action final -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Propulsez votre entreprise dans l'ère digitale</h3>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          En 2025, un site web professionnel n'est pas une dépense, c'est un investissement stratégique à fort rendement pour toute TPE/PME.
        </p>
        <button  v-scroll-to="'#contact'" class="px-8 py-4 text-lg font-medium text-white rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          Évaluez votre potentiel digital gratuitement
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Users,
  ShoppingCart,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  MinusCircle,
  Search,
  UserPlus,
  PieChart
} from 'lucide-vue-next'

import { ref, onMounted } from 'vue'

const chartInstance = ref(null)

onMounted(async () => {
  if (import.meta.client) {
    // Animation des compteurs au défilement
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animation des compteurs
          const counters = document.querySelectorAll('.counter')
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'))
            const duration = 2000
            const step = (target / duration) * 20
            let current = 0

            const updateCounter = () => {
              if (current < target) {
                current += step
                if (current > target) current = target

                if (counter.textContent.includes('%')) {
                  counter.textContent = Math.ceil(current) + '%'
                } else {
                  counter.textContent = Math.ceil(current)
                }

                if (current < target) {
                  setTimeout(updateCounter, 20)
                }
              }
            }

            updateCounter()
          })
        }
      })
    }, {
      threshold: 0.1
    })

    // Observer la section de statistiques
    document.querySelectorAll('.counter').forEach(el => {
      observer.observe(el)
    })

    // Initialisation du graphique
    try {
      // Import dynamique de Chart.js
      const { Chart, registerables } = await import('chart.js')

      // Enregistrement des composants nécessaires
      Chart.register(...registerables)

      // Récupération du contexte du canvas
      const ctx = document.getElementById('performanceChart')
      if (ctx) {
        // Destruction du graphique existant si nécessaire
        if (chartInstance.value) {
          chartInstance.value.destroy()
        }

        // Création du nouveau graphique
        chartInstance.value = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
              {
                label: 'TPE/PME avec site web professionnel',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                tension: 0.4,
                fill: true,
                data: [100, 132, 156, 192, 238, 295]
              },
              {
                label: 'TPE/PME sans site web',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(239, 68, 68, 1)',
                tension: 0.4,
                fill: true,
                data: [100, 108, 113, 118, 121, 124]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: false,
                title: {
                  display: true,
                  text: 'Croissance (indexée sur 100)'
                }
              }
            },
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false
              },
              legend: {
                position: 'top'
              },
              title: {
                display: true,
                text: 'Performance des entreprises (base 100 en 2020)'
              }
            }
          }
        })
      } else {
        console.error("Élément canvas 'performanceChart' non trouvé")
      }
    } catch (error) {
      console.error("Erreur lors de l'initialisation du graphique:", error)
    }
  }
})
</script>