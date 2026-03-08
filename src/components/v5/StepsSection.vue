<template>
  <section class="steps" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Route :size="13" /> How It Works</div>
        <h2 class="section-title">6 Steps to Your Vehicle</h2>
        <p class="section-subtitle">A streamlined process from search to delivery, with support at every stage.</p>
      </div>
      <div class="steps-grid">
        <div class="step-card" v-for="(step, index) in steps" :key="index" ref="stepCards">
          <div class="step-num">{{ step.num }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Route } from 'lucide-vue-next'

const stepCards = ref([])
let observer = null

const steps = [
  { num: 1, title: 'Search', desc: "Browse our inventory or tell us exactly what you need — we'll source it." },
  { num: 2, title: 'Inquiry', desc: 'Receive detailed specs, high-res photos, and certified inspection reports.' },
  { num: 3, title: 'Negotiate', desc: 'Our team works on your behalf to secure the best possible deal.' },
  { num: 4, title: 'Payment', desc: 'Secure escrow payment with full buyer protection throughout.' },
  { num: 5, title: 'Shipping', desc: 'We handle all export documentation and international logistics.' },
  { num: 6, title: 'Receive', desc: 'Vehicle delivered to your port or door — exactly as described.' }
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

  stepCards.value.forEach(el => {
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
.steps {
  padding: 100px 0;
  background: var(--bg-alt);
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0, 80, 0, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;
}

/* connector line */
.steps-grid::before {
  content: '';
  position: absolute;
  top: 38px;
  left: calc(100%/6);
  right: calc(100%/6);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--green-border) 20%, var(--green-border) 80%, transparent);
  z-index: 0;
}

.step-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px 28px 28px;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}

.step-card:hover {
  border-color: var(--green-border);
  background: var(--surface-2);
}

.step-num {
  width: 52px;
  height: 52px;
  background: var(--surface-2);
  border: 2px solid var(--green-border);
  border-radius: 50%;
  color: var(--green-bright);
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.3s;
  position: relative;
}

.step-card:first-child .step-num,
.step-card:hover .step-num {
  background: var(--green);
  color: #fff;
  border-color: var(--green);
  box-shadow: 0 0 20px rgba(0, 134, 0, 0.35);
}

.step-card h4 {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.step-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps-grid::before {
    display: none;
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
