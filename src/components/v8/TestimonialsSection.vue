<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">TESTIMONIALS</span>
        <h2 class="section-h2">What our buyers say</h2>
      </div>

      <div class="testimonials-grid">
        <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card">
          <div class="quote-mark">"</div>
          <div class="stars">★★★★★</div>
          <p class="quote-text">{{ t.quote }}</p>
          <div class="card-footer">
            <div class="avatar">{{ t.initial }}</div>
            <div class="author-info">
              <div class="author-name">{{ t.name }}</div>
              <div class="author-company">{{ t.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "UCC VIP made importing 3 Toyota Land Cruisers to Tanzania effortless. Their documentation team handled everything — I just paid and received the cars.",
    name: 'James Okonkwo',
    company: 'Lagos Auto Imports',
    initial: 'J'
  },
  {
    quote: "I was skeptical about buying a car from China, but their 200-point inspection report gave me full confidence. The BMW arrived exactly as described.",
    name: 'Mohammed Al-Rashid',
    company: 'Dubai Fleet Solutions',
    initial: 'M'
  },
  {
    quote: "Six BYD EVs for our taxi company in Cape Town. The process took 8 weeks from order to delivery. Incredible service and competitive pricing.",
    name: 'Sarah Dlamini',
    company: 'Cape Town Mobility',
    initial: 'S'
  }
]
</script>

<style scoped>
.testimonials-section {
  background: #fff;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-label {
  display: inline-block;
  color: #008600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-h2 {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
  margin: 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: #F8F7F3;
  border-radius: 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}

.quote-mark {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 80px;
  color: #E8E8E2;
  font-family: Georgia, serif;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.stars {
  font-size: 16px;
  color: #F59E0B;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.quote-text {
  font-size: 15px;
  color: #374151;
  line-height: 1.7;
  font-style: italic;
  margin: 0 0 24px 0;
  position: relative;
  z-index: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #008600;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-name {
  font-size: 14px;
  font-weight: 700;
  color: #111111;
}

.author-company {
  font-size: 12px;
  color: #6B7280;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .section-h2 {
    font-size: 32px;
  }
}
</style>
