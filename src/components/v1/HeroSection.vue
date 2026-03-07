<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Trusted by 500+ dealers worldwide</div>
        <h1>Quality Cars from China, <em>Shipped Worldwide</em></h1>
        <p class="hero-desc">Source certified pre-owned vehicles directly from China's largest dealers. Export documentation, inspection, and logistics — all handled.</p>
        
        <div class="hero-search">
          <select>
            <option>Any Brand</option>
            <option>Toyota</option>
            <option>BMW</option>
            <option>Mercedes</option>
            <option>BYD</option>
            <option>NIO</option>
          </select>
          <select>
            <option>Any Type</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck</option>
            <option>EV</option>
          </select>
          <select>
            <option>Budget</option>
            <option>Under $10K</option>
            <option>$10K–$25K</option>
            <option>$25K–$50K</option>
            <option>$50K+</option>
          </select>
          <button class="btn btn-primary"><Search :size="16" /> Search</button>
        </div>
        
        <div class="stats-bar">
          <div class="stat-item"><span class="number">12K+</span><span class="label">Vehicles</span></div>
          <div class="stat-item"><span class="number">60+</span><span class="label">Countries</span></div>
          <div class="stat-item"><span class="number">200+</span><span class="label">Brands</span></div>
          <div class="stat-item"><span class="number">500+</span><span class="label">Dealers</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #001a00 0%, #003300 40%, #004d00 100%);
  color: #fff;
  padding: 80px 0 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0,134,0,.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0,134,0,.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 700px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(0,134,0,.2);
  border: 1px solid rgba(0,134,0,.3);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 24px;
  color: rgba(255,255,255,.9);
}

.hero-badge .dot {
  width: 6px;
  height: 6px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}

.hero h1 {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -.02em;
}

.hero h1 em {
  font-style: normal;
  color: #4ADE80;
}

.hero-desc {
  font-size: 18px;
  color: rgba(255,255,255,.7);
  max-width: 540px;
  margin-bottom: 36px;
  line-height: 1.7;
}

.hero-search {
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 16px;
  padding: 8px;
  display: flex;
  gap: 8px;
  max-width: 640px;
}

.hero-search select {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background: rgba(255,255,255,.95);
  font: 400 14px 'Inter', sans-serif;
  color: #1F2937;
  min-width: 0;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%236B7280'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
}

.hero-search .btn {
  padding: 12px 24px;
  white-space: nowrap;
  flex-shrink: 0;
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

.stats-bar {
  display: flex;
  gap: 0;
  margin-top: 48px;
  max-width: 640px;
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 0 20px;
  border-right: 1px solid rgba(255,255,255,.15);
}

.stat-item:last-child {
  border-right: none;
}

.stat-item .number {
  font-size: 28px;
  font-weight: 800;
  display: block;
}

.stat-item .label {
  font-size: 12px;
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .05em;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0 40px;
  }
  .hero h1 {
    font-size: 32px;
  }
  .hero-search {
    flex-direction: column;
  }
  .stats-bar {
    flex-wrap: wrap;
    gap: 16px;
  }
  .stat-item {
    flex: none;
    width: calc(50% - 8px);
    border-right: none;
    padding: 12px 0;
  }
}
</style>
