<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Section principale du footer -->
    <div class="container mx-auto px-4 pt-16 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Colonne 1: Logo et à propos -->
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <div class="h-10 w-10 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-lg flex items-center justify-center">
              <Code class="h-6 w-6 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-white">MyRocket</h2>
          </div>

          <p class="text-gray-400 mt-4">
            Spécialiste de la création de solutions digitales sur mesure pour les TPE/PME. Nous transformons votre vision en réalité numérique.
          </p>
        </div>

        <!-- Colonne 2: Nos services -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">
            Nos services
          </h3>
          <ul class="space-y-3">
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Sites web vitrines
              </p>
            </li>
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                E-commerce
              </p>
            </li>
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Applications d'entreprise
              </p>
            </li>
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Référencement SEO
              </p>
            </li>
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Maintenance et support
              </p>
            </li>
          </ul>
        </div>

        <!-- Colonne 3: Liens utiles -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">
            Liens utiles
          </h3>
          <ul class="space-y-3">
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                À propos
              </p>
            </li>
            <li>
              <p  class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Portfolio
              </p>
            </li>
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Témoignages
              </p>
            </li>
            <li>
              <p class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                Blog
              </p>
            </li>
            <li>
              <p  class="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ChevronRight class="h-4 w-4 text-emerald-500" />
                FAQ
              </p>
            </li>
          </ul>
        </div>

        <!-- Colonne 4: Newsletter -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">
            Restez informé
          </h3>
          <p class="text-gray-400 mb-4">
            Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et conseils digitaux.
          </p>
          <form class="space-y-3" @submit.prevent="subscribeNewsletter">
            <div class="relative">
              <input
                  v-model="email"
                  type="email"
                  placeholder="Votre email"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
              >
            </div>
            <UButton
                type="submit"
                color="primary"
                class="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600"
                :loading="isSubscribing"
            >
              S'abonner
            </UButton>
          </form>
          <p class="text-xs text-gray-500 mt-3">
            En vous abonnant, vous acceptez notre politique de confidentialité.
          </p>
        </div>
      </div>

      <!-- Coordonnées -->
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 py-10 mt-10 border-t border-gray-800">
        <div class="flex items-center gap-3">
          <div class="bg-gray-800 p-3 rounded-full">
            <MapPin class="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <p class="text-sm text-white">Provence Alpe Côte d'azure</p>
            <p class="text-xs text-gray-400">France</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-gray-800 p-3 rounded-full">
            <Mail class="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <p class="text-sm text-white">contact@myrocket.fr</p>
            <p class="text-xs text-gray-400">Contactez-nous à tout moment</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright section -->
    <div class="bg-gray-950 py-6">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <div class="mb-4 md:mb-0">
          <p>&copy; {{ new Date().getFullYear() }} MyRocket. Tous droits réservés.</p>
        </div>

        <div class="flex space-x-6">
          <a href="/cgvu" class="text-gray-400 hover:text-emerald-400 transition-colors">Mentions légales</a>
          <a href="/cgvu" class="text-gray-400 hover:text-emerald-400 transition-colors">Politique de confidentialité</a>
          <a href="/cgvu" class="text-gray-400 hover:text-emerald-400 transition-colors">CGV</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from '#imports';
import {
  Code,
  ChevronRight,
  MapPin,
  Mail
} from 'lucide-vue-next';

const toast = useToast();
const email = ref('');
const isSubscribing = ref(false);

const subscribeNewsletter = async () => {
  isSubscribing.value = true;

  try {
    // Simuler l'appel API (à remplacer par votre logique réelle)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Réinitialiser le champ
    email.value = '';

    // Afficher le toast de succès
    toast.add({
      title: 'Abonnement réussi !',
      description: 'Vous êtes maintenant inscrit à notre newsletter.',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    });
  } catch (error) {
    // Afficher le toast d'erreur
    toast.add({
      title: 'Erreur',
      description: 'Un problème est survenu lors de votre inscription.',
      icon: 'i-heroicons-exclamation-circle',
      color: 'red'
    });
    console.log(error);
  } finally {
    isSubscribing.value = false;
  }
};
</script>