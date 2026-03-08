<template>
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Layers :size="13" /> Our Services</div>
        <h2 class="section-title">End-to-End Export Solutions</h2>
        <p class="section-subtitle">From sourcing to delivery, we handle every step of the cross-border vehicle trading process.</p>
      </div>
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index" ref="serviceCards">
          <div class="service-icon">
            <component :is="service.icon" :size="22" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Layers, Search, ClipboardCheck, FileText, Ship } from 'lucide-vue-next'

const serviceCards = ref([])
let observer = null

const services = [
  { icon: Search, title: 'Vehicle Sourcing', desc: "Access China's largest network of certified dealers with real-time inventory and direct pricing." },
  { icon: ClipboardCheck, title: 'Inspection & Certification', desc: '200-point inspection with certified export documentation for every vehicle we list.' },
  { icon: FileText, title: 'Export Documentation', desc: 'Complete customs clearance, title transfer, and regulatory compliance — handled end-to-end.' },
  { icon: Ship, title: 'International Logistics', desc: 'Door-to-port and door-to-door shipping to 60+ countries. Track every shipment in real time.' }
]

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1'
        e.target.style.transform = 'translateY(0)'
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })

  serviceCards.value.forEach(el => {
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, background .25s, box-shadow .3s'
      observer.observe(el)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.services {
  padding: 100px 0;
  background: var(--bg-alt);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.service-card {
  background: var(--surface);
  padding: 40px 32px;
  transition: background 0.25s;
  position: relative;
  overflow: hidden;
}

.service-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--green), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.service-card:hover {
  background: var(--surface-2);
}

.service-card:hover::after {
  opacity: 1;
}

.service-icon {
  width: 52px;
  height: 52px;
  background: var(--green-glow-sm);
  border: 1px solid var(--green-border);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-bright);
  margin-bottom: 24px;
  transition: all 0.3s;
}

.service-card:hover .service-icon {
  background: var(--green);
  color: #fff;
  border-color: var(--green);
  box-shadow: var(--shadow-green);
}

.service-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
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
