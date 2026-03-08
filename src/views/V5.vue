<template>
  <div class="v5-page">
    <!-- Page Nav -->
    <PageNav current="v5" />
    
    <!-- Navbar -->
    <NavbarSection />
    
    <!-- Hero -->
    <HeroSection />
    
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
import NavbarSection from '../components/v5/NavbarSection.vue'
import HeroSection from '../components/v5/HeroSection.vue'
import ServicesSection from '../components/v5/ServicesSection.vue'
import VehiclesSection from '../components/v5/VehiclesSection.vue'
import StepsSection from '../components/v5/StepsSection.vue'
import WhySection from '../components/v5/WhySection.vue'
import TestimonialsSection from '../components/v5/TestimonialsSection.vue'
import BlogSection from '../components/v5/BlogSection.vue'
import CTASection from '../components/v5/CTASection.vue'
import FooterSection from '../components/v5/FooterSection.vue'
</script>

<style>
/* Global CSS vars for V5 - Dark Premium theme */
.v5-page {
  --green: #008600;
  --green-mid: #009900;
  --green-bright: #00BB00;
  --green-glow: rgba(0, 134, 0, 0.18);
  --green-glow-sm: rgba(0, 134, 0, 0.1);
  --green-border: rgba(0, 150, 0, 0.25);

  --bg: #07070D;
  --bg-alt: #0B0B14;
  --surface: #10101C;
  --surface-2: #171727;
  --surface-3: #1E1E30;

  --border: rgba(255, 255, 255, 0.07);
  --border-md: rgba(255, 255, 255, 0.1);
  --border-lg: rgba(255, 255, 255, 0.14);

  --text: #E0E0EE;
  --text-muted: rgba(224, 224, 238, 0.5);
  --text-dim: rgba(224, 224, 238, 0.28);

  --radius: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 32px;

  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.4);
  --shadow-float: 0 8px 40px rgba(0, 0, 0, 0.55);
  --shadow-green: 0 0 40px rgba(0, 134, 0, 0.2);

  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.v5-page * {
  box-sizing: border-box;
}

.v5-page a {
  color: inherit;
  text-decoration: none;
}

/* Typography Utilities */
.v5-page .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.v5-page .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.v5-page .section-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  color: var(--green-bright);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
  padding: 5px 14px;
  border: 1px solid var(--green-border);
  border-radius: 100px;
  background: var(--green-glow-sm);
}

.v5-page .section-title {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.v5-page .section-subtitle {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 540px;
  margin: 14px auto 0;
  line-height: 1.75;
}

/* Buttons */
.v5-page .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: var(--radius);
  font: 600 14px/1 'Inter', sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.v5-page .btn-primary {
  background: var(--green);
  color: #fff;
}

.v5-page .btn-primary:hover {
  background: var(--green-mid);
  box-shadow: var(--shadow-green);
  transform: translateY(-1px);
}

.v5-page .btn-ghost {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border: 1px solid var(--border-md);
}

.v5-page .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-lg);
}

.v5-page .btn-outline-green {
  background: transparent;
  color: var(--green-bright);
  border: 1px solid var(--green-border);
}

.v5-page .btn-outline-green:hover {
  background: var(--green-glow-sm);
}

.v5-page .btn-white {
  background: #fff;
  color: #111;
}

.v5-page .btn-white:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

.v5-page .btn-lg {
  padding: 15px 32px;
  font-size: 15px;
  border-radius: var(--radius-lg);
}

@media (max-width: 768px) {
  .v5-page .page-nav {
    top: 14px;
    right: 14px;
  }
}
</style>
