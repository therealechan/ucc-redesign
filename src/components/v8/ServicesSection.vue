<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <div class="green-line"></div>
        <span class="section-label">OUR SERVICES</span>
        <h2 class="section-h2">Everything you need,<br />under one roof.</h2>
      </div>

      <div class="services-list">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="service-row"
          :class="{ 'last-row': i === services.length - 1 }"
        >
          <span class="service-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="service-icon-wrap">
            <component :is="service.icon" :size="28" class="service-icon" />
          </div>
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.desc }}</p>
          </div>
          <ArrowUpRight :size="20" class="service-arrow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, ClipboardCheck, FileText, Ship, ArrowUpRight } from 'lucide-vue-next'

const services = [
  {
    icon: Search,
    title: 'Vehicle Sourcing',
    desc: "12,000+ verified vehicles from China's top dealers and manufacturers."
  },
  {
    icon: ClipboardCheck,
    title: 'Inspection & Certification',
    desc: '200-point inspection on every export. Your peace of mind, guaranteed.'
  },
  {
    icon: FileText,
    title: 'Export Documentation',
    desc: 'Customs, title transfer, compliance — all paperwork handled end-to-end.'
  },
  {
    icon: Ship,
    title: 'International Logistics',
    desc: 'Door-to-door delivery to 60+ countries. Real-time shipment tracking.'
  }
]
</script>

<style scoped>
.services-section {
  background: #F8F7F3;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  margin-bottom: 60px;
}

.green-line {
  width: 40px;
  height: 3px;
  background: #008600;
  margin-bottom: 16px;
}

.section-label {
  display: block;
  color: #008600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-h2 {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
  line-height: 1.1;
  margin: 0;
}

.services-list {
  border-top: 1px solid #E5E7EB;
}

.service-row {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 28px 0;
  border-top: 1px solid #E5E7EB;
  transition: background 0.2s ease;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 -16px;
  padding-left: 16px;
  padding-right: 16px;
}

.service-row:first-child {
  border-top: none;
}

.service-row.last-row {
  border-bottom: 1px solid #E5E7EB;
}

.service-row:hover {
  background: #fff;
}

.service-row:hover .service-arrow {
  color: #008600;
}

.service-num {
  font-size: 80px;
  font-weight: 900;
  color: #E8E8E2;
  line-height: 1;
  min-width: 80px;
  text-align: center;
  flex-shrink: 0;
}

.service-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 134, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.service-icon {
  color: #008600;
}

.service-content {
  flex: 1;
  min-width: 0;
}

.service-title {
  font-size: 18px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 6px 0;
}

.service-desc {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  max-width: 480px;
  line-height: 1.6;
}

.service-arrow {
  color: #D1D5DB;
  flex-shrink: 0;
  transition: color 0.2s;
}

@media (max-width: 768px) {
  .section-h2 {
    font-size: 36px;
  }

  .service-row {
    flex-wrap: wrap;
    gap: 16px;
  }

  .service-num {
    display: none;
  }

  .service-content {
    flex: 1 1 calc(100% - 80px);
  }
}
</style>
