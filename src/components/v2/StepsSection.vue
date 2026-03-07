<template>
  <section class="steps" id="how">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Route :size="14" /> How It Works</div>
        <h2 class="section-title">6 Steps to Your Vehicle</h2>
        <p class="section-subtitle">A streamlined process from search to delivery, with support at every stage.</p>
      </div>
      <div class="steps-grid">
        <div class="step">
          <div class="step-num">1</div>
          <h4>Search</h4>
          <p>Browse inventory or tell us what you need</p>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <h4>Inquiry</h4>
          <p>Get detailed specs, photos & reports</p>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <h4>Negotiate</h4>
          <p>Our team helps you get the best deal</p>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <h4>Payment</h4>
          <p>Secure escrow with buyer protection</p>
        </div>
        <div class="step">
          <div class="step-num">5</div>
          <h4>Shipping</h4>
          <p>We handle all export docs & logistics</p>
        </div>
        <div class="step">
          <div class="step-num">6</div>
          <h4>Receive</h4>
          <p>Vehicle delivered to your port or door</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Route } from 'lucide-vue-next'
</script>

<style scoped>
.steps {
  padding: 80px 0;
  background: #fff;
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #008600;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -.02em;
}

.section-subtitle {
  font-size: 16px;
  color: #6B7280;
  max-width: 560px;
  margin: 12px auto 0;
  line-height: 1.7;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.step {
  text-align: center;
  position: relative;
  padding: 24px 8px;
}

.step-num {
  width: 48px;
  height: 48px;
  background: #008600;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
}

.step h4 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
}

.step p {
  font-size: 12px;
  color: #9CA3AF;
  line-height: 1.5;
}

.step::after {
  content: '';
  position: absolute;
  top: 47px;
  left: calc(50% + 30px);
  width: calc(100% - 60px);
  height: 2px;
  background: #E5E7EB;
}

.step:last-child::after {
  display: none;
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .step:nth-child(3)::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .step::after {
    display: none;
  }
}
</style>
