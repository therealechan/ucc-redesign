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
}

/* mesh gradient background */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 15% 40%, rgba(0, 134, 0, 0.14) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 80% 20%, rgba(0, 100, 0, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0, 80, 0, 0.06) 0%, transparent 60%);
  z-index: 0;
}

/* subtle grid overlay */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 20% 50%, black 0%, transparent 75%);
  z-index: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero-inner {
  max-width: 700px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 134, 0, 0.1);
  border: 1px solid var(--green-border);
  padding: 7px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: var(--green-bright);
  margin-bottom: 32px;
  letter-spacing: 0.02em;
}

.hero-badge .pulse {
  width: 7px;
  height: 7px;
  background: var(--green-bright);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(0, 187, 0, 0.4);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 0 5px rgba(0, 187, 0, 0);
  }
}

.hero h1 {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #fff;
  margin-bottom: 24px;
}

.hero h1 em {
  font-style: normal;
  color: var(--green-bright);
}

.hero-desc {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 40px;
  max-width: 580px;
}

/* Glass search bar */
.hero-search {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-md);
  border-radius: var(--radius-lg);
  overflow: hidden;
  backdrop-filter: blur(12px);
  margin-bottom: 48px;
  box-shadow: var(--shadow-float);
}

.hs-field {
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  border-right: 1px solid var(--border);
}

.hs-field label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

.hs-field select {
  background: transparent;
  border: none;
  color: var(--text);
  font: 600 14px 'Inter', sans-serif;
  outline: none;
  cursor: pointer;
  appearance: none;
}

.hs-field select option {
  background: var(--surface-2);
  color: var(--text);
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.stats-bar .stat-item {
  flex: 1;
  padding: 20px 24px;
  text-align: center;
  border-right: 1px solid var(--border);
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
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--green-bright), transparent);
}

.stats-bar .number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
}

.stats-bar .label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
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
    border-bottom: 1px solid var(--border);
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
    border-bottom: 1px solid var(--border);
  }
}
</style>
