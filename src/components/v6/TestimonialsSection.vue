<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle">Thousands of happy drivers and counting.</p>
      </div>
      <div class="testimonials-grid">
        <div v-for="review in reviews" :key="review.name" class="review-card">
          <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="review-text">"{{ review.text }}"</p>
          <div class="reviewer">
            <div class="reviewer-avatar">{{ review.name.charAt(0) }}</div>
            <div class="reviewer-info">
              <div class="reviewer-name">{{ review.name }}</div>
              <div class="reviewer-vehicle">{{ review.vehicle }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Marcus T.',
    vehicle: 'Bought a 2021 Toyota Camry',
    text: 'UCC made the whole process incredibly easy. The price listed online was exactly what I paid — no last-minute add-ons or pressure tactics. The car was in perfect condition, just like the photos. I drove two hours to pick it up and it was absolutely worth it.',
  },
  {
    name: 'Sarah M.',
    vehicle: 'Bought a 2022 Honda CR-V',
    text: 'I was nervous about buying a used car online but UCC completely changed my mind. The CarFax report was right there on the listing, the 7-day return policy gave me real peace of mind, and the whole transaction took less than an hour at the lot. Highly recommend.',
  },
  {
    name: 'Derek W.',
    vehicle: 'Bought a 2020 Ford F-150',
    text: 'Got pre-qualified in minutes and locked in a great rate. The truck had just passed their 150-point inspection and it showed — everything worked perfectly. The staff answered all my questions without any of that classic high-pressure dealer energy. Refreshing.',
  },
]
</script>

<style scoped>
.testimonials-section {
  padding: 80px 0;
  background: #f3f4f6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.section-header {
  text-align: center;
  margin-bottom: 52px;
}

.section-title {
  font-size: clamp(26px, 3.5vw, 38px);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  margin: 0 0 12px;
}

.section-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.review-card {
  background: #ffffff;
  border-radius: var(--radius-lg, 14px);
  padding: 32px 28px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stars {
  font-size: 18px;
  color: #f59e0b;
  letter-spacing: 2px;
}

.review-text {
  font-size: 14px;
  line-height: 1.75;
  color: #374151;
  margin: 0;
  flex: 1;
}

.reviewer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}

.reviewer-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--green, #008600);
  color: #fff;
  font: 700 16px/42px 'Inter', sans-serif;
  text-align: center;
  flex-shrink: 0;
}

.reviewer-name {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
}

.reviewer-vehicle {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 56px 0;
  }

  .container {
    padding: 0 16px;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
