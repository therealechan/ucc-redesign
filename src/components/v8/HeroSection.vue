<template>
  <section class="hero">
    <div class="hero-left">
      <span class="hero-label">China's #1 Vehicle Export Platform</span>
      <h1 class="hero-h1">
        Find Your<br />
        <span class="dream-word">Dream</span> Car.
      </h1>
      <p class="hero-sub">12,000+ certified vehicles. 60+ countries. Shipped from China to your door.</p>
      <div class="hero-cta-row">
        <a href="#" class="btn-primary">Browse Inventory</a>
        <a href="#" class="btn-ghost">
          <PlayCircle :size="20" />
          Watch How It Works
        </a>
      </div>
      <div class="hero-trust">
        <div class="trust-avatars">
          <div class="avatar-circle">JL</div>
          <div class="avatar-circle">KM</div>
          <div class="avatar-circle">SR</div>
        </div>
        <span class="trust-text">2,400+ happy importers</span>
      </div>
    </div>

    <div class="hero-right">
      <img src="/hero-port.webp" alt="Vehicle" class="hero-img" />
      <div class="hero-overlay"></div>
    </div>
  </section>
</template>

<script setup>
import { PlayCircle } from 'lucide-vue-next'
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #F8F7F3;
  overflow: hidden;
  position: relative;
}

.hero-left {
  padding: 140px 60px 80px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-label {
  display: inline-block;
  background: rgba(0, 134, 0, 0.1);
  color: #008600;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 28px;
  width: fit-content;
}

.hero-h1 {
  font-size: clamp(64px, 7vw, 96px);
  font-weight: 900;
  letter-spacing: -3px;
  line-height: 0.95;
  color: #111111;
  margin: 0 0 28px 0;
}

.dream-word {
  display: inline-block;
  border-bottom: 5px solid #008600;
  padding-bottom: 2px;
}

.hero-sub {
  font-size: 17px;
  color: #6B7280;
  line-height: 1.6;
  max-width: 420px;
  margin: 0 0 36px 0;
}

.hero-cta-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  background: #008600;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #006B00;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #111111;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.btn-ghost:hover {
  color: #008600;
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 12px;
}

.trust-avatars {
  display: flex;
}

.avatar-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #008600;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #F8F7F3;
  margin-left: -8px;
}

.avatar-circle:first-child {
  margin-left: 0;
}

.trust-text {
  font-size: 13px;
  color: #6B7280;
  font-weight: 500;
}

/* RIGHT HALF */
.hero-right {
  position: relative;
  overflow: hidden;
  background: #111111;
  clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.hero-right::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #008600;
  z-index: 2;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(17, 17, 17, 0.6) 0%, rgba(17, 17, 17, 0.1) 60%);
  z-index: 1;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: 40vh auto;
    min-height: 100vh;
  }

  .hero-left {
    order: 2;
    padding: 40px 24px 60px;
  }

  .hero-right {
    order: 1;
    clip-path: none;
    height: 40vh;
  }

  .hero-right::before {
    display: none;
  }

  .hero-h1 {
    font-size: 52px;
    letter-spacing: -2px;
  }
}
</style>
