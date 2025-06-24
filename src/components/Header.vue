<script setup>
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import HeroImage from '../assets/images/main-1.png'; // Direkter Import
import { onMounted, onUnmounted, ref } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Smooth scroll to section when clicking on navigation links
const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 70, // Offset for the navbar height
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Initial check for scroll position
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Navigation - moved outside header -->
  <nav class="sticky top-0 z-50 transition-all duration-300" 
       :class="[
         'bg-gradient-to-r from-primary to-primary/80 text-white',
         isScrolled ? 'py-2 shadow-lg' : 'py-4'
       ]">
    <div class="container-custom">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold flex items-center">
          <ShieldCheckIcon class="h-6 w-6 mr-2" />
          DSGVO-Bot
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <a href="#features" @click="scrollToSection($event, 'features')" class="hover:text-secondary transition-colors">Funktionen</a>
          <a href="#benefits" @click="scrollToSection($event, 'benefits')" class="hover:text-secondary transition-colors">Vorteile</a>
          <a href="#pricing" @click="scrollToSection($event, 'pricing')" class="hover:text-secondary transition-colors">Preise</a>
          <a href="#interest-form" @click="scrollToSection($event, 'interest-form')" class="hover:text-secondary transition-colors">Kontakt</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2 space-y-3">
        <a href="#features" @click="(e) => { scrollToSection(e, 'features'); closeMobileMenu(); }" 
           class="block py-2 px-4 hover:bg-primary/30 rounded-lg transition-colors">Funktionen</a>
        <a href="#benefits" @click="(e) => { scrollToSection(e, 'benefits'); closeMobileMenu(); }" 
           class="block py-2 px-4 hover:bg-primary/30 rounded-lg transition-colors">Vorteile</a>
        <a href="#pricing" @click="(e) => { scrollToSection(e, 'pricing'); closeMobileMenu(); }" 
           class="block py-2 px-4 hover:bg-primary/30 rounded-lg transition-colors">Preise</a>
        <a href="#interest-form" @click="(e) => { scrollToSection(e, 'interest-form'); closeMobileMenu(); }" 
           class="block py-2 px-4 hover:bg-primary/30 rounded-lg transition-colors">Kontakt</a>
      </div>
    </div>
  </nav>

  <header class="bg-gradient-to-r from-primary to-primary/80 text-white">

    <!-- Hero Section -->
    <div class="container-custom py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            DSGVO-konforme Chatbots für Ihr Unternehmen
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl mb-8">
            Automatisierte Kundenanfragen per Chat und Telefon - sicher, datenschutzkonform und speziell für KMUs
            entwickelt
          </p>
          <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#interest-form" @click="scrollToSection($event, 'interest-form')" class="btn-secondary flex items-center justify-center">
              <ChatBubbleLeftRightIcon class="h-5 w-5 mr-2" />
              Interesse anmelden
            </a>
            <a href="#pricing" @click="scrollToSection($event, 'pricing')"
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
