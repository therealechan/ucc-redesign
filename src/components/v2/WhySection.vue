<template>
  <section class="why" id="about">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Trophy :size="14" /> Why UCC VIP</div>
        <h2 class="section-title">Built for Global Auto Trade</h2>
        <p class="section-subtitle">We've shipped thousands of vehicles to dealers and buyers across 60+ countries.</p>
      </div>
      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon"><Globe :size="32" /></div>
          <h3>Wide Selection</h3>
          <p>12,000+ vehicles from 200+ brands across China's top dealer networks.</p>
        </div>
        <div class="why-card">
          <div class="why-icon"><ScrollText :size="32" /></div>
          <h3>Certified Export</h3>
          <p>Full export documentation, customs clearance, and regulatory compliance.</p>
        </div>
        <div class="why-card">
          <div class="why-icon"><Microscope :size="32" /></div>
          <h3>Quality Inspection</h3>
          <p>Every vehicle passes a 200-point certified inspection before listing.</p>
        </div>
        <div class="why-card">
          <div class="why-icon"><Package :size="32" /></div>
          <h3>Bulk Sourcing</h3>
          <p>Special pricing and dedicated account management for fleet buyers.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Trophy, Globe, ScrollText, Microscope, Package } from 'lucide-vue-next'
</script>

<style scoped>
.why {
  padding: 80px 0;
  background: linear-gradient(135deg, #001a00, #003300);
  color: #fff;
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
  color: #4ADE80;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #fff;
  letter-spacing: -.02em;
}

.section-subtitle {
  font-size: 16px;
  color: rgba(255,255,255,.6);
  max-width: 560px;
  margin: 12px auto 0;
  line-height: 1.7;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.why-card {
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 16px;
  padding: 32px 24px;
  transition: all .3s;
}

.why-card:hover {
  background: rgba(255,255,255,.1);
  transform: translateY(-4px);
}

.why-icon {
  color: #4ADE80;
  margin-bottom: 16px;
}

.why-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.why-card p {
  font-size: 14px;
  color: rgba(255,255,255,.6);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>
