<script setup>
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <header class="bg-gradient-to-r from-primary to-primary/80 text-white">
    <!-- Navigation -->
    <nav class="container-custom py-4">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold flex items-center">
          <ShieldCheckIcon class="h-6 w-6 mr-2" />
          DSGVO-Chatbot
        </div>
        <div class="hidden md:flex space-x-6">
          <a href="#features" class="hover:text-secondary transition-colors">Funktionen</a>
          <a href="#benefits" class="hover:text-secondary transition-colors">Vorteile</a>
          <a href="#pricing" class="hover:text-secondary transition-colors">Preise</a>
          <a href="#contact" class="hover:text-secondary transition-colors">Kontakt</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="container-custom py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            DSGVO-konforme Chatbots für Ihr Unternehmen
          </h1>
          <p class="text-xl md:text-2xl mb-8">
            Automatisierte Kundenanfragen per Chat und Telefon - sicher, datenschutzkonform und speziell für KMUs
            entwickelt
          </p>
          <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#interest-form" class="btn-secondary flex items-center justify-center">
              <ChatBubbleLeftRightIcon class="h-5 w-5 mr-2" />
              Interesse anmelden
            </a>
            <a href="#pricing"
              class="bg-white text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <PhoneIcon class="h-5 w-5 mr-2" />
              Preise ansehen
            </a>
          </div>
        </div>
        <div class="hidden md:block">
          <!-- Placeholder for hero image -->
          <div class="bg-white/20 rounded-lg p-8 h-80 flex items-center justify-center">
            <div class="text-center">
              <ChatBubbleLeftRightIcon class="h-24 w-24 mx-auto mb-4" />
              <p class="text-lg font-medium">Intelligente Chatbots für Ihr Unternehmen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
