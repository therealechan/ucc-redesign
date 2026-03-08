<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <h1 class="hero-title">Find Your Next Car</h1>
        <p class="hero-subtitle">Browse thousands of quality used vehicles near you</p>

        <div class="search-bar">
          <div class="search-field">
            <label>Make / Model</label>
            <input type="text" placeholder="Any Make or Model" />
          </div>
          <div class="search-divider"></div>
          <div class="search-field">
            <label>Body Type</label>
            <select>
              <option>Any</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Truck</option>
              <option>Coupe</option>
              <option>Minivan</option>
            </select>
          </div>
          <div class="search-divider"></div>
          <div class="search-field">
            <label>Max Price</label>
            <select>
              <option>Any</option>
              <option>Under $15K</option>
              <option>Under $20K</option>
              <option>Under $25K</option>
              <option>Under $30K</option>
            </select>
          </div>
          <button class="search-btn">
            <Search :size="18" />
            Search
          </button>
        </div>

        <div class="quick-filters">
          <span class="chip-label">Popular:</span>
          <button v-for="chip in chips" :key="chip" class="chip">{{ chip }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search } from 'lucide-vue-next'

const chips = ['Under $15K', 'SUVs', 'Low Mileage', 'New Arrivals']
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.52)),
    url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80')
    center / cover no-repeat;
  padding: 96px 0 88px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.hero-inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 900;
  letter-spacing: -0.035em;
  color: #ffffff;
  line-height: 1.05;
  margin: 0 0 14px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.82);
  margin: 0 0 36px;
  line-height: 1.6;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: stretch;
  background: #ffffff;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-xl, 20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 24px;
}

.search-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  text-align: left;
}

.search-field label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9ca3af;
  margin-bottom: 5px;
}

.search-field input,
.search-field select {
  background: transparent;
  border: none;
  outline: none;
  font: 600 14px 'Inter', sans-serif;
  color: #1a1a1a;
  appearance: none;
  cursor: pointer;
  width: 100%;
}

.search-field input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

.search-field select option {
  background: #fff;
  color: #1a1a1a;
}

.search-divider {
  width: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 12px 0;
  flex-shrink: 0;
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 32px;
  background: var(--green, #008600);
  color: #fff;
  border: none;
  font: 700 15px/1 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.18s;
  flex-shrink: 0;
  border-radius: 0 var(--radius-xl, 20px) var(--radius-xl, 20px) 0;
}

.search-btn:hover {
  background: var(--green-mid, #007000);
}

/* Quick filters */
.quick-filters {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.chip-label {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 16px;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  font: 500 13px 'Inter', sans-serif;
  color: #ffffff;
  cursor: pointer;
  transition: border-color 0.18s, background 0.18s;
  backdrop-filter: blur(4px);
}

.chip:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .hero {
    padding: 48px 0 48px;
  }

  .container {
    padding: 0 16px;
  }

  .search-bar {
    flex-direction: column;
    border-radius: var(--radius-lg, 14px);
  }

  .search-field {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .search-divider {
    display: none;
  }

  .search-btn {
    padding: 16px;
    justify-content: center;
    border-radius: 0 0 var(--radius-lg, 14px) var(--radius-lg, 14px);
  }
}
</style>
