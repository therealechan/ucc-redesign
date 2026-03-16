<template>
  <section class="cta-section">
    <div class="container">
      <span class="cta-label">GET STARTED</span>
      <h2 class="cta-h2">Ready to find your<br />next vehicle?</h2>
      <p class="cta-sub">Join thousands of importers who trust UCC VIP.</p>
      <div class="cta-buttons">
        <a href="#" class="btn-white">Browse Inventory</a>
        <a href="#" class="btn-outline">Contact Us</a>
      </div>
      <div class="trust-row">
        <span v-for="(item, i) in trustItems" :key="i" class="trust-item">
          <CheckCircle :size="16" class="check-icon" />
          {{ item }}
          <span v-if="i < trustItems.length - 1" class="sep">·</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const trustItems = ['Certified Vehicles', 'Secure Payment', 'Global Shipping', 'After-Sales']
</script>

<style scoped>
.cta-section {
  background: #008600;
  padding: 120px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.cta-label {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 28px;
}

.cta-h2 {
  font-size: 56px;
  font-weight: 900;
  letter-spacing: -2px;
  color: #fff;
  line-height: 1.05;
  margin: 0 0 20px 0;
}

.cta-sub {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 40px 0;
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.btn-white {
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #008600;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.btn-white:hover {
  background: #F0FDF0;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.05);
}

.trust-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.check-icon {
  color: rgba(255, 255, 255, 0.6);
}

.sep {
  color: rgba(255, 255, 255, 0.4);
  margin-left: 8px;
}

@media (max-width: 768px) {
  .cta-h2 {
    font-size: 40px;
  }
}
</style>
