<template>
  <section class="search-wrap">
    <div class="container">
      <div class="search-card">
        <div class="filter-tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="tab"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
        <div class="search-row">
          <div class="select-wrap">
            <label class="select-label">Brand</label>
            <select class="select">
              <option>All Brands</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>BYD</option>
              <option>Mercedes-Benz</option>
              <option>Audi</option>
            </select>
          </div>
          <div class="divider"></div>
          <div class="select-wrap">
            <label class="select-label">Model / Type</label>
            <select class="select">
              <option>All Models</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>MPV</option>
              <option>Truck</option>
            </select>
          </div>
          <div class="divider"></div>
          <div class="select-wrap">
            <label class="select-label">Budget (FOB USD)</label>
            <select class="select">
              <option>Any Budget</option>
              <option>Under $10,000</option>
              <option>$10,000 - $20,000</option>
              <option>$20,000 - $40,000</option>
              <option>Over $40,000</option>
            </select>
          </div>
          <button class="search-btn">
            <Search :size="18" />
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'

const tabs = ['All', 'EV', 'SUV', 'Sedan', 'Truck', 'MPV']
const activeTab = ref('All')
</script>

<style scoped>
.search-wrap {
  position: relative;
  z-index: 10;
  padding: 0 24px;
  margin-top: -40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.search-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  padding: 24px 28px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab {
  padding: 7px 18px;
  border-radius: 100px;
  border: 1.5px solid #E5E7EB;
  background: transparent;
  color: #6B7280;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  font-family: 'Inter', sans-serif;
}

.tab:hover {
  border-color: #008600;
  color: #008600;
}

.tab.active {
  background: #008600;
  border-color: #008600;
  color: #fff;
}

.search-row {
  display: flex;
  align-items: stretch;
  gap: 0;
  border: 1.5px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
}

.select-wrap {
  flex: 1;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.select-label {
  font-size: 11px;
  font-weight: 600;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.select {
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: #111827;
  background: transparent;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
}

.divider {
  width: 1px;
  background: #E5E7EB;
  margin: 8px 0;
  flex-shrink: 0;
}

.search-btn {
  background: #008600;
  color: #fff;
  border: none;
  padding: 0 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: background 0.15s;
  flex-shrink: 0;
}

.search-btn:hover {
  background: #006a00;
}

@media (max-width: 768px) {
  .search-row {
    flex-direction: column;
    border-radius: 12px;
  }

  .divider {
    width: auto;
    height: 1px;
    margin: 0 12px;
  }

  .search-btn {
    padding: 16px 24px;
    justify-content: center;
  }
}
</style>
