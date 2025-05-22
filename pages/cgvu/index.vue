<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de la page CGV -->
    <div class="bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <div class="inline-flex items-center justify-center px-4 py-1.5 bg-emerald-500 bg-opacity-20 rounded-full mb-4">
            <FileText class="h-4 w-4 text-emerald-400 mr-2" />
            <span class="text-sm text-emerald-400 font-medium">Conditions Générales de Vente</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Conditions Générales de Vente
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Conditions applicables à nos prestations de création de sites web vitrines
          </p>
          <div class="mt-6 text-sm text-gray-400">
            Dernière mise à jour : {{ currentDate }}
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu des CGV -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Navigation rapide -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Navigation rapide</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <a
                v-for="section in sections"
                :key="section.id"
                :href="`#${section.id}`"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <ChevronRight class="h-4 w-4" />
              {{ section.title }}
            </a>
          </div>
        </div>

        <!-- Sections des CGV -->
        <div class="space-y-8">
          <!-- Section 1: Objet -->
          <section id="objet" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
              Objet et champ d'application
            </h2>
            <div class="prose prose-gray max-w-none">
              <p class="text-gray-700 leading-relaxed mb-4">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
                <strong>MyRocket</strong> (ci-après "le Prestataire"), société spécialisée dans la création de sites web vitrines,
                et ses clients (ci-après "le Client").
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Elles s'appliquent à toutes les prestations de services proposées par le Prestataire, notamment :
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Création et développement de sites web vitrines</li>
                <li>Conception graphique et identité visuelle</li>
                <li>Rédaction de contenus web</li>
                <li>Optimisation SEO</li>
                <li>Formation et accompagnement</li>
                <li>Maintenance et support technique</li>
              </ul>
            </div>
          </section>

          <!-- Section 2: Processus de commande -->
          <section id="commande" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
              Processus de commande et validation
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">2.1 Devis et acceptation</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Toute prestation fait l'objet d'un devis détaillé précisant la nature des services, les délais de réalisation et le prix.
                Le devis est valable 30 jours à compter de sa date d'émission. La signature du devis vaut acceptation des présentes CGV.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">2.2 Brief créatif</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Client s'engage à fournir un brief détaillé comprenant ses objectifs, ses contraintes,
                les contenus nécessaires (textes, images, logos) et toute information utile à la réalisation du projet.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">2.3 Validation des étapes</h3>
              <p class="text-gray-700 leading-relaxed">
                Le projet se déroule en plusieurs étapes avec validation du Client à chaque phase clé.
                L'absence de réponse du Client sous 7 jours ouvrés vaut acceptation tacite de l'étape présentée.
              </p>
            </div>
          </section>

          <!-- Section 3: Tarifs et paiement -->
          <section id="tarifs" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
              Tarifs et modalités de paiement
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">3.1 Prix</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Les prix sont exprimés en euros, hors taxes. La TVA au taux en vigueur sera ajoutée le cas échéant.
                Les prix peuvent être révisés en cas de modification substantielle du cahier des charges initial.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">3.2 Modalités de paiement</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li><strong>Acompte :</strong> 50% à la signature du devis</li>
                <li><strong>Solde :</strong> 50% à la livraison du site web</li>
                <li><strong>Délai de paiement :</strong> 30 jours net</li>
                <li><strong>Moyens de paiement :</strong> Virement bancaire, chèque</li>
              </ul>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">3.3 Retard de paiement</h3>
              <p class="text-gray-700 leading-relaxed">
                En cas de retard de paiement, des pénalités de 3% par mois de retard pourront être appliquées,
                ainsi qu'une indemnité forfaitaire de recouvrement de 40€.
              </p>
            </div>
          </section>

          <!-- Section 4: Obligations -->
          <section id="obligations" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
              Obligations des parties
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">4.1 Obligations du Prestataire</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Réaliser les prestations conformément au cahier des charges validé</li>
                <li>Respecter les délais convenus</li>
                <li>Informer le Client de l'avancement du projet</li>
                <li>Livrer un site web fonctionnel et optimisé</li>
                <li>Assurer la confidentialité des informations communiquées</li>
              </ul>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">4.2 Obligations du Client</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Fournir tous les éléments nécessaires à la réalisation du projet</li>
                <li>Valider les étapes dans les délais impartis</li>
                <li>S'assurer de disposer des droits sur les contenus fournis</li>
                <li>Effectuer les paiements selon l'échéancier convenu</li>
                <li>Collaborer activement à la réalisation du projet</li>
              </ul>
            </div>
          </section>

          <!-- Section 5: Propriété intellectuelle -->
          <section id="propriete" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5</div>
              Propriété intellectuelle
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">5.1 Transfert des droits</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                À l'issue du projet et après paiement intégral, le Client devient propriétaire des créations spécifiquement
                réalisées pour son compte (design graphique, contenus rédactionnels spécifiques).
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">5.2 Droits du Prestataire</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Prestataire conserve la propriété de sa méthodologie, de ses outils de développement et des éléments
                techniques génériques. Il se réserve le droit d'utiliser les références du projet à des fins commerciales.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">5.3 Contenus du Client</h3>
              <p class="text-gray-700 leading-relaxed">
                Le Client garantit disposer de tous les droits nécessaires sur les contenus qu'il fournit (textes, images, logos, etc.)
                et dégage le Prestataire de toute responsabilité à ce titre.
              </p>
            </div>
          </section>

          <!-- Section 6: Hébergement et maintenance -->
          <section id="hebergement" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">6</div>
              Hébergement et maintenance
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">6.1 Hébergement</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                L'hébergement du site web peut être assuré par le Prestataire ou un tiers de son choix.
                Les frais d'hébergement sont facturés séparément selon les tarifs en vigueur.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">6.2 Maintenance</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                La maintenance corrective (correction de bugs) est incluse pendant 3 mois après la livraison.
                Au-delà, elle fait l'objet d'un contrat de maintenance spécifique.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">6.3 Évolutions</h3>
              <p class="text-gray-700 leading-relaxed">
                Toute demande d'évolution ou de modification après livraison fera l'objet d'un devis séparé.
              </p>
            </div>
          </section>

          <!-- Section 7: Garanties et responsabilités -->
          <section id="garanties" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">7</div>
              Garanties et responsabilités
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">7.1 Garantie</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Prestataire garantit la conformité des prestations aux spécifications validées et s'engage à corriger
                tout défaut de conformité signalé dans les 3 mois suivant la livraison.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">7.2 Limitation de responsabilité</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                La responsabilité du Prestataire est limitée au montant de la prestation. Il ne saurait être tenu responsable
                des dommages indirects, perte de chiffre d'affaires, ou préjudices commerciaux.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">7.3 Force majeure</h3>
              <p class="text-gray-700 leading-relaxed">
                Aucune partie ne sera tenue responsable en cas de force majeure ou d'événement imprévisible
                empêchant l'exécution normale du contrat.
              </p>
            </div>
          </section>

          <!-- Section 8: Protection des données -->
          <section id="donnees" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">8</div>
              Protection des données personnelles
            </h2>
            <div class="prose prose-gray max-w-none">
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Prestataire s'engage à respecter la réglementation en vigueur relative à la protection des données personnelles (RGPD).
                Les données collectées dans le cadre de la prestation sont utilisées uniquement aux fins d'exécution du contrat.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Client dispose d'un droit d'accès, de rectification, de portabilité et de suppression de ses données.
                Ces droits peuvent être exercés en contactant le Prestataire à l'adresse : <strong>contact@myrocket.fr</strong>
              </p>
              <p class="text-gray-700 leading-relaxed">
                Les données sont conservées pendant la durée nécessaire à l'exécution du contrat et selon les obligations légales de conservation.
              </p>
            </div>
          </section>

          <!-- Section 9: Résiliation -->
          <section id="resiliation" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">9</div>
              Résiliation
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">9.1 Résiliation par le Client</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Client peut résilier le contrat à tout moment moyennant un préavis de 15 jours.
                Les sommes déjà versées restent acquises au Prestataire au prorata des travaux effectués.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">9.2 Résiliation par le Prestataire</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Le Prestataire peut résilier le contrat en cas de manquement grave du Client à ses obligations,
                notamment en cas de non-paiement après mise en demeure restée infructueuse.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">9.3 Conséquences</h3>
              <p class="text-gray-700 leading-relaxed">
                En cas de résiliation, chaque partie restitue ce qu'elle a reçu de l'autre.
                Le Client conserve les éléments livrés et validés avant la résiliation.
              </p>
            </div>
          </section>

          <!-- Section 10: Dispositions générales -->
          <section id="dispositions" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">10</div>
              Dispositions générales
            </h2>
            <div class="prose prose-gray max-w-none">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">10.1 Droit applicable</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux de Toulon seront seuls compétents.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">10.2 Modifications</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Toute modification du contrat doit faire l'objet d'un avenant signé par les deux parties.
                Les présentes CGV peuvent être modifiées à tout moment, les nouvelles conditions s'appliquant aux contrats futurs.
              </p>

              <h3 class="text-lg font-semibold text-gray-900 mb-3">10.3 Nullité partielle</h3>
              <p class="text-gray-700 leading-relaxed">
                Si une disposition des présentes CGV était déclarée nulle, les autres dispositions resteraient applicables.
              </p>
            </div>
          </section>
        </div>

        <!-- Informations de contact -->
        <div class="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-white mb-4">Des questions sur nos CGV ?</h2>
            <p class="text-gray-300">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-3">
                <Mail class="h-6 w-6 text-white" />
              </div>
              <div class="text-white font-medium">Email</div>
              <div class="text-gray-400 text-sm">contact@myrocket.fr</div>
            </div>

            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-3">
                <MapPin class="h-6 w-6 text-white" />
              </div>
              <div class="text-white font-medium">Adresse</div>
              <div class="text-gray-400 text-sm">PACA, France</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  FileText,
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-vue-next'

// Date actuelle formatée
const currentDate = computed(() => {
  return new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

// Sections pour la navigation
const sections = [
  { id: 'objet', title: 'Objet et champ d\'application' },
  { id: 'commande', title: 'Processus de commande' },
  { id: 'tarifs', title: 'Tarifs et paiement' },
  { id: 'obligations', title: 'Obligations des parties' },
  { id: 'propriete', title: 'Propriété intellectuelle' },
  { id: 'hebergement', title: 'Hébergement et maintenance' },
  { id: 'garanties', title: 'Garanties et responsabilités' },
  { id: 'donnees', title: 'Protection des données' },
  { id: 'resiliation', title: 'Résiliation' },
  { id: 'dispositions', title: 'Dispositions générales' }
]
</script>