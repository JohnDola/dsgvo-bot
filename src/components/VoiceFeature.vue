<script setup>
import { CalendarIcon, ClockIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section class="section bg-gray-50" id="voice-feature">
    <div class="container-custom">
      <div class="text-center mb-12 scroll-animate" data-animation="fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">24/7 Telefon-Support</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Unser Telefon-Assistent bietet Ihren Kunden rund um die Uhr Unterstützung und greift dabei sicher auf Ihre Unternehmensdaten zu.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Voice Bot Visualization -->
        <div class="relative scroll-animate" data-animation="slide-in-left">
          <div class="bg-white rounded-xl shadow-xl p-6 relative z-10 animate-float">
              <!-- Phone Call Interface -->
            <div class="bg-primary/10 rounded-lg p-4 mb-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-bold text-lg">DSGVO Voice-Bot</h3>
                    <p class="text-sm text-gray-600">Telefonanruf aktiv</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span>Anruf läuft: 02:34</span>
                  </div>
                </div>
              </div>

              <!-- Phone Call Controls -->
              <div class="flex justify-center items-center mb-4">
                <div class="flex space-x-4">
                  <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828-1.414-1.414L4.586 16.95m2.828-2.828L20.5 1.5" />
                    </svg>
                  </div>
                  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
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

              <!-- Phone Conversation Example with Typing Animation - Full Process -->
              <div class="phone-dialog">
                <div class="call-status text-center text-xs text-gray-500 mb-3">
                  <span>Anruf verbunden um 10:23 Uhr</span>
                </div>
                
                <!-- Show the full conversation process -->
                <div class="dialog-container">
                  <div class="dialog-entry mb-3">
                    <div class="flex items-start">
                      <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div class="bg-white rounded-lg p-3 shadow-sm flex-grow">
                        <p class="text-xs text-gray-500 mb-1">Anrufer:</p>
                        <p class="text-gray-700">
                          <span class="typing-animation customer-typing-1">Ich brauche einen Termin.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="dialog-entry mb-3">
                    <div class="flex items-start">
                      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div class="bg-primary/20 rounded-lg p-3 shadow-sm flex-grow">
                        <p class="text-xs text-gray-500 mb-1">DSGVO Telefon-Bot:</p>
                        <p class="text-gray-700">
                          <span class="typing-animation bot-typing-1">Dienstag 14:30 Uhr ist verfügbar.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="dialog-entry mb-3">
                    <div class="flex items-start">
                      <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div class="bg-white rounded-lg p-3 shadow-sm flex-grow">
                        <p class="text-xs text-gray-500 mb-1">Anrufer:</p>
                        <p class="text-gray-700">
                          <span class="typing-animation customer-typing-2">Perfekt. Bitte Bestätigung per E-Mail.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="dialog-entry">
                    <div class="flex items-start">
                      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div class="bg-primary/20 rounded-lg p-3 shadow-sm flex-grow">
                        <p class="text-xs text-gray-500 mb-1">DSGVO Telefon-Bot:</p>
                        <p class="text-gray-700">
                          <span class="typing-animation bot-typing-2">E-Mail mit Terminbestätigung wurde versendet.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="call-status text-center text-xs text-gray-500 mt-3">
                  <span class="inline-flex items-center">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-1 pulse-animation"></span>
                    Gespräch läuft...
                  </span>
                </div>
              </div>
            </div>

            <!-- Connected Systems - Extended -->
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
              <div class="bg-gray-100 rounded-lg p-4 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 class="font-semibold">E-Mail-Versand</h4>
                  <p class="text-sm text-gray-600">Sendet Bestätigungen und Informationen per E-Mail</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg p-4 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h4 class="font-semibold">Formular-Erstellung</h4>
                  <p class="text-sm text-gray-600">Erstellt und versendet digitale Formulare</p>
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
          <h3 class="text-2xl font-bold mb-6">Vorteile des Telefon-Assistenten</h3>
          
          <div class="space-y-6">
            <div class="flex scroll-animate" data-animation="slide-up">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <ClockIcon class="h-6 w-6" />
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium">24/7 Telefon-Support</h4>
                <p class="mt-2 text-gray-600">Ihr Telefon-Assistent ist rund um die Uhr für Ihre Anrufer da - auch außerhalb der Geschäftszeiten.</p>
              </div>
            </div>

            <div class="flex scroll-animate" data-animation="slide-up">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <CalendarIcon class="h-6 w-6" />
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium">Intelligente Gesprächsführung</h4>
                <p class="mt-2 text-gray-600">Greift auf Kalender, CRM und andere Unternehmenssysteme zu, um präzise Antworten im Telefonat zu liefern.</p>
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
                Telefon-Assistenten testen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Dialog Container - No Scroll */
.dialog-container {
  position: relative;
}

/* Phone Dialog Styling */
.phone-dialog {
  border-radius: 12px;
  background-color: #f9fafb;
  padding: 12px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
}

.dialog-entry {
  opacity: 0;
  animation: fade-in 0.5s ease forwards;
}

.dialog-entry:nth-child(1) {
  animation-delay: 0.2s;
}

.dialog-entry:nth-child(2) {
  animation-delay: 2.5s;
}

.dialog-entry:nth-child(3) {
  animation-delay: 4.5s;
}

.dialog-entry:nth-child(4) {
  animation-delay: 6.5s;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Pulse animation for the call status indicator */
.pulse-animation {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

/* Typing Animation - Full Process */
.typing-animation {
  display: inline-block;
  overflow: hidden;
  white-space: normal;
  border-right: 2px solid transparent;
  width: 0;
}

@media (min-width: 768px) {
  .typing-animation {
    white-space: nowrap;
  }
}

.customer-typing-1 {
  animation: typing 1.5s forwards, blink-caret 0.75s step-end 6;
  animation-delay: 0.5s;
}

.bot-typing-1 {
  animation: typing 1.5s forwards, blink-caret 0.75s step-end 6;
  animation-delay: 2.5s; /* Start after first customer typing is complete */
}

.customer-typing-2 {
  animation: typing 1.5s forwards, blink-caret 0.75s step-end 6;
  animation-delay: 4.5s; /* Start after first bot typing is complete */
}

.bot-typing-2 {
  animation: typing 1.5s forwards, blink-caret 0.75s step-end 6;
  animation-delay: 6.5s; /* Start after second customer typing is complete */
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
  position: relative;
}

.voice-wave-container::before {
  content: "Sprachsignal";
  position: absolute;
  top: -15px;
  font-size: 10px;
  color: #6b7280;
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
