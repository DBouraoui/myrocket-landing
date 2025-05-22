<template>
  <div id="contact"  class="py-24 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <!-- En-tête du formulaire -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Discutons</span> de votre projet
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Partagez vos besoins et nous vous contacterons rapidement pour transformer votre vision en réalité digitale.
        </p>
      </div>

      <!-- Formulaire de contact -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <!-- Barre supérieure décorée -->
          <div class="h-2 w-full bg-gradient-to-r from-emerald-500 to-green-400"/>

          <div class="p-8 md:p-12">
            <form class="space-y-8" @submit.prevent="submitForm">
              <!-- Informations de contact -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                    <User class="w-5 h-5" />
                    <span>Vos coordonnées</span>
                  </h3>

                  <!-- Nom et prénom -->
                  <div class="space-y-2">
                    <label for="name" class="block text-sm font-medium text-gray-300">Nom et prénom</label>
                    <div class="relative">
                      <input
                          id="name"
                          v-model="formData.name"
                          type="text"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10"
                          placeholder="Jean Dupont"
                          required
                      >
                      <User class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-300">Email professionnel</label>
                    <div class="relative">
                      <input
                          id="email"
                          v-model="formData.email"
                          type="email"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10"
                          placeholder="contact@votre-entreprise.fr"
                          required
                      >
                      <Mail class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <!-- Téléphone -->
                  <div class="space-y-2">
                    <label for="phone" class="block text-sm font-medium text-gray-300">Numéro de téléphone</label>
                    <div class="relative">
                      <input
                          id="phone"
                          v-model="formData.phone"
                          type="tel"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10"
                          placeholder="06 12 34 56 78"
                      >
                      <Phone class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <!-- Nom de l'entreprise -->
                  <div class="space-y-2">
                    <label for="company" class="block text-sm font-medium text-gray-300">Nom de l'entreprise</label>
                    <div class="relative">
                      <input
                          id="company"
                          v-model="formData.company"
                          type="text"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10"
                          placeholder="SARL Example"
                          required
                      >
                      <Building2 class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                    <FileCode class="w-5 h-5" />
                    <span>Détails du projet</span>
                  </h3>

                  <!-- Type de projet -->
                  <div class="space-y-2">
                    <label for="projectType" class="block text-sm font-medium text-gray-300">Objet du contact</label>
                    <div class="relative">
                      <select
                          id="projectType"
                          v-model="formData.projectType"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 appearance-none"
                          required
                      >
                        <option value="" disabled selected>Sélectionnez l'objet</option>
                        <option value="site-vitrine">Création de site vitrine</option>
                        <option value="application-entreprise">Application d'entreprise (intranet...)</option>
                        <option value="e-commerce">Site E-commerce</option>
                        <option value="refonte">Refonte de site existant</option>
                        <option value="autre">Autre</option>
                      </select>
                      <ChevronDown class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      <FolderOpen class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <!-- Budget -->
                  <div class="space-y-2">
                    <label for="budget" class="block text-sm font-medium text-gray-300">Budget approximatif</label>
                    <div class="relative">
                      <select
                          id="budget"
                          v-model="formData.budget"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 appearance-none"
                      >
                        <option value="" disabled selected>Sélectionnez une fourchette</option>
                        <option value="< 2000">Moins de 2 000 €</option>
                        <option value="2000-5000">Entre 2 000 € et 5 000 €</option>
                        <option value="5000-10000">Entre 5 000 € et 10 000 €</option>
                        <option value="10000+">Plus de 10 000 €</option>
                        <option value="non-défini">À définir</option>
                      </select>
                      <ChevronDown class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      <EuroIcon class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <!-- Délai -->
                  <div class="space-y-2">
                    <label for="deadline" class="block text-sm font-medium text-gray-300">Délai souhaité</label>
                    <div class="relative">
                      <select
                          id="deadline"
                          v-model="formData.deadline"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 appearance-none"
                      >
                        <option value="" disabled selected>Sélectionnez un délai</option>
                        <option value="urgent">Urgent (inférieur à 1 mois)</option>
                        <option value="1-3 mois">1 à 3 mois</option>
                        <option value="3-6 mois">3 à 6 mois</option>
                        <option value="6+ mois">Plus de 6 mois</option>
                        <option value="non-défini">Pas de contrainte de temps</option>
                      </select>
                      <ChevronDown class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      <Clock class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <!-- Comment nous avez-vous trouvé -->
                  <div class="space-y-2">
                    <label for="source" class="block text-sm font-medium text-gray-300">Comment nous avez-vous trouvé ?</label>
                    <div class="relative">
                      <select
                          id="source"
                          v-model="formData.source"
                          class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 appearance-none"
                      >
                        <option value="" disabled selected>Sélectionnez une option</option>
                        <option value="search">Moteur de recherche</option>
                        <option value="social">Réseaux sociaux</option>
                        <option value="recommendation">Recommandation</option>
                        <option value="advertisement">Publicité</option>
                        <option value="other">Autre</option>
                      </select>
                      <ChevronDown class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      <Search class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Description du projet -->
              <div class="space-y-2">
                <label for="description" class="block text-sm font-medium text-gray-300">Description du projet</label>
                <div class="relative">
                  <textarea
                      id="description"
                      v-model="formData.description"
                      rows="6"
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                      required
                  />
                </div>
              </div>

              <!-- Consentement RGPD -->
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                      id="terms"
                      v-model="formData.consent"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-emerald-500"
                      required
                  >
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="text-gray-400">
                    J'accepte que mes données soient traitées conformément à la politique de confidentialité. Nous ne partagerons jamais vos informations.
                  </label>
                </div>
              </div>

              <!-- Bouton d'envoi -->
              <div class="text-center">
                <button
                    type="submit"
                    class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500 inline-flex items-center gap-2"
                    :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Envoi en cours...</span>
                  <span v-else>Envoyer ma demande</span>
                  <SendIcon v-if="!isSubmitting" class="w-5 h-5" />
                  <Loader v-else class="w-5 h-5 animate-spin" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Coordonnées alternatives -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div class="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all">
            <div class="w-12 h-12 mx-auto bg-emerald-900 rounded-full flex items-center justify-center mb-4">
              <Mail class="w-6 h-6 text-emerald-400" />
            </div>
            <h4 class="text-lg font-semibold mb-2">Email</h4>
            <p class="text-gray-400">contact@myrocket.fr</p>
          </div>

          <div class="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all">
            <div class="w-12 h-12 mx-auto bg-emerald-900 rounded-full flex items-center justify-center mb-4">
              <MapPin class="w-6 h-6 text-emerald-400" />
            </div>
            <h4 class="text-lg font-semibold mb-2">Adresse</h4>
            <p class="text-gray-400">PACA, France</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  User,
  Mail,
  Phone,
  Building2,
  FileCode,
  FolderOpen,
  ChevronDown,
  EuroIcon,
  Clock,
  Search,
  SendIcon,
  Loader,
  MapPin
} from 'lucide-vue-next'

const toast = useToast();

// État du formulaire
const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  deadline: '',
  source: '',
  description: '',
  consent: false
})

// État d'envoi
const isSubmitting = ref(false)

// Soumission du formulaire
const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Appel à votre API d'envoi d'email
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || 'Erreur lors de l\'envoi du formulaire');
    }

    // Réinitialiser le formulaire après envoi réussi
    formData.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      deadline: '',
      source: '',
      description: '',
      consent: false
    }

    toast.add({
      title: 'Message envoyé !',
      description: 'Nous vous contacterons rapidement.',
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })
  } catch (error) {
    toast.add({
      title: 'Erreur',
      description: 'Une erreur est survenue lors de l\'envoi du formulaire.'+error.message,
      icon: 'i-heroicons-exclamation-circle',
      color: 'error'
    })
  } finally {
    isSubmitting.value = false;
  }
}
</script>