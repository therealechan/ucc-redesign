<template>
  <section class="why-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose UCC?</h2>
        <p class="section-subtitle">We make buying a used car simple, transparent, and stress-free.</p>
      </div>
      <div class="why-grid">
        <div v-for="card in cards" :key="card.title" class="why-card">
          <span class="why-icon">
            <component :is="card.icon" :size="30" />
          </span>
          <h3 class="why-title">{{ card.title }}</h3>
          <p class="why-desc">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Tag, ShieldCheck, Headphones } from 'lucide-vue-next'

const cards = [
  {
    icon: Tag,
    title: 'Transparent Pricing',
    desc: 'Every vehicle is listed with a clear, no-haggle price. No hidden fees, no last-minute surprises — just straightforward deals you can trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Vehicles',
    desc: 'Each car goes through a rigorous 150-point inspection before hitting our lot. We only sell vehicles we\'d be proud to drive ourselves.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: 'Our team of auto specialists is here to guide you from search to keys. Real people, real answers — available 7 days a week.',
  },
]
</script>

<style scoped>
.why-section {
  padding: 80px 0;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-title {
  font-size: clamp(26px, 3.5vw, 38px);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  margin: 0 0 12px;
}

.section-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.why-card {
  background: #f7f8fa;
  border: 1.5px solid rgba(0, 0, 0, 0.07);
  border-radius: var(--radius-lg, 14px);
  padding: 36px 28px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.why-card:hover {
  border-color: rgba(0, 134, 0, 0.3);
  box-shadow: 0 4px 16px rgba(0, 134, 0, 0.08);
}

.why-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  background: rgba(0, 134, 0, 0.08);
  border-radius: var(--radius, 10px);
  color: var(--green, #008600);
  margin-bottom: 20px;
}

.why-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
}

.why-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .why-section {
    padding: 56px 0;
  }

  .container {
    padding: 0 16px;
  }

  .why-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
