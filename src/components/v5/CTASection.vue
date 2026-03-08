<template>
  <section class="cta">
    <div class="container">
      <div class="cta-grid">
        <div class="cta-card cta-buyer">
          <h3>Start Sourcing Today</h3>
          <p>Browse thousands of certified vehicles ready for export. Get pricing, specs, and inspection reports instantly.</p>
          <a href="#" class="btn btn-white btn-lg"><Search :size="17" /> Browse Vehicles</a>
        </div>
        <div class="cta-card cta-seller">
          <h3>List Your Vehicles</h3>
          <p>Reach international buyers through China's leading cross-border auto trading platform. Free to list.</p>
          <a href="#" class="btn cta-seller-btn btn-lg"><Upload :size="17" /> Become a Supplier</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, Upload } from 'lucide-vue-next'
</script>

<style scoped>
.cta {
  padding: 100px 0;
  background: var(--bg-alt);
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.cta-card {
  border-radius: var(--radius-2xl);
  padding: 56px 48px;
  position: relative;
  overflow: hidden;
}

.cta-buyer {
  background: linear-gradient(135deg, #004d00 0%, #007a00 60%, #009400 100%);
}

.cta-seller {
  background: #ffffff;
  border: 1px solid var(--border-md);
}

.cta-card::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 220px;
  height: 220px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.cta-card::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -40px;
  width: 180px;
  height: 180px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.cta-card h3 {
  font-size: 26px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}

.cta-card p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}

.cta-card .btn {
  position: relative;
  z-index: 1;
}

.cta-seller h3 {
  color: #1a1a1a;
}

.cta-seller p {
  color: #555;
}

.cta-seller-btn {
  background: var(--green);
  color: #fff;
  border: none;
}

.cta-seller-btn:hover {
  background: var(--green-mid);
  box-shadow: var(--shadow-green);
}

@media (max-width: 1024px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
