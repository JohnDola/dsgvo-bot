<script setup>
import { ClockIcon, ShieldCheckIcon, UserIcon, ArrowTrendingUpIcon } from '@heroicons/vue/24/outline';

const benefits = [
    {
        title: 'Zeit- und Kostenersparnis',
        description: 'Reduzieren Sie Supportkosten um bis zu 40% durch automatisierte Beantwortung häufiger Kundenanfragen.',
        icon: ClockIcon,
        color: 'text-blue-600'
    },
    {
        title: 'Datenschutz-Sicherheit',
        description: 'Keine Datenschutzrisiken durch vollständige DSGVO-Konformität und EU-Hosting.',
        icon: ShieldCheckIcon,
        color: 'text-secondary'
    },
    {
        title: 'Keine IT-Expertise nötig',
        description: 'Einfache Implementierung und Bedienung auch ohne umfangreiche IT-Kenntnisse.',
        icon: UserIcon,
        color: 'text-purple-600'
    },
    {
        title: 'Wettbewerbsvorteil',
        description: 'Heben Sie sich vom Wettbewerb ab durch moderne KI-gestützte Kundenkommunikation.',
        icon: ArrowTrendingUpIcon,
        color: 'text-orange-600'
    }
]
</script>

<template>
    <section id="benefits" class="section bg-white">
        <div class="container-custom">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Left side: Text content -->
                <div class="lg:w-1/2 scroll-animate" data-animation="slide-in-left">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Vorteile für Ihr KMU
                    </h2>
                    <p class="text-xl text-gray-600 mb-8">
                        Unsere Chatbot-Lösung wurde speziell für die Bedürfnisse kleiner und mittlerer Unternehmen
                        entwickelt.
                    </p>

                    <div class="space-y-6">
                        <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-4 scroll-animate" data-animation="slide-up">
                            <div :class="[benefit.color, 'bg-gray-100 p-3 rounded-full']">
                                <component :is="benefit.icon" class="h-6 w-6" />
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ benefit.title }}</h3>
                                <p class="text-gray-600">{{ benefit.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right side: Illustration -->
                <div
                    class="lg:w-1/2 w-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center scroll-animate" data-animation="slide-in-right">
                    <div class="relative w-full h-[450px]">
                        <!-- Chat interface mockup -->
                        <div class="absolute top-0 left-0 w-3/4 h-full bg-white rounded-lg shadow-lg p-4 flex flex-col">
                            <div class="bg-primary text-white p-3 rounded-t-lg">
                                <h3 class="font-semibold">DSGVO-Bot</h3>
                            </div>
                            <div class="flex-grow p-4 overflow-y-auto space-y-4">
                                <div class="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                                    <p class="text-sm">Wie kann ich Ihnen heute helfen?</p>
                                </div>
                                <div class="bg-gray-100 p-3 rounded-lg max-w-[80%] ml-auto">
                                    <p class="text-sm">Ich habe eine Frage zu Ihren Produkten.</p>
                                </div>
                                <div class="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                                    <p class="text-sm">Gerne! Ich greife sicher auf unsere Produktdatenbank zu.</p>
                                </div>
                            </div>
                            <div class="p-3 border-t">
                                <div class="bg-gray-100 rounded-full p-2 flex items-center">
                                    <div class="flex-grow text-sm text-gray-400">Ihre Nachricht...</div>
                                    <div class="bg-secondary text-white p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- DSGVO Shield -->
                        <div class="absolute bottom-4 right-4 bg-white p-4 rounded-full shadow-lg">
                            <ShieldCheckIcon class="h-12 w-12 text-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
