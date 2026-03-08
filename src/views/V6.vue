<template>
  <div class="v6-page">
    <!-- Page Nav -->
    <PageNav current="v6" />

    <!-- Navbar -->
    <NavbarSection />

    <!-- Hero -->
    <HeroSection />

    <!-- Categories -->
    <CategorySection />

    <!-- Inventory -->
    <InventorySection />

    <!-- Trust -->
    <TrustSection />

    <!-- Why UCC -->
    <WhySection />

    <!-- Testimonials -->
    <TestimonialsSection />

    <!-- CTA -->
    <CTASection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import PageNav from '../components/PageNav.vue'
import NavbarSection from '../components/v6/NavbarSection.vue'
import HeroSection from '../components/v6/HeroSection.vue'
import CategorySection from '../components/v6/CategorySection.vue'
import InventorySection from '../components/v6/InventorySection.vue'
import TrustSection from '../components/v6/TrustSection.vue'
import WhySection from '../components/v6/WhySection.vue'
import TestimonialsSection from '../components/v6/TestimonialsSection.vue'
import CTASection from '../components/v6/CTASection.vue'
import FooterSection from '../components/v6/FooterSection.vue'
</script>

<style>
/* Global CSS vars for V6 - Marketplace Search theme */
.v6-page {
  --green: #008600;
  --green-mid: #007000;
  --green-light: rgba(0, 134, 0, 0.06);
  --green-border: rgba(0, 134, 0, 0.2);

  --bg: #f7f8fa;
  --surface: #ffffff;

  --border: rgba(0, 0, 0, 0.08);
  --border-md: rgba(0, 0, 0, 0.12);

  --text: #1a1a1a;
  --text-muted: #6b7280;
  --text-dim: #9ca3af;

  --radius: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;

  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.07);
  --shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12);

  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.v6-page * {
  box-sizing: border-box;
}

.v6-page a {
  color: inherit;
  text-decoration: none;
}

.v6-page .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

@media (max-width: 768px) {
  .v6-page .container {
    padding: 0 16px;
  }
}
</style>
