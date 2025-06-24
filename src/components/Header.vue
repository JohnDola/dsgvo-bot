<script setup>
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import HeroImage from '../assets/images/main-1.png'; // Direkter Import

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
          <!-- Hero image with floating effect -->
          <div class="bg-white/20 rounded-lg p-8 h-96 flex items-center justify-center relative">
            <div class="relative animate-float">
              <!-- Schwebender Schatten -->
              <div class="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
              
              <!-- Glaseffekt-Container -->
              <div class="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 shadow-lg">
                <img src="../assets/images/main-1.png" alt="Hero Image" class="h-64 w-auto mx-auto rounded-lg" />
              </div>
              
              <!-- Schwebende Partikel -->
              <div class="absolute top-1/4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-md animate-float-fast"></div>
              <div class="absolute bottom-1/3 -right-4 w-6 h-6 bg-secondary/30 rounded-full blur-md animate-float-reverse"></div>
            </div>
            <p class="absolute bottom-6 text-lg font-medium">Intelligente Chatbots für Ihr Unternehmen</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
