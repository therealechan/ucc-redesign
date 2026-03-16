<template>
  <div class="v7-page">
    <NavbarSection />
    <HeroSection />
    <SearchSection />
    <ServicesSection />
    <VehiclesSection />
    <StepsSection />
    <WhySection />
    <TestimonialsSection />
    <BlogSection />
    <CTASection />
    <FooterSection />
    <PageNav current="v7" />
  </div>
</template>

<script setup>
import NavbarSection from '../components/v7/NavbarSection.vue'
import HeroSection from '../components/v7/HeroSection.vue'
import SearchSection from '../components/v7/SearchSection.vue'
import ServicesSection from '../components/v7/ServicesSection.vue'
import VehiclesSection from '../components/v7/VehiclesSection.vue'
import StepsSection from '../components/v7/StepsSection.vue'
import WhySection from '../components/v7/WhySection.vue'
import TestimonialsSection from '../components/v7/TestimonialsSection.vue'
import BlogSection from '../components/v7/BlogSection.vue'
import CTASection from '../components/v7/CTASection.vue'
import FooterSection from '../components/v7/FooterSection.vue'
import PageNav from '../components/PageNav.vue'
</script>

<style scoped>
.v7-page {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
