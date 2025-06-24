<script setup>
import { CalendarIcon, ClockIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section class="section bg-gray-50" id="voice-feature">
    <div class="container-custom">
      <div class="text-center mb-12 scroll-animate" data-animation="fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">24/7 Voice-Support</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Unser Voice-Bot bietet Ihren Kunden rund um die Uhr Unterstützung und greift dabei sicher auf Ihre Unternehmensdaten zu.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Voice Bot Visualization -->
        <div class="relative scroll-animate" data-animation="slide-in-left">
          <div class="bg-white rounded-xl shadow-xl p-6 relative z-10 animate-float">
            <!-- Voice Assistant Interface -->
            <div class="bg-primary/10 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-lg">Voice-Bot</h3>
                  <p class="text-sm text-gray-600">Aktiv und bereit zu helfen</p>
                </div>
              </div>

              <!-- Voice Waves Animation -->
              <div class="flex justify-center items-center h-16 mb-4">
                <div class="voice-wave-container">
                  <div class="voice-wave"></div>
                  <div class="voice-wave delay-1"></div>
                  <div class="voice-wave delay-2"></div>
                  <div class="voice-wave delay-3"></div>
                  <div class="voice-wave delay-4"></div>
                </div>
              </div>

              <!-- Conversation Example with Typing Animation -->
              <div class="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <p class="text-gray-700">
                  <span class="font-bold">Kunde:</span> 
                  <span class="typing-animation customer-typing">Wann ist mein nächster Servicetermin?</span>
                </p>
              </div>
              <div class="bg-primary/20 rounded-lg p-3 shadow-sm">
                <p class="text-gray-700">
                  <span class="font-bold">DSGVO-Bot:</span> 
                  <span class="typing-animation bot-typing">Ihr nächster Servicetermin ist am 15. Juli um 14:00 Uhr. Möchten Sie diesen Termin bestätigen oder verschieben?</span>
                </p>
              </div>
            </div>

            <!-- Connected Systems -->
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-100 rounded-lg p-4 flex items-start">
                <CalendarIcon class="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold">Kalender-Integration</h4>
                  <p class="text-sm text-gray-600">Zugriff auf Termine und Verfügbarkeiten</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg p-4 flex items-start">
                <DocumentTextIcon class="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold">Dokumenten-Zugriff</h4>
                  <p class="text-sm text-gray-600">Findet relevante Informationen in Ihren Dokumenten</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
        </div>

        <!-- Benefits List -->
        <div class="scroll-animate" data-animation="slide-in-right">
          <h3 class="text-2xl font-bold mb-6">Vorteile der Voice-Funktionalität</h3>
          
          <div class="space-y-6">
            <div class="flex scroll-animate" data-animation="slide-up">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <ClockIcon class="h-6 w-6" />
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium">24/7 Verfügbarkeit</h4>
                <p class="mt-2 text-gray-600">Ihr Voice-Bot ist rund um die Uhr für Ihre Kunden da - auch außerhalb der Geschäftszeiten.</p>
              </div>
            </div>

            <div class="flex scroll-animate" data-animation="slide-up">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <CalendarIcon class="h-6 w-6" />
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium">Intelligente Datenintegration</h4>
                <p class="mt-2 text-gray-600">Greift auf Kalender, CRM und andere Unternehmenssysteme zu, um präzise Antworten zu liefern.</p>
              </div>
            </div>

            <div class="flex scroll-animate" data-animation="slide-up">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <ShieldCheckIcon class="h-6 w-6" />
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium">Sichere Datenzugriffe</h4>
                <p class="mt-2 text-gray-600">Alle Zugriffe auf Ihre Unternehmensdaten erfolgen DSGVO-konform und mit höchsten Sicherheitsstandards.</p>
              </div>
            </div>

            <div class="mt-8 scroll-animate" data-animation="fade-in">
              <a href="#interest-form" class="btn-primary inline-flex items-center hover-lift hover-glow">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Voice-Bot testen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Typing Animation */
.typing-animation {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
}

.customer-typing {
  width: 0;
  animation: typing 2s steps(40, end) forwards, blink-caret 0.75s step-end infinite;
  animation-delay: 0.5s;
}

.bot-typing {
  width: 0;
  animation: typing 3s steps(80, end) forwards, blink-caret 0.75s step-end infinite;
  animation-delay: 3s; /* Start after customer typing is complete */
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #2563eb }
}

.voice-wave-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 200px;
}

.voice-wave {
  width: 3px;
  height: 20px;
  margin: 0 2px;
  border-radius: 2px;
  background: #2563eb;
  animation: voice-wave 1s infinite ease-in-out;
}

.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.4s;
}

.delay-3 {
  animation-delay: 0.6s;
}

.delay-4 {
  animation-delay: 0.8s;
}

@keyframes voice-wave {
  0%, 100% {
    height: 10px;
  }
  50% {
    height: 40px;
  }
}
</style>
