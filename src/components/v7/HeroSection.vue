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
        <img :src="images[current]" alt="Vehicle" class="hero-img" />
        <!-- Image switcher dots -->
        <div class="img-switcher">
          <button
            v-for="(img, i) in images"
            :key="i"
            class="dot"
            :class="{ active: current === i }"
            @click="current = i"
          />
        </div>
        <!-- Prev/Next arrows -->
        <button class="arrow arrow-prev" @click="prev"><ChevronLeft :size="20" /></button>
        <button class="arrow arrow-next" @click="next"><ChevronRight :size="20" /></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight, Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const images = ['/hero-port.webp', '/hero-2.webp']
const current = ref(0)
const prev = () => current.value = (current.value - 1 + images.length) % images.length
const next = () => current.value = (current.value + 1) % images.length
</script>

<style scoped>
.hero {
  background: #fff;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  height: calc(100vh - 68px - 80px);
}

.hero-left {
  display: flex;
  align-items: center;
  padding: 40px 48px 40px 80px;
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

.hero-title .green { color: #008600; }

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
.btn-primary:hover { background: #006a00; transform: translateY(-2px); }

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
.btn-ghost:hover { color: #008600; }

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

.stars { display: flex; gap: 2px; }

.trust-divider {
  width: 1px;
  height: 28px;
  background: #E5E7EB;
}

/* Right Panel */
.hero-right {
  position: relative;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: opacity 0.4s ease;
}

/* Dot switcher */
.img-switcher {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}
.dot.active {
  background: #fff;
  transform: scale(1.3);
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  z-index: 10;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.arrow:hover { background: #fff; }
.arrow-prev { left: 12px; }
.arrow-next { right: 12px; }

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  .hero-left {
    padding: 48px 24px 40px;
    order: 1;
  }
  .hero-right {
    min-height: 280px;
    order: 0;
  }
  .hero-title {
    font-size: 44px;
    letter-spacing: -1px;
  }
  .hero-content { max-width: 100%; }
}
</style>
