 <script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'

    const itemsSidebar = [
      { label: 'Nos services', to: '/', active: true },
      { label: 'Création de site web vitrine', to: '/web-app' },
      { label: 'Contactez nous', to: '/#contact' }
    ]

    const items = ref<NavigationMenuItem[]>([
      {
        label: 'Nos services',
        icon: 'i-lucide-lightbulb',
        children: [
          {
            label: 'Création de site web vitrine',
            icon: 'i-lucide-globe',
            description: 'Une vitrine moderne et éléguante pour mettre en valeur votre entreprise',
            to: '/web-app'
          },
          // {
          //   label: 'Création d\'applications web',
          //   icon: 'i-lucide-code-xml',
          //   description: 'Intranet, CRM, outils interne concue et développer spécialement pour votre entreprise.',
          //   to: ''
          // },
        ]
      },
      {
        label: 'Contactez nous',
        icon: 'i-lucide-user-round',
        to: '/#contact',
      },
    ])
  </script>

  <template>
    <section class="pt-2 grid grid-cols-3 px-4 max-md:hidden z-40">
      <div class="flex items-center justify-start">
        <div class="w-28 h-auto">
          <NuxtLink to="/"><NuxtImg  src="logo.webp" /></NuxtLink>
        </div>
      </div>
      <UNavigationMenu :items="items" class="w-full justify-center" />
<!--      <div class="flex items-center justify-end">-->
<!--        <UButton icon="i-lucide-user" class="cursor-pointer">Mon pannel</UButton>-->
<!--      </div>-->
    </section>

    <section class="p-2 w-full flex justify-end">
      <UDrawer direction="left" class="md:hidden">
        <!-- Bouton pour ouvrir le drawer -->
        <UButton
            icon="i-lucide-menu"
            variant="outline"
            aria-label="Menu navigation"
            class="md:hidden p-2 rounded-md cursor-pointer"
        />

        <!-- Contenu du drawer -->
        <template #content>
          <div class="flex flex-col h-full p-0">
            <!-- Entête du drawer -->
            <div class="flex items-center justify-between p-4 border-b">
              <div class="w-32">
                <NuxtImg src="logo.webp" class="h-auto w-full" />
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex-grow overflow-y-auto p-4">
              <nav class="space-y-1">
                <template v-for="(item, index) in itemsSidebar" :key="index">
                  <NuxtLink
                      :to="item.to"
                      class="block py-3 px-4 rounded-lg hover:bg-gray-100 hover:text-gray-700 font-medium transition-colors"
                      :class="{ 'bg-gray-100 text-primary-600': item.active }"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </template>
              </nav>
            </div>

            <!-- FooterMenu avec bouton -->
            <div class="p-4 border-t">
<!--              <UButton block size="lg" class="font-medium">-->
<!--                Mon pannel-->
<!--              </UButton>-->
            </div>
          </div>
        </template>
      </UDrawer>
    </section>
  </template>