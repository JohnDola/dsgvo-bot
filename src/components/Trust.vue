<script setup>
import { ShieldCheckIcon, CheckBadgeIcon, BoltIcon, UserGroupIcon, GlobeEuropeAfricaIcon } from '@heroicons/vue/24/outline';

const trustPoints = [
    {
        title: 'Datenschutz & DSGVO',
        description: 'Hosting in der EU oder lokal beim Kunden, vollständige AV-Verträge und Datenschutzkonformität.',
        icon: ShieldCheckIcon,
        color: 'text-primary bg-primary/10'
    },
    {
        title: 'Qualität der Bot-Antworten',
        description: 'KI-Training auf Ihre eigenen Daten, Feedbackmechanismen und Freigabeoptionen für wichtige Antworten.',
        icon: CheckBadgeIcon,
        color: 'text-secondary bg-secondary/10'
    },
    {
        title: 'Einfache Implementierung',
        description: 'Plug-and-Play-System mit umfassendem Onboarding und Support für einen reibungslosen Start.',
        icon: BoltIcon,
        color: 'text-orange-600 bg-orange-100'
    },
    {
        title: 'Vertrauensaufbau',
        description: 'Transparente Kommunikation, kostenlose Testphasen und Referenzen von zufriedenen Kunden.',
        icon: UserGroupIcon,
        color: 'text-purple-600 bg-purple-100'
    }
]
</script>

<template>
    <section id="trust" class="section bg-white">
        <div class="container-custom">
            <div class="text-center mb-12 scroll-animate" data-animation="fade-in">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sicherheit & Vertrauen</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wir nehmen Ihre Bedenken ernst und haben Lösungen entwickelt
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(point, index) in trustPoints" :key="index"
                    class="bg-gray-50 p-6 rounded-lg border-l-4 shadow-sm hover:shadow-md transition-shadow scroll-animate"
                    :data-animation="index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'"
                    :class="`border-${point.color.split(' ')[0].split('-')[1]}-${point.color.split(' ')[0].split('-')[2]}`">
                    <div class="flex items-start gap-4">
                        <div :class="[point.color, 'p-3 rounded-full']">
                            <component :is="point.icon" class="h-6 w-6" />
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ point.title }}</h3>
                            <p class="text-gray-600">{{ point.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20 shadow-sm scroll-animate" data-animation="fade-in">
                <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="md:w-2/3">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Entwickelt und gehostet in der EU</h3>
                        <p class="text-gray-600">
                            Unsere Plattform wurde von Grund auf mit Datenschutz als Kernprinzip entwickelt.
                            Alle Daten werden ausschließlich in der EU oder auf Ihren eigenen Servern gespeichert.
                        </p>
                    </div>
                    <div class="md:w-1/3 flex justify-center">
                        <div class="bg-primary/10 h-24 w-24 rounded-full flex items-center justify-center">
                            <GlobeEuropeAfricaIcon class="h-16 w-16 text-primary" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Trust badges -->
            <div class="mt-12 flex flex-wrap justify-center gap-8 scroll-animate" data-animation="slide-up">
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <div class="text-center">
                        <ShieldCheckIcon class="h-10 w-10 text-primary mx-auto mb-2" />
                        <p class="text-sm font-semibold">DSGVO-konform</p>
                    </div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <div class="text-center">
                        <GlobeEuropeAfricaIcon class="h-10 w-10 text-primary mx-auto mb-2" />
                        <p class="text-sm font-semibold">EU-Hosting</p>
                    </div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <div class="text-center">
                        <CheckBadgeIcon class="h-10 w-10 text-secondary mx-auto mb-2" />
                        <p class="text-sm font-semibold">Zertifizierte Sicherheit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
