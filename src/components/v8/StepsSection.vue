<template>
  <section class="steps-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">THE PROCESS</span>
        <h2 class="section-h2">From search to delivery in 6 steps</h2>
      </div>

      <div class="steps-row">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="step-col"
          :class="{ 'no-line': i === steps.length - 1 }"
        >
          <div class="step-circle">{{ i + 1 }}</div>
          <component :is="step.icon" :size="20" class="step-icon" />
          <div class="step-name">{{ step.name }}</div>
          <div class="step-desc">{{ step.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, MessageSquare, Users, CreditCard, Ship, PackageCheck } from 'lucide-vue-next'

const steps = [
  { icon: Search, name: 'Search', desc: 'Browse 12,000+ verified vehicles by make, model, or budget.' },
  { icon: MessageSquare, name: 'Inquiry', desc: 'Contact our team or request more details on any listing.' },
  { icon: Users, name: 'Negotiate', desc: 'Work with our agents to finalize your best price.' },
  { icon: CreditCard, name: 'Payment', desc: 'Secure payment via escrow. Your funds are protected.' },
  { icon: Ship, name: 'Shipping', desc: 'We handle all export logistics and customs clearance.' },
  { icon: PackageCheck, name: 'Receive', desc: 'Vehicle arrives at your door, ready to register.' }
]
</script>

<style scoped>
.steps-section {
  background: #F8F7F3;
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
  color: #008600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-h2 {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
  margin: 0;
}

.steps-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
}

.step-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 12px;
  position: relative;
}

/* Dashed connecting line between circles */
.step-col:not(.no-line)::after {
  content: '';
  position: absolute;
  top: 25px; /* half of circle height */
  left: 50%;
  width: 100%;
  height: 2px;
  border-top: 2px dashed #D1D5DB;
  z-index: 0;
}

.step-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid #008600;
  color: #008600;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F7F3;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
}

.step-icon {
  color: #9CA3AF;
  margin-bottom: 12px;
}

.step-name {
  font-size: 14px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 6px;
}

.step-desc {
  font-size: 12px;
  color: #6B7280;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .steps-row {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .section-h2 {
    font-size: 32px;
  }

  .step-col::after {
    display: none;
  }

  .step-col {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    gap: 16px;
    padding: 0;
  }

  .step-circle {
    flex-shrink: 0;
    margin-bottom: 0;
  }

  .step-icon {
    display: none;
  }
}
</style>
