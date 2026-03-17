<template>
  <section class="search-section">
    <div class="search-wrapper">
      <div class="search-card">
        <div class="search-inner">
          <div class="search-field">
            <Car :size="16" class="field-icon" />
            <select class="field-select">
              <option value="">Make / Brand</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>Mercedes</option>
              <option>Audi</option>
              <option>BYD</option>
              <option>Tesla</option>
            </select>
            <ChevronDown :size="14" class="chevron" />
          </div>
          <div class="divider"></div>
          <div class="search-field">
            <LayoutGrid :size="16" class="field-icon" />
            <select class="field-select">
              <option value="">Body Type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>MPV</option>
              <option>Hatchback</option>
              <option>Pickup</option>
            </select>
            <ChevronDown :size="14" class="chevron" />
          </div>
          <div class="divider"></div>
          <div class="search-field">
            <DollarSign :size="16" class="field-icon" />
            <select class="field-select">
              <option value="">Budget</option>
              <option>Under $15,000</option>
              <option>$15,000–$25,000</option>
              <option>$25,000–$40,000</option>
              <option>$40,000+</option>
            </select>
            <ChevronDown :size="14" class="chevron" />
          </div>
          <div class="divider"></div>
          <div class="search-field">
            <MapPin :size="16" class="field-icon" />
            <select class="field-select">
              <option value="">Destination</option>
              <option>Africa</option>
              <option>Middle East</option>
              <option>Southeast Asia</option>
              <option>Europe</option>
              <option>Australia</option>
            </select>
            <ChevronDown :size="14" class="chevron" />
          </div>
          <button class="search-btn">
            <Search :size="18" />
            Search Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car, LayoutGrid, DollarSign, MapPin, Search, ChevronDown } from 'lucide-vue-next'
</script>

<style scoped>
.search-section {
  background: transparent;
  position: relative;
  z-index: 10;
}

.search-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 10;
}

.search-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  padding: 8px;
}

.search-inner {
  display: flex;
  align-items: center;
  gap: 0;
}

.search-field {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  flex: 1;
  position: relative;
  min-width: 0;
}

.field-icon {
  color: #9CA3AF;
  flex-shrink: 0;
}

.field-select {
  border: none;
  outline: none;
  font-size: 14px;
  color: #374151;
  background: transparent;
  cursor: pointer;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  padding-right: 20px;
}

.chevron {
  position: absolute;
  right: 12px;
  color: #9CA3AF;
  pointer-events: none;
  flex-shrink: 0;
}

.divider {
  width: 1px;
  height: 36px;
  background: #E5E7EB;
  flex-shrink: 0;
}

.search-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #008600;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  flex-shrink: 0;
  margin-left: 4px;
}

.search-btn:hover {
  background: #006B00;
}

@media (max-width: 768px) {
  .search-inner {
    flex-wrap: wrap;
    gap: 0;
  }

  .search-field {
    flex: 1 1 calc(50% - 1px);
    border-bottom: 1px solid #E5E7EB;
  }

  .divider {
    display: none;
  }

  .search-btn {
    width: 100%;
    justify-content: center;
    margin: 4px 0 0;
    border-radius: 10px;
  }
}
</style>
