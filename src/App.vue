<script setup>
import Header from './components/Header.vue'
import Features from './components/Features.vue'
import Benefits from './components/Benefits.vue'
import Pricing from './components/Pricing.vue'
import Trust from './components/Trust.vue'
import InterestForm from './components/InterestForm.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <Features />
      <Benefits />
      <Pricing />
      <Trust />
      <InterestForm />
    </main>
    <Footer />
  </div>
</template>
