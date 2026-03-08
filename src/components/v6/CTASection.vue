<template>
  <section class="cta">
    <div class="container">
      <div class="cta-grid">
        <!-- Card 1: Browse -->
        <div class="cta-card cta-primary">
          <div class="cta-icon"><Search :size="28" /></div>
          <h3>Find Your Perfect Car</h3>
          <p>Search thousands of quality-certified used vehicles in your area. No haggling, no surprises.</p>
          <a href="#" class="btn btn-white">Browse Inventory</a>
        </div>

        <!-- Card 2: Finance -->
        <div class="cta-card cta-secondary">
          <div class="cta-icon"><BadgeCheck :size="28" /></div>
          <h3>Get Pre-Qualified Today</h3>
          <p>Check your financing options in minutes with no impact to your credit score. Flexible terms available.</p>
          <a href="#" class="btn btn-green">Get Pre-Qualified</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, BadgeCheck } from 'lucide-vue-next'
</script>

<style scoped>
.cta {
  padding: 80px 0;
  background: #f0f4f0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.cta-card {
  border-radius: 20px;
  padding: 52px 44px;
  position: relative;
  overflow: hidden;
}

/* Decorative circles */
.cta-card::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 50%;
}

.cta-card::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -40px;
  width: 180px;
  height: 180px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 50%;
}

.cta-primary {
  background: linear-gradient(135deg, #004d00 0%, #007a00 60%, #009400 100%);
}

.cta-secondary {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.cta-primary .cta-icon {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.cta-secondary .cta-icon {
  background: rgba(0, 134, 0, 0.08);
  color: var(--green, #008600);
}

.cta-card h3 {
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 12px;
  position: relative;
  z-index: 1;
  letter-spacing: -0.02em;
}

.cta-primary h3 {
  color: #fff;
}

.cta-secondary h3 {
  color: #1a1a1a;
}

.cta-card p {
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 28px;
  position: relative;
  z-index: 1;
}

.cta-primary p {
  color: rgba(255, 255, 255, 0.78);
}

.cta-secondary p {
  color: #6b7280;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 12px;
  font: 700 14px/1 'Inter', sans-serif;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  z-index: 1;
}

.btn-white {
  background: #fff;
  color: #1a1a1a;
}

.btn-white:hover {
  background: #f3f4f6;
  transform: translateY(-1px);
}

.btn-green {
  background: var(--green, #008600);
  color: #fff;
}

.btn-green:hover {
  background: var(--green-mid, #007000);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 134, 0, 0.3);
}

@media (max-width: 768px) {
  .cta {
    padding: 56px 0;
  }

  .container {
    padding: 0 16px;
  }

  .cta-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 36px 28px;
  }
}
</style>
