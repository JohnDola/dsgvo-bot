import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initScrollAnimations } from './utils/scrollAnimation'

const app = createApp(App)
app.mount('#app')

// Initialize scroll animations after the app is mounted
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for Vue to render everything
    setTimeout(() => {
        initScrollAnimations()
    }, 500)
})

// Re-initialize animations on route change (if using vue-router)
window.addEventListener('popstate', () => {
    setTimeout(() => {
        initScrollAnimations()
    }, 500)
})
