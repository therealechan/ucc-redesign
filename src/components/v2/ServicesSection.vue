<template>
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Layers :size="14" /> Our Services</div>
        <h2 class="section-title">End-to-End Export Solutions</h2>
        <p class="section-subtitle">From sourcing to delivery, we handle every step of the cross-border vehicle trading process.</p>
      </div>
      <div class="services-grid">
        <div class="svc-card">
          <div class="svc-icon"><Search :size="24" /></div>
          <h3>Vehicle Sourcing</h3>
          <p>Access China's largest network of certified dealers with real-time inventory.</p>
        </div>
        <div class="svc-card">
          <div class="svc-icon"><ClipboardCheck :size="24" /></div>
          <h3>Inspection & Certification</h3>
          <p>200-point inspection with certified export documentation for every vehicle.</p>
        </div>
        <div class="svc-card">
          <div class="svc-icon"><FileText :size="24" /></div>
          <h3>Export Documentation</h3>
          <p>Complete customs clearance, title transfer, and regulatory compliance.</p>
        </div>
        <div class="svc-card">
          <div class="svc-icon"><Ship :size="24" /></div>
          <h3>International Logistics</h3>
          <p>Door-to-port and door-to-door shipping to 60+ countries worldwide.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Layers, Search, ClipboardCheck, FileText, Ship } from 'lucide-vue-next'
</script>

<style scoped>
.services {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.svc-card {
  background: #F9FAFB;
  border: 1px solid #F3F4F6;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all .3s;
}

.svc-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1);
  border-color: #008600;
  background: #fff;
}

.svc-icon {
  width: 52px;
  height: 52px;
  background: #ECFDF5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #008600;
}

.svc-card:hover .svc-icon {
  background: #008600;
  color: #fff;
}

.svc-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.svc-card p {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
