<template>
  <section class="why-section">
    <!-- Stats Row -->
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-cell">
        <div class="stat-num">{{ stat.num }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Trust Points -->
    <div class="trust-grid">
      <div v-for="(point, i) in trustPoints" :key="i" class="trust-cell">
        <div class="trust-icon-wrap">
          <component :is="point.icon" :size="24" class="trust-icon" />
        </div>
        <div class="trust-content">
          <div class="trust-title">{{ point.title }}</div>
          <div class="trust-desc">{{ point.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheck, Globe, Award, Headphones } from 'lucide-vue-next'

const stats = [
  { num: '12,000+', label: 'Vehicles' },
  { num: '60+', label: 'Countries' },
  { num: '8+', label: 'Years' },
  { num: '200+', label: 'Brands' }
]

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified & Certified',
    desc: 'Every vehicle undergoes a 200-point inspection before export. No surprises.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    desc: 'Established logistics partnerships across 60+ destination countries.'
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    desc: "Recognized as China's top vehicle export platform for 3 consecutive years."
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Dedicated account managers guide you from inquiry to delivery.'
  }
]
</script>

<style scoped>
.why-section {
  background: #111111;
  color: #fff;
}

/* STATS */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-cell {
  padding: 60px 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-cell:last-child {
  border-right: none;
}

.stat-num {
  font-size: 72px;
  font-weight: 900;
  color: #008600;
  line-height: 1;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

/* TRUST POINTS */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.trust-cell {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 48px 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.trust-cell:nth-child(2n) {
  border-right: none;
}

.trust-cell:nth-child(n+3) {
  border-bottom: none;
}

.trust-icon-wrap {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0, 134, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-icon {
  color: #008600;
}

.trust-title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.trust-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-cell {
    padding: 40px 24px;
  }

  .stat-num {
    font-size: 48px;
  }

  .trust-grid {
    grid-template-columns: 1fr;
  }

  .trust-cell {
    border-right: none;
    padding: 32px 24px;
  }

  .trust-cell:nth-child(n+3) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .trust-cell:last-child {
    border-bottom: none;
  }
}
</style>
