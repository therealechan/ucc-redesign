<template>
  <section class="trust-section">
    <div class="container">
      <div class="trust-grid">
        <div v-for="item in items" :key="item.title" class="trust-item">
          <span class="trust-icon">
            <component :is="item.icon" :size="28" />
          </span>
          <div class="trust-text">
            <div class="trust-title">{{ item.title }}</div>
            <div class="trust-sub">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, CheckCircle, RotateCcw, FileText } from 'lucide-vue-next'

const items = [
  {
    icon: Shield,
    title: 'No-Haggle Pricing',
    subtitle: 'The price you see is the price you pay',
  },
  {
    icon: CheckCircle,
    title: '150-Point Inspection',
    subtitle: 'Every vehicle certified by our technicians',
  },
  {
    icon: RotateCcw,
    title: '7-Day Return',
    subtitle: 'Change your mind? Return it, no questions asked',
  },
  {
    icon: FileText,
    title: 'Free CarFax Report',
    subtitle: 'Full history on every vehicle',
  },
]
</script>

<style scoped>
.trust-section {
  background: rgba(0, 134, 0, 0.06);
  padding: 48px 0;
  border-top: 1px solid rgba(0, 134, 0, 0.12);
  border-bottom: 1px solid rgba(0, 134, 0, 0.12);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.trust-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.trust-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: #ffffff;
  border-radius: var(--radius, 10px);
  color: var(--green, #008600);
  border: 1px solid rgba(0, 134, 0, 0.18);
}

.trust-title {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.trust-sub {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .trust-grid {
    grid-template-columns: 1fr;
  }
}
</style>
