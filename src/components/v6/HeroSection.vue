<template>
  <section class="hero-v2">
    <div class="hero-bg">
      <img src="/hero-v6.webp" alt="BYD electric vehicles ready for export at port">
    </div>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1>Quality Cars from China, <em>Shipped Worldwide</em></h1>
        <div class="hero-actions">
          <a href="#vehicles" class="btn btn-primary btn-lg"><Search :size="18" /> Browse Vehicles</a>
          <a href="#how" class="btn btn-ghost btn-lg"><PlayCircle :size="18" /> How It Works</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><span class="num">12K+</span><span class="lbl">Vehicles</span></div>
          <div class="hero-stat"><span class="num">60+</span><span class="lbl">Countries</span></div>
          <div class="hero-stat"><span class="num">200+</span><span class="lbl">Brands</span></div>
          <div class="hero-stat"><span class="num">500+</span><span class="lbl">Dealers</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, PlayCircle } from 'lucide-vue-next'
</script>

<style scoped>
.hero-v2 {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-v2 .hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-v2 .hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-v2 .hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,20,0,.85) 0%, rgba(0,20,0,.65) 50%, rgba(0,20,0,.3) 100%);
  z-index: 1;
}

.hero-v2 .container {
  position: relative;
  z-index: 2;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.hero-v2 .hero-content {
  max-width: 600px;
  color: #fff;
}

.hero-v2 h1 {
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 900;
  line-height: 1.08;
  margin-bottom: 20px;
  letter-spacing: -.03em;
}

.hero-v2 h1 em {
  font-style: normal;
  color: #4ADE80;
}

.hero-v2 .hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 0;
  max-width: 520px;
}

.hero-stat {
  flex: 1;
  text-align: center;
  padding: 0 16px;
  border-right: 1px solid rgba(255,255,255,.15);
}

.hero-stat:last-child {
  border: none;
}

.hero-stat .num {
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  display: block;
}

.hero-stat .lbl {
  font-size: 11px;
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-top: 2px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font: 600 14px/1 'Inter', sans-serif;
  border: none;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.btn-primary {
  background: #008600;
  color: #fff;
}

.btn-primary:hover {
  background: #006B00;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
}

.btn-ghost {
  background: rgba(255,255,255,.15);
  color: #fff;
  border: 1px solid rgba(255,255,255,.25);
}

.btn-ghost:hover {
  background: rgba(255,255,255,.25);
}

.btn-lg {
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .hero-v2 {
    min-height: 500px;
  }
  .hero-v2 h1 {
    font-size: 32px;
  }
  .hero-stats {
    flex-wrap: wrap;
    gap: 16px;
  }
  .hero-stat {
    flex: none;
    width: calc(50% - 8px);
    border: none;
    padding: 8px 0;
  }
}
</style>
