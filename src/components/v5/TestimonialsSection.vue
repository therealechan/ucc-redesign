<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><MessageCircle :size="13" /> Testimonials</div>
        <h2 class="section-title">What Our Clients Say</h2>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index" ref="testimonialCards">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">{{ testimonial.initials }}</div>
            <div>
              <div class="testimonial-name">{{ testimonial.name }}</div>
              <div class="testimonial-role">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="trust-strip">
        <div class="trust-badge"><Award :size="24" /> ISO 9001</div>
        <div class="trust-badge"><Building2 :size="24" /> CAAM Member</div>
        <div class="trust-badge"><ShieldCheck :size="24" /> Verified Platform</div>
        <div class="trust-badge"><Lock :size="24" /> Secure Payments</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MessageCircle, Award, Building2, ShieldCheck, Lock } from 'lucide-vue-next'

const testimonialCards = ref([])
let observer = null

const testimonials = [
  {
    initials: 'AK',
    name: 'Ahmed Khalil',
    role: 'Auto Dealer, Dubai UAE',
    text: 'UCC VIP made importing vehicles from China incredibly smooth. The inspection reports gave us full confidence, and the logistics were handled flawlessly. We\'ve sourced over 50 vehicles through them.'
  },
  {
    initials: 'MO',
    name: 'Maria Oliveira',
    role: 'Fleet Manager, São Paulo',
    text: 'We\'ve sourced over 200 vehicles through UCC VIP. Their bulk pricing and dedicated support team have been game-changers for our business. Highly recommend for fleet buyers.'
  },
  {
    initials: 'JN',
    name: 'James Njoroge',
    role: 'Import Agent, Nairobi',
    text: 'The transparency in pricing and the quality of documentation exceeded our expectations. Every vehicle arrived exactly as described. Professional service from start to finish.'
  }
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

  testimonialCards.value.forEach(el => {
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
.testimonials {
  padding: 100px 0;
  background: var(--bg-alt);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

.testimonial-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: all 0.3s;
}

.testimonial-card:hover {
  border-color: var(--green-border);
  background: var(--surface-2);
  transform: translateY(-4px);
}

.testimonial-stars {
  color: var(--green-bright);
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 14px;
  color: var(--text);
  line-height: 1.75;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 14px;
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  background: var(--green-glow-sm);
  border: 1px solid var(--green-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--green-bright);
  flex-shrink: 0;
}

.testimonial-name {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}

.testimonial-role {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 2px;
}

/* Trust badges strip */
.trust-strip {
  display: flex;
  justify-content: center;
  gap: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.trust-badge {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-right: 1px solid var(--border);
  transition: background 0.2s, color 0.2s;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.trust-badge:last-child {
  border-right: none;
}

.trust-badge:hover {
  background: var(--surface-2);
  color: var(--green-bright);
}

.trust-badge svg {
  transition: color 0.2s;
}

@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .trust-strip {
    flex-wrap: wrap;
  }

  .trust-badge {
    flex: 1 0 50%;
  }
}
</style>
