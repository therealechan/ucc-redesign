<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-badge">
          <span class="pulse"></span>
          Trusted by 500+ dealers worldwide
        </div>
        <h1>Quality Cars from China,<br><em>Shipped Worldwide</em></h1>
        <p class="hero-desc">Source certified pre-owned vehicles directly from China's largest dealers. Export documentation, inspection, and logistics — all handled.</p>
        <div class="hero-search">
          <div class="hs-field">
            <label>Brand</label>
            <select>
              <option>Any Brand</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>Mercedes</option>
              <option>BYD</option>
              <option>NIO</option>
              <option>Audi</option>
            </select>
          </div>
          <div class="hs-field">
            <label>Type</label>
            <select>
              <option>Any Type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Truck</option>
              <option>EV</option>
            </select>
          </div>
          <div class="hs-field">
            <label>Budget</label>
            <select>
              <option>Any Budget</option>
              <option>Under $10K</option>
              <option>$10K – $25K</option>
              <option>$25K – $50K</option>
              <option>$50K+</option>
            </select>
          </div>
          <button class="search-cta">
            <Search :size="17" /> Search
          </button>
        </div>
        <div class="stats-bar" ref="statsBar">
          <div class="stat-item"><span class="number">{{ stats[0] }}</span><span class="label">Vehicles</span></div>
          <div class="stat-item"><span class="number">{{ stats[1] }}</span><span class="label">Countries</span></div>
          <div class="stat-item"><span class="number">{{ stats[2] }}</span><span class="label">Brands</span></div>
          <div class="stat-item"><span class="number">{{ stats[3] }}</span><span class="label">Dealers</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Search } from 'lucide-vue-next'

const statsBar = ref(null)
const stats = ref(['0+', '0+', '0+', '0+'])
const targets = [12000, 60, 200, 500]
const suffixes = ['K+', '+', '+', '+']
let observer = null

const animateCounters = () => {
  const duration = 1800
  const startTime = Date.now()
  
  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    targets.forEach((target, i) => {
      const current = Math.floor(target * progress)
      if (i === 0) {
        stats.value[i] = (current >= 1000 ? Math.floor(current / 1000) + 'K+' : current + '+')
      } else {
        stats.value[i] = current + suffixes[i]
      }
    })
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  requestAnimationFrame(animate)
}

onMounted(() => {
  if (statsBar.value) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(statsBar.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 80px 0 120px;
  background: #f5f5f5;
}

.hero .container {
  position: relative;
}

.hero-inner {
  max-width: 700px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--green-light);
  border: 1px solid var(--green-border);
  padding: 7px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: var(--green);
  margin-bottom: 32px;
  letter-spacing: 0.02em;
}

.hero-badge .pulse {
  width: 7px;
  height: 7px;
  background: var(--green);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(0, 134, 0, 0.4);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 0 5px rgba(0, 134, 0, 0);
  }
}

.hero h1 {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #1a1a1a;
  margin-bottom: 24px;
}

.hero h1 em {
  font-style: normal;
  color: var(--green);
}

.hero-desc {
  font-size: 18px;
  color: #666;
  line-height: 1.75;
  margin-bottom: 40px;
  max-width: 580px;
}

/* E-commerce search bar */
.hero-search {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 48px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.hs-field {
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
}

.hs-field label {
  font-size: 10px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

.hs-field select {
  background: transparent;
  border: none;
  color: #1a1a1a;
  font: 600 14px 'Inter', sans-serif;
  outline: none;
  cursor: pointer;
  appearance: none;
}

.hs-field select option {
  background: #ffffff;
  color: #1a1a1a;
}

.hero-search .search-cta {
  background: var(--green);
  color: #fff;
  border: none;
  padding: 0 28px;
  font: 700 14px 'Inter', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.hero-search .search-cta:hover {
  background: var(--green-mid);
}

/* Stats bar */
.stats-bar {
  display: flex;
  gap: 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stats-bar .stat-item {
  flex: 1;
  padding: 20px 24px;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
}

.stats-bar .stat-item:last-child {
  border-right: none;
}

.stats-bar .stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--green), transparent);
}

.stats-bar .number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: var(--green);
  letter-spacing: -0.03em;
}

.stats-bar .label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .hero-search {
    grid-template-columns: 1fr;
    border-radius: var(--radius-lg);
  }

  .hs-field {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .hero-search .search-cta {
    padding: 16px;
    justify-content: center;
  }

  .stats-bar {
    flex-wrap: wrap;
  }

  .stats-bar .stat-item {
    flex: 1 0 50%;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
}
</style>
