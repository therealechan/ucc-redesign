<template>
  <section class="steps">
    <div class="container">
      <div class="section-header">
        <span class="section-label">HOW IT WORKS</span>
        <h2 class="section-title">Six Steps to Your Door</h2>
        <p class="section-sub">Simple, transparent, and fully managed from search to delivery.</p>
      </div>

      <div class="timeline-wrap">
        <div class="track-line"></div>
        <div class="steps-grid">
          <div v-for="(step, i) in steps" :key="i" class="step-item">
            <div class="step-circle">{{ i + 1 }}</div>
            <div class="step-icon-wrap">
              <component :is="step.icon" :size="22" />
            </div>
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, MessageSquare, Users, CreditCard, Ship, PackageCheck } from 'lucide-vue-next'

const steps = [
  { icon: Search, title: 'Search', desc: 'Browse 12,000+ verified vehicles online' },
  { icon: MessageSquare, title: 'Inquiry', desc: 'Contact our export specialists directly' },
  { icon: Users, title: 'Negotiate', desc: 'Get the best price with our team\'s help' },
  { icon: CreditCard, title: 'Payment', desc: 'Secure escrow protects your deposit' },
  { icon: Ship, title: 'Shipping', desc: 'We handle logistics door-to-port' },
  { icon: PackageCheck, title: 'Receive', desc: 'Take delivery with full documentation' }
]
</script>

<style scoped>
.steps {
  background: #fff;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #008600;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
  margin: 0 0 12px 0;
}

.section-sub {
  font-size: 16px;
  color: #6B7280;
  margin: 0;
}

.timeline-wrap {
  position: relative;
}

.track-line {
  position: absolute;
  top: 24px;
  left: calc(100% / 12);
  right: calc(100% / 12);
  height: 2px;
  background: #008600;
  z-index: 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  position: relative;
  z-index: 1;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 8px;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #008600;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 0 4px #fff, 0 0 0 6px rgba(0, 134, 0, 0.2);
  flex-shrink: 0;
}

.step-icon-wrap {
  margin-top: 20px;
  margin-bottom: 12px;
  color: #9CA3AF;
}

.step-title {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 6px 0;
}

.step-desc {
  font-size: 12px;
  color: #9CA3AF;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 768px) {
  .track-line {
    display: none;
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 16px;
  }
}
</style>
