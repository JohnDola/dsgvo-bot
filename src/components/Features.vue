<script setup>
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, DocumentTextIcon, CogIcon } from '@heroicons/vue/24/outline';

const features = [
  {
    title: 'DSGVO-konform',
    description: 'Vollständig datenschutzkonform mit Hosting in der EU oder lokal beim Kunden.',
    icon: ShieldCheckIcon,
    color: 'bg-blue-100 text-primary'
  },
  {
    title: 'Chat & Voice',
    description: 'Kombinierte Lösung für Text- und Sprachbots aus einer Hand.',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-green-100 text-secondary'
  },
  {
    title: 'Datenintegration',
    description: 'Sichere Nutzung Ihrer internen Unternehmensdaten (FAQs, Produktdaten, Dokumentationen).',
    icon: DocumentTextIcon,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Einfache Einrichtung',
    description: 'Schnelle Implementierung ohne umfangreiche IT-Kenntnisse.',
    icon: CogIcon,
    color: 'bg-orange-100 text-orange-600'
  }
]
</script>

<template>
  <section id="features" class="section bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Funktionen</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligente Chatbots, die Ihre Kundenanfragen automatisiert und datenschutzkonform beantworten
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4"
          :class="[`border-${feature.color.split(' ')[1].split('-')[1]}-${feature.color.split(' ')[1].split('-')[2]}`]">
          <div :class="feature.color" class="p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <component :is="feature.icon" class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
