<script setup>
import { ref } from 'vue'
import { EnvelopeIcon, BuildingOfficeIcon, ChatBubbleLeftRightIcon, PhoneIcon, CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';

const company = ref('')
const email = ref('')
const interest = ref('both')
const message = ref('')
const submitted = ref(false)
const error = ref(false)

const interestOptions = [
    { value: 'chat', label: 'Chat-Bot', icon: ChatBubbleLeftRightIcon },
    { value: 'voice', label: 'Voice-Bot', icon: PhoneIcon },
    { value: 'both', label: 'Beides', icon: CheckCircleIcon }
]

const submitForm = () => {
    // Basic validation
    if (!company.value || !email.value) {
        error.value = true
        return
    }

    // In a real application, you would send this data to a server
    console.log({
        company: company.value,
        email: email.value,
        interest: interest.value,
        message: message.value
    })

    // Reset form and show success message
    error.value = false
    submitted.value = true

    // Reset form after submission
    company.value = ''
    email.value = ''
    interest.value = 'both'
    message.value = ''
}
</script>

<template>
    <section id="interest-form" class="section bg-gray-50">
        <div class="container-custom">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-12 scroll-animate" data-animation="fade-in">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interesse anmelden</h2>
                    <p class="text-xl text-gray-600">
                        Melden Sie sich unverbindlich an, um mehr zu erfahren oder eine kostenlose Testphase zu starten
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg p-8 scroll-animate" data-animation="slide-up">
                    <div v-if="submitted"
                        class="bg-secondary/10 border border-secondary text-gray-800 p-4 rounded-lg mb-6 flex items-start">
                        <CheckCircleIcon class="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                            <p class="font-semibold">Vielen Dank für Ihr Interesse!</p>
                            <p>Wir werden uns in Kürze mit Ihnen in Verbindung setzen.</p>
                        </div>
                    </div>

                    <div v-if="error && (!company || !email)"
                        class="bg-red-50 border border-red-300 text-red-800 p-4 rounded-lg mb-6 flex items-start">
                        <ExclamationCircleIcon class="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                            <p class="font-semibold">Bitte füllen Sie alle erforderlichen Felder aus.</p>
                        </div>
                    </div>

                    <form @submit.prevent="submitForm">
                        <div class="mb-6">
                            <label for="company" class="block text-gray-700 font-medium mb-2 flex items-center">
                                <BuildingOfficeIcon class="h-5 w-5 mr-2 text-gray-500" />
                                Unternehmen *
                            </label>
                            <input type="text" id="company" v-model="company"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                :class="{ 'border-red-500': error && !company }" placeholder="Ihr Unternehmen" required>
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium mb-2 flex items-center">
                                <EnvelopeIcon class="h-5 w-5 mr-2 text-gray-500" />
                                E-Mail *
                            </label>
                            <input type="email" id="email" v-model="email"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                :class="{ 'border-red-500': error && !email }" placeholder="ihre-email@beispiel.de"
                                required>
                        </div>

                        <div class="mb-6">
                            <label for="interest" class="block text-gray-700 font-medium mb-2 flex items-center">
                                <ChatBubbleLeftRightIcon class="h-5 w-5 mr-2 text-gray-500" />
                                Interesse an
                            </label>
                            <div class="grid grid-cols-3 gap-4 mb-4">
                                <div v-for="option in interestOptions" :key="option.value"
                                    class="border rounded-lg p-3 cursor-pointer transition-colors hover-lift"
                                    :class="interest === option.value ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'"
                                    @click="interest = option.value">
                                    <div class="flex flex-col items-center text-center">
                                        <component :is="option.icon" class="h-6 w-6 mb-2"
                                            :class="interest === option.value ? 'text-primary' : 'text-gray-500'" />
                                        <span
                                            :class="interest === option.value ? 'font-medium text-primary' : 'text-gray-700'">
                                            {{ option.label }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-medium mb-2 flex items-center">
                                <ChatBubbleLeftRightIcon class="h-5 w-5 mr-2 text-gray-500" />
                                Nachricht (optional)
                            </label>
                            <textarea id="message" v-model="message" rows="4"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Ihre Fragen oder Anmerkungen"></textarea>
                        </div>

                        <div class="mb-6">
                            <div class="flex items-start">
                                <input type="checkbox" id="privacy" class="mt-1 mr-2" required>
                                <label for="privacy" class="text-sm text-gray-600">
                                    Ich stimme zu, dass meine Daten zur Kontaktaufnahme verwendet werden.
                                    Weitere Informationen finden Sie in unserer
                                    <a href="#" class="text-primary hover:underline">Datenschutzerklärung</a>.
                                </label>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit"
                                class="btn-primary w-full sm:w-auto px-8 flex items-center justify-center mx-auto hover-lift hover-glow">
                                <PaperAirplaneIcon class="h-5 w-5 mr-2" />
                                Unverbindlich anmelden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
