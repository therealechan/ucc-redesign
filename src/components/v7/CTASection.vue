<template>
  <section class="cta">
    <div class="container">
      <span class="cta-eyebrow">GET STARTED TODAY</span>
      <h2 class="cta-title">
        Ready to import<br />your dream car?
      </h2>
      <p class="cta-sub">
        Join 2,400+ satisfied buyers across 60+ countries. Certified. Insured. Delivered.
      </p>
      <div class="cta-buttons">
        <a href="#" class="btn-primary">Browse Inventory</a>
        <a href="#" class="btn-outline">Contact Us</a>
      </div>
    </div>

    <div class="green-band">
      <div class="band-inner">
        <div v-for="(item, i) in bandItems" :key="i" class="band-item">
          <CheckCircle :size="16" color="#fff" />
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const bandItems = [
  'Certified Vehicles',
  'Secure Payment',
  'Global Shipping',
  'After-Sales Support'
]
</script>

<style scoped>
.cta {
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 80px;
  text-align: center;
}

.cta-eyebrow {
  display: inline-block;
  background: rgba(0, 134, 0, 0.08);
  color: #008600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.cta-title {
  font-size: clamp(40px, 4vw, 56px);
  font-weight: 900;
  color: #111827;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0 0 20px 0;
}

.cta-sub {
  font-size: 17px;
  color: #6B7280;
  line-height: 1.65;
  max-width: 500px;
  margin: 0 auto 40px;
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background: #008600;
  color: #fff;
  padding: 16px 36px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 6px 20px rgba(0, 134, 0, 0.3);
}

.btn-primary:hover {
  background: #006a00;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid #E5E7EB;
  color: #374151;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-outline:hover {
  border-color: #008600;
  color: #008600;
}

.green-band {
  background: #008600;
  padding: 20px 24px;
}

.band-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.band-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .band-inner {
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
