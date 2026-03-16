<template>
  <section class="why">
    <!-- Stats row -->
    <div class="stats-row">
      <div v-for="(stat, i) in stats" :key="i" class="stat-item" :class="{ 'no-border': i === stats.length - 1 }">
        <span class="stat-number">{{ stat.number }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <!-- Trust grid -->
    <div class="container">
      <div class="trust-grid">
        <div v-for="(point, i) in trustPoints" :key="i" class="trust-card">
          <CheckCircle :size="24" color="#fff" />
          <div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const stats = [
  { number: '12,000+', label: 'Vehicles Available' },
  { number: '60+', label: 'Countries Served' },
  { number: '8+', label: 'Years Experience' },
  { number: '200+', label: 'Brand Partners' }
]

const trustPoints = [
  {
    title: 'Certified Vehicles',
    desc: 'Every vehicle passes our rigorous 200-point certification process before listing.'
  },
  {
    title: 'Secure Payment',
    desc: 'Escrow protection ensures your money is safe for every transaction.'
  },
  {
    title: 'Global Shipping',
    desc: 'Real-time tracking from our China warehouses to your door, anywhere in the world.'
  },
  {
    title: 'After-Sales Support',
    desc: 'Dedicated customer success team available for 12 months post-delivery.'
  }
]
</script>

<style scoped>
.why {
  background: #008600;
  padding: 80px 0;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 0 auto 64px;
  padding: 0 24px;
}

.stat-item {
  text-align: center;
  padding: 24px 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item.no-border {
  border-right: none;
}

.stat-number {
  display: block;
  font-size: 64px;
  font-weight: 800;
  color: #fff;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.stat-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.trust-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: background 0.2s;
}

.trust-card:hover {
  background: rgba(255, 255, 255, 0.15);
}

.trust-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px 0;
}

.trust-card p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .stat-item.no-border {
    border-bottom: none;
  }

  .stat-number {
    font-size: 42px;
  }

  .trust-grid {
    grid-template-columns: 1fr;
  }
}
</style>
