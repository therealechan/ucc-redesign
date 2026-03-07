<template>
  <div class="v2-page">
    <!-- Page Nav -->
    <PageNav current="v2" />
    
    <!-- Navbar -->
    <Navbar />
    
    <!-- Hero with full-width banner -->
    <HeroSection />
    
    <!-- Search Bar -->
    <SearchBar />
    
    <!-- Services -->
    <ServicesSection />
    
    <!-- Vehicles -->
    <VehiclesSection />
    
    <!-- Steps -->
    <StepsSection />
    
    <!-- Why -->
    <WhySection />
    
    <!-- Testimonials -->
    <TestimonialsSection />
    
    <!-- Blog -->
    <BlogSection />
    
    <!-- CTA -->
    <CTASection />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import PageNav from '../components/PageNav.vue'
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/v2/HeroSection.vue'
import SearchBar from '../components/v2/SearchBar.vue'
import ServicesSection from '../components/v2/ServicesSection.vue'
import VehiclesSection from '../components/v2/VehiclesSection.vue'
import StepsSection from '../components/v2/StepsSection.vue'
import WhySection from '../components/v2/WhySection.vue'
import TestimonialsSection from '../components/v2/TestimonialsSection.vue'
import BlogSection from '../components/v2/BlogSection.vue'
import CTASection from '../components/v2/CTASection.vue'
import FooterSection from '../components/v2/FooterSection.vue'
</script>

<style scoped>
.v2-page {
  --green: #008600;
  --green-dark: #006B00;
  --green-light: #00A300;
  --green-50: #ECFDF5;
  --bg: #FAFAFA;
  --white: #FFF;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1);
}
</style>
