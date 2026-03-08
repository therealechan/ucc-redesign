<template>
  <section class="why" id="about">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Trophy :size="13" /> Why UCC VIP</div>
        <h2 class="section-title">Built for Global Auto Trade</h2>
        <p class="section-subtitle">We've shipped thousands of vehicles to dealers and buyers across 60+ countries.</p>
      </div>
      <div class="why-grid">
        <div class="why-card" v-for="(item, index) in whyItems" :key="index" ref="whyCards">
          <div class="why-icon">
            <component :is="item.icon" :size="26" />
          </div>
          <div class="why-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Trophy, Globe, ScrollText, Microscope, Package } from 'lucide-vue-next'

const whyCards = ref([])
let observer = null

const whyItems = [
  { icon: Globe, title: 'Wide Selection', desc: '12,000+ vehicles from 200+ brands across China\'s top dealer networks — continuously updated.' },
  { icon: ScrollText, title: 'Certified Export', desc: 'Full export documentation, customs clearance, and regulatory compliance for every destination.' },
  { icon: Microscope, title: 'Quality Inspection', desc: 'Every vehicle passes a rigorous 200-point certified inspection before it\'s listed on our platform.' },
  { icon: Package, title: 'Bulk Sourcing', desc: 'Dedicated account management and volume pricing for fleet buyers and wholesale dealers.' }
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

  whyCards.value.forEach(el => {
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, background .3s'
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
.why {
  padding: 100px 0;
  background: var(--bg);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.why-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 36px 32px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.why-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--green), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.why-card:hover {
  border-color: var(--green-border);
  background: var(--surface-2);
}

.why-card:hover::before {
  opacity: 1;
}

.why-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: var(--green-glow-sm);
  border: 1px solid var(--green-border);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-bright);
  transition: all 0.3s;
}

.why-card:hover .why-icon {
  background: var(--green);
  color: #fff;
  border-color: var(--green);
  box-shadow: var(--shadow-green);
}

.why-body h3 {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.why-body p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .why-card {
    flex-direction: column;
  }
}
</style>
