<script setup>
import { CheckCircleIcon, SparklesIcon, CurrencyEuroIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/vue/24/solid';

const plans = [
    {
        name: 'Basic',
        price: '49',
        period: 'pro Monat',
        description: 'Ideal für kleine Unternehmen, die mit Chatbots starten möchten.',
        features: [
            'Einfache FAQ-Chatbots',
            'Unbegrenzte Anzahl an Anfragen',
            'Grundlegende Analytics',
            'E-Mail-Support',
            'DSGVO-konform'
        ],
        cta: 'Basic wählen',
        popular: false,
        icon: CurrencyEuroIcon
    },
    {
        name: 'Premium',
        price: '149',
        period: 'pro Monat',
        description: 'Für Unternehmen, die das volle Potenzial von Chat- und Voicebots nutzen möchten.',
        features: [
            'Alles aus Basic',
            'Voice-Bot-Funktionalität',
            'Datenintegration',
            'Erweiterte Analytics',
            'Prioritäts-Support',
            'Mehrsprachige Bots',
            'Anpassbare Designs'
        ],
        cta: 'Premium wählen',
        popular: true,
        icon: SparklesIcon
    }
]
</script>

<template>
    <section id="pricing" class="section bg-gray-50">
        <div class="container-custom">
            <div class="text-center mb-12 scroll-animate" data-animation="fade-in">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Preise</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transparente Preisgestaltung ohne versteckte Kosten
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <div v-for="(plan, index) in plans" :key="index"
                    class="w-full lg:w-96 bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 scroll-animate"
                    :data-animation="index === 0 ? 'slide-in-left' : 'slide-in-right'"
                    :class="{ 'border-2 border-secondary': plan.popular }">
                    <div class="p-6 text-center relative"
                        :class="{ 'bg-secondary text-white': plan.popular, 'bg-gray-100': !plan.popular }">
                        <div class="absolute top-4 right-4">
                            <component :is="plan.icon" class="h-8 w-8" />
                        </div>
                        <h3 class="text-2xl font-bold mb-1">{{ plan.name }}</h3>
                        <p class="text-sm mb-4">{{ plan.description }}</p>
                        <div class="text-4xl font-bold">
                            {{ plan.price }} €
                            <span class="text-base font-normal">{{ plan.period }}</span>
                        </div>
                    </div>

                    <div class="p-6">
                        <ul class="space-y-3 mb-6">
                            <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start">
                                <CheckCircleSolid class="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{{ feature }}</span>
                            </li>
                        </ul>

                        <div class="text-center">
                            <a href="#interest-form"
                                class="block w-full py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                                :class="plan.popular ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-primary text-white hover:bg-primary/90'">
                                {{ plan.cta }}
                            </a>
                        </div>
                    </div>

                    <div v-if="plan.popular"
                        class="bg-secondary text-white text-center py-1 text-sm flex items-center justify-center">
                        <SparklesIcon class="h-4 w-4 mr-1" />
                        Beliebteste Wahl
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center scroll-animate" data-animation="slide-up">
                <p class="text-gray-600 mb-4">Alle Preise zzgl. MwSt. Einmalige Setup-Gebühr: 399 €</p>
                <p class="text-gray-600 flex items-center justify-center">
                    <SparklesIcon class="h-5 w-5 text-secondary mr-2" />
                    <span class="font-semibold">Frühbucher-Rabatt:</span> 20% Rabatt für die ersten 50 Anmeldungen
                </p>
            </div>
        </div>
    </section>
</template>
