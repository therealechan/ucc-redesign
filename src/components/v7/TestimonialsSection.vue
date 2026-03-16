<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-label">TESTIMONIALS</span>
        <h2 class="section-title">What Our Buyers Say</h2>
      </div>

      <div class="cards-grid">
        <div v-for="(t, i) in testimonials" :key="i" class="testi-card">
          <div class="quote-mark">"</div>
          <div class="stars">★★★★★</div>
          <p class="quote-text">{{ t.quote }}</p>
          <div class="testi-footer">
            <div class="avatar">{{ t.name[0] }}</div>
            <div class="testi-meta">
              <span class="testi-name">{{ t.name }}</span>
              <span class="testi-company">{{ t.company }}, {{ t.country }}</span>
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
    quote: "Smooth process from start to finish. The team handled all the paperwork, and my vehicle arrived in Lagos within the estimated timeframe. Will definitely use again.",
    name: 'James Okafor',
    company: 'Lagos Motors',
    country: 'Nigeria'
  },
  {
    quote: "Best Chinese car export experience I've had. The inspection reports were thorough and transparent. Knowing exactly what I was buying gave me total confidence.",
    name: 'Miguel Fernandez',
    company: 'AutoImport Chile',
    country: 'Chile'
  },
  {
    quote: "Transparent pricing and fast shipping. No hidden fees, no surprises. The tracking system is excellent — I knew exactly where my car was at every stage.",
    name: 'Ahmad Al-Rashidi',
    company: 'Gulf Auto Trading',
    country: 'UAE'
  }
]
</script>

<style scoped>
.testimonials {
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
  margin-bottom: 56px;
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
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
  margin: 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testi-card {
  background: #FAFAFA;
  border: 1px solid #F3F4F6;
  border-radius: 16px;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.2s;
}

.testi-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.07);
}

.quote-mark {
  position: absolute;
  top: 20px;
  left: 24px;
  font-size: 80px;
  font-family: 'Georgia', serif;
  color: #ECFDF5;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.stars {
  font-size: 16px;
  color: #F59E0B;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}

.quote-text {
  font-size: 15px;
  color: #374151;
  font-style: italic;
  line-height: 1.75;
  margin: 0;
  flex: 1;
  position: relative;
  z-index: 1;
}

.testi-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid #F3F4F6;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #008600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
}

.testi-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.testi-name {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
}

.testi-company {
  font-size: 12px;
  color: #9CA3AF;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
