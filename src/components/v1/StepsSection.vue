<template>
  <section class="steps" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Route :size="14" /> How It Works</div>
        <h2 class="section-title">6 Steps to Your Vehicle</h2>
        <p class="section-subtitle">A streamlined process from search to delivery, with support at every stage.</p>
      </div>
      <div class="steps-grid">
        <div v-for="(step, index) in steps" :key="index" class="step-card">
          <div class="step-num">{{ index + 1 }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Route } from 'lucide-vue-next'

const steps = [
  { title: 'Search', desc: 'Browse our inventory or tell us what you need' },
  { title: 'Inquiry', desc: 'Get detailed specs, photos, and inspection reports' },
  { title: 'Negotiate', desc: 'Our team helps you get the best deal' },
  { title: 'Payment', desc: 'Secure escrow payment with buyer protection' },
  { title: 'Shipping', desc: 'We handle all export docs and logistics' },
  { title: 'Receive', desc: 'Vehicle delivered to your port or door' }
]
</script>

<style scoped>
.steps {
  padding: 80px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #008600;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -.02em;
}

.section-subtitle {
  font-size: 16px;
  color: #6B7280;
  max-width: 560px;
  margin: 12px auto 0;
  line-height: 1.7;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.step-card {
  text-align: center;
  position: relative;
  padding: 24px 12px;
}

.step-num {
  width: 48px;
  height: 48px;
  background: #008600;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
}

.step-card h4 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
}

.step-card p {
  font-size: 12px;
  color: #9CA3AF;
  line-height: 1.5;
}

.step-card::after {
  content: '';
  position: absolute;
  top: 47px;
  left: calc(50% + 30px);
  width: calc(100% - 60px);
  height: 2px;
  background: #E5E7EB;
}

.step-card:last-child::after {
  display: none;
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .step-card:nth-child(3)::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .step-card::after {
    display: none;
  }
}
</style>
