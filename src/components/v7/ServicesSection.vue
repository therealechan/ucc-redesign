<template>
  <section class="services">
    <div class="container">
      <div class="section-header">
        <span class="section-label">WHAT WE OFFER</span>
        <h2 class="section-title">Complete Export Solutions,<br />End to End.</h2>
      </div>

      <div class="service-list">
        <div
          v-for="(svc, i) in services"
          :key="i"
          class="service-row"
          :class="{ alt: i % 2 === 1 }"
        >
          <div class="service-inner">
            <span class="deco-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="svc-content">
              <h3>{{ svc.title }}</h3>
              <p>{{ svc.desc }}</p>
            </div>
            <div class="svc-icon-wrap">
              <component :is="svc.icon" :size="28" color="#008600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, ClipboardCheck, FileText, Ship } from 'lucide-vue-next'

const services = [
  {
    icon: Search,
    title: 'Vehicle Sourcing',
    desc: "Access China's largest network of certified dealers with 12,000+ verified vehicles across all segments."
  },
  {
    icon: ClipboardCheck,
    title: 'Inspection & Certification',
    desc: '200-point inspection with certified export documentation, ensuring every vehicle meets international standards.'
  },
  {
    icon: FileText,
    title: 'Export Documentation',
    desc: 'Complete customs clearance, title transfer, and regulatory compliance handled by our in-house experts.'
  },
  {
    icon: Ship,
    title: 'International Logistics',
    desc: 'Door-to-port and door-to-door shipping solutions to 60+ countries with real-time cargo tracking.'
  }
]
</script>

<style scoped>
.services {
  background: #fff;
  padding: 100px 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  margin-bottom: 48px;
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
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 800;
  color: #111827;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 0;
}

.service-list {
  border-top: 1px solid #E5E7EB;
}

.service-row {
  border-bottom: 1px solid #E5E7EB;
  transition: background 0.15s;
}

.service-row.alt {
  background: #F9FAFB;
}

.service-row:hover {
  background: rgba(0, 134, 0, 0.02);
}

.service-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 24px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.deco-number {
  flex-shrink: 0;
  width: 80px;
  text-align: center;
  font-size: 72px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #D1D5DB;
  line-height: 1;
  user-select: none;
}

.svc-icon-wrap {
  width: 64px;
  height: 64px;
  background: rgba(0, 134, 0, 0.06);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.svc-content {
  flex: 1;
}

.svc-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 6px 0;
}

.svc-content p {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0;
  max-width: 520px;
}


@media (max-width: 768px) {
  .service-inner {
    gap: 20px;
  }

  .deco-number {
    width: 48px;
    font-size: 48px;
  }
}
</style>
