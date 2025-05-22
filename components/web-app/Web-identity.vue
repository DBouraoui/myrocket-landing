<template>
  <div class="relative bg-white py-20 overflow-hidden">
    <!-- Éléments décoratifs subtils -->
    <div class="absolute inset-0 pointer-events-none opacity-40">
      <!-- Motifs organiques -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-green-100 rounded-full blur-2xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-50 rounded-full blur-xl"></div>

      <!-- Lignes subtiles -->
      <div class="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
      <div class="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- En-tête centré -->
      <div class="text-center mb-16 max-w-4xl mx-auto">
        <div class="inline-flex items-center justify-center px-4 py-1.5 bg-emerald-100 rounded-full mb-6">
          <Sparkles class="h-4 w-4 text-emerald-600 mr-2" />
          <span class="text-sm text-emerald-700 font-medium">Votre identité digitale</span>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Nous créons bien plus qu'un site web : <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">le reflet authentique de votre entreprise</span>
        </h2>

        <p class="text-xl text-gray-600 leading-relaxed">
          Votre site web doit raconter votre histoire, véhiculer vos valeurs et capturer l'essence même de ce qui vous rend unique.
          Nous vous accompagnons pour révéler cette identité et la transformer en une présence digitale mémorable.
        </p>
      </div>

      <!-- Grille des accompagnements -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Accompagnement éditorial -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PenTool class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Les mots justes</h3>
              <p class="text-gray-600 mb-6">
                Nous vous aidons à trouver le ton de voix qui vous ressemble et les messages qui touchent vraiment votre audience.
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Définition de votre ton de voix unique</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Rédaction de contenus impactants</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Messages qui convertissent vos visiteurs</span>
              </div>
            </div>

            <!-- Exemple visuel -->
            <div class="mt-6 p-4 bg-gray-50 rounded-xl border-l-4 border-emerald-500">
              <div class="text-xs text-gray-500 mb-1 italic">Exemple d'accompagnement :</div>
              <div class="text-sm text-gray-700">
                "Au lieu de 'Nous proposons des services de qualité', nous vous aidons à dire
                <span class="font-medium text-emerald-700">'Nous transformons vos défis en opportunités depuis 15 ans'</span>"
              </div>
            </div>
          </div>
        </div>

        <!-- Accompagnement visuel -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Votre identité visuelle</h3>
              <p class="text-gray-600 mb-6">
                Nous créons une charte graphique qui exprime la personnalité de votre entreprise et vous démarque de la concurrence.
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Palette de couleurs qui vous ressemble</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Typographies adaptées à votre secteur</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Éléments visuels cohérents et mémorables</span>
              </div>
            </div>

            <!-- Palette de couleurs exemple -->
            <div class="mt-6 p-4 bg-gray-50 rounded-xl">
              <div class="text-xs text-gray-500 mb-3">Exemple de palette créée :</div>
              <div class="flex gap-2">
                <div class="w-8 h-8 rounded-lg bg-emerald-600 shadow-sm"></div>
                <div class="w-8 h-8 rounded-lg bg-emerald-400 shadow-sm"></div>
                <div class="w-8 h-8 rounded-lg bg-gray-800 shadow-sm"></div>
                <div class="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mise en valeur produits/services -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Vos atouts mis en lumière</h3>
              <p class="text-gray-600 mb-6">
                Nous structurons et présentons vos produits et services de manière à captiver vos visiteurs et les transformer en clients.
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Architecture de l'information optimisée</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Photographie et visuels valorisants</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check class="h-3 w-3 text-emerald-600" />
                  </div>
                </div>
                <span class="text-gray-700 text-sm">Parcours client fluide et engageant</span>
              </div>
            </div>

            <!-- Mise en page exemple -->
            <div class="mt-6 p-4 bg-gray-50 rounded-xl">
              <div class="text-xs text-gray-500 mb-2">Mise en valeur stratégique :</div>
              <div class="space-y-2">
                <div class="h-2 w-full bg-emerald-200 rounded-full"></div>
                <div class="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                <div class="h-2 w-5/6 bg-gray-200 rounded-full"></div>
                <div class="flex gap-1 mt-2">
                  <div class="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center">
                    <Check class="h-3 w-3 text-white" />
                  </div>
                  <div class="w-6 h-6 bg-emerald-400 rounded-md"></div>
                  <div class="w-6 h-6 bg-emerald-300 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Citation testimoniale -->
      <div class="mb-16">
        <div class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
          <div class="max-w-4xl mx-auto text-center">
            <div class="mb-6">
              <Quote class="h-12 w-12 text-emerald-600 mx-auto opacity-60" />
            </div>
            <blockquote class="text-xl md:text-2xl text-gray-800 italic font-light mb-8 leading-relaxed">
              "Ils n'ont pas juste créé notre site web, ils ont vraiment pris le temps de comprendre qui nous sommes.
              Aujourd'hui, nos clients nous disent que notre site reflète parfaitement l'esprit de notre entreprise.
              C'est exactement ce que nous voulions."
            </blockquote>
            <div class="flex items-center justify-center gap-4">
              <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <span class="text-white font-semibold">MC</span>
              </div>
              <div class="text-left">
                <div class="font-semibold text-gray-900">Marie-Claire Dupont</div>
                <div class="text-gray-600">Fondatrice, Atelier Créatif</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Process en 3 étapes -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Notre approche d'accompagnement</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Un processus collaboratif pour révéler et exprimer l'âme de votre entreprise
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Étape 1 -->
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold relative">
                1
                <!-- Flèche vers l'étape suivante (cachée sur mobile) -->
                <div class="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <ArrowRight class="h-6 w-6 text-emerald-300" />
                </div>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Découverte de votre ADN</h4>
              <p class="text-gray-600">
                Nous explorons ensemble votre histoire, vos valeurs, votre vision et ce qui vous rend unique sur votre marché.
              </p>
            </div>
          </div>

          <!-- Étape 2 -->
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold relative">
                2
                <!-- Flèche vers l'étape suivante (cachée sur mobile) -->
                <div class="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <ArrowRight class="h-6 w-6 text-emerald-300" />
                </div>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Création collaborative</h4>
              <p class="text-gray-600">
                Nous créons ensemble les éléments qui exprimeront votre identité : messages, visuels, structure et expérience utilisateur.
              </p>
            </div>
          </div>

          <!-- Étape 3 -->
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Révélation digitale</h4>
              <p class="text-gray-600">
                Votre site web devient le miroir fidèle de votre entreprise, un outil qui vous ressemble et qui génère de vrais résultats.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Appel à l'action final -->
      <div class="text-center">
        <div class="inline-block">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Prêt à révéler l'âme de votre entreprise ?</h3>
          <p class="text-gray-600 mb-8 max-w-2xl">
            Commençons par une conversation pour découvrir ce qui vous rend unique et comment le traduire en expérience web mémorable.
          </p>
          <UButton :on-click="handleclick" size="lg" class="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all group">
            <span>Commencer cette aventure</span>
            <Sparkles class="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Sparkles,
  PenTool,
  Palette,
  Star,
  Check,
  Quote,
  ArrowRight
} from 'lucide-vue-next'

const route = useRouter();

function handleclick() {
  route.push('/#contact')
}
</script>