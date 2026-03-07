<template>
  <section class="cta">
    <div class="container">
      <div class="cta-grid">
        <div class="cta-card cta-buyer">
          <h3>Start Sourcing Today</h3>
          <p>Browse thousands of certified vehicles ready for export. Get pricing, specs, and inspection reports instantly.</p>
          <a href="#" class="btn btn-white btn-lg"><Search :size="18" /> Browse Vehicles</a>
        </div>
        <div class="cta-card cta-seller">
          <h3>List Your Vehicles</h3>
          <p>Reach international buyers through China's leading cross-border auto trading platform. Free to list.</p>
          <a href="#" class="btn btn-white btn-lg"><Upload :size="18" /> Become a Supplier</a>
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
  padding: 80px 0;
  background: #FAFAFA;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.cta-card {
  border-radius: 24px;
  padding: 48px;
  overflow: hidden;
}

.cta-buyer {
  background: #008600;
  color: #fff;
}

.cta-seller {
  background: #111827;
  color: #fff;
}

.cta-card h3 {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 12px;
}

.cta-card p {
  font-size: 16px;
  opacity: .8;
  margin-bottom: 28px;
  line-height: 1.6;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  font: 600 14px/1 'Inter', sans-serif;
  border: none;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.btn-white {
  background: #fff;
  color: #008600;
  font-weight: 600;
}

.btn-white:hover {
  background: #F9FAFB;
  transform: translateY(-1px);
}

.btn-lg {
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
