<template>
  <div class="v8-page">
    <PageNav current="v8" />
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
  </div>
</template>

<script setup>
import PageNav from '../components/PageNav.vue'
import NavbarSection from '../components/v8/NavbarSection.vue'
import HeroSection from '../components/v8/HeroSection.vue'
import SearchSection from '../components/v8/SearchSection.vue'
import ServicesSection from '../components/v8/ServicesSection.vue'
import VehiclesSection from '../components/v8/VehiclesSection.vue'
import StepsSection from '../components/v8/StepsSection.vue'
import WhySection from '../components/v8/WhySection.vue'
import TestimonialsSection from '../components/v8/TestimonialsSection.vue'
import BlogSection from '../components/v8/BlogSection.vue'
import CTASection from '../components/v8/CTASection.vue'
import FooterSection from '../components/v8/FooterSection.vue'
</script>

<style scoped>
.v8-page {
  --green: #008600;
  --green-dark: #006B00;
  --off-white: #F8F7F3;
  --near-black: #111111;
}
</style>
