<template>
  <section class="hero">
    <div class="hero-grid">
      <!-- Left Panel -->
      <div class="hero-left">
        <div class="hero-content">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            Exporting Chinese Vehicles Worldwide
          </div>
          <h1 class="hero-title">
            Drive the Future,<br />
            Ship it <span class="green">Home.</span>
          </h1>
          <p class="hero-sub">
            Access China's largest certified used vehicle export network.
            12,000+ vehicles, 60+ countries.
          </p>
          <div class="hero-ctas">
            <a href="#" class="btn-primary">Browse Inventory</a>
            <a href="#" class="btn-ghost">
              How It Works
              <ArrowRight :size="16" />
            </a>
          </div>
          <div class="trust-strip">
            <div class="trust-item">
              <div class="stars">
                <Star v-for="i in 5" :key="i" :size="14" fill="#F59E0B" color="#F59E0B" />
              </div>
              <span>4.9/5 from 2,400+ buyers</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <ShieldCheck :size="16" color="#008600" />
              <span>Verified Export Partner</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <div class="hero-right">
        <div class="dot-grid"></div>
        <div class="image-wrapper">
          <div class="stat-chip top-left">
            <span class="stat-number">12K+</span>
            <span class="stat-label">Vehicles</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
            alt="Vehicle"
            class="hero-img"
          />
          <div class="stat-chip bottom-right green-chip">
            <span class="stat-number">60+</span>
            <span class="stat-label">Countries</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Star, ShieldCheck } from 'lucide-vue-next'
</script>

<style scoped>
.hero {
  background: #fff;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  min-height: calc(100vh - 68px);
}

.hero-left {
  display: flex;
  align-items: center;
  padding: 60px 48px 60px 80px;
}

.hero-content {
  max-width: 560px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 134, 0, 0.08);
  color: #008600;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px 6px 10px;
  border-radius: 100px;
  margin-bottom: 28px;
  letter-spacing: 0.2px;
}

.eyebrow-dot {
  width: 8px;
  height: 8px;
  background: #008600;
  border-radius: 50%;
  flex-shrink: 0;
}

.hero-title {
  font-size: clamp(60px, 6vw, 88px);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -2px;
  color: #111827;
  margin: 0 0 24px 0;
}

.hero-title .green {
  color: #008600;
}

.hero-sub {
  font-size: 17px;
  color: #6B7280;
  line-height: 1.65;
  margin: 0 0 36px 0;
  max-width: 460px;
}

.hero-ctas {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.btn-primary {
  background: #008600;
  color: #fff;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 14px rgba(0, 134, 0, 0.3);
}

.btn-primary:hover {
  background: #006a00;
  transform: translateY(-2px);
}

.btn-ghost {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #374151;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.btn-ghost:hover {
  color: #008600;
}

.trust-strip {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 32px;
  border-top: 1px solid #F3F4F6;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6B7280;
  font-weight: 500;
}

.stars {
  display: flex;
  gap: 2px;
}

.trust-divider {
  width: 1px;
  height: 28px;
  background: #E5E7EB;
}

/* Right Panel */
.hero-right {
  background: #F5F5F5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  overflow: hidden;
}

.dot-grid {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40%;
  background-image: radial-gradient(circle, #D1D5DB 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.5;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 520px;
}

.hero-img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  border-left: 4px solid #008600;
  display: block;
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
}

.stat-chip {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 18px;
  border-radius: 14px;
  min-width: 90px;
}

.stat-chip.top-left {
  top: -14px;
  left: -14px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.stat-chip.bottom-right {
  bottom: -14px;
  right: -14px;
}

.stat-chip.green-chip {
  background: #008600;
}

.stat-number {
  font-size: 18px;
  font-weight: 800;
  color: #111827;
  line-height: 1;
}

.green-chip .stat-number,
.green-chip .stat-label {
  color: #fff;
}

.stat-label {
  font-size: 11px;
  font-weight: 500;
  color: #6B7280;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-left {
    padding: 48px 24px 40px;
    order: 1;
  }

  .hero-right {
    min-height: 280px;
    padding: 32px 24px;
    order: 0;
  }

  .hero-title {
    font-size: 44px;
    letter-spacing: -1px;
  }

  .hero-content {
    max-width: 100%;
  }
}
</style>
