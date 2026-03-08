<template>
  <section class="category-section">
    <div class="container">
      <div class="category-row">
        <button v-for="cat in categories" :key="cat.label" class="cat-card">
          <span class="cat-icon">
            <Car :size="26" />
          </span>
          <span class="cat-label">{{ cat.label }}</span>
          <span class="cat-count">{{ cat.count }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car } from 'lucide-vue-next'

const categories = [
  { label: 'SUV', count: '2,847 vehicles' },
  { label: 'Sedan', count: '1,923 vehicles' },
  { label: 'Truck', count: '1,204 vehicles' },
  { label: 'Minivan', count: '543 vehicles' },
  { label: 'Coupe', count: '671 vehicles' },
  { label: 'Convertible', count: '289 vehicles' },
]
</script>

<style scoped>
.category-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding: 24px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.category-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4px;
}

.category-row::-webkit-scrollbar {
  display: none;
}

.cat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 24px;
  background: #f7f8fa;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  cursor: pointer;
  transition: border-color 0.18s, background 0.18s, transform 0.18s;
  white-space: nowrap;
  flex-shrink: 0;
  flex-direction: row;
  gap: 12px;
}

.cat-card:hover {
  border-color: var(--green, #008600);
  background: rgba(0, 134, 0, 0.04);
  transform: translateY(-1px);
}

.cat-icon {
  display: flex;
  align-items: center;
  color: var(--green, #008600);
}

.cat-label {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
}

.cat-count {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .cat-card {
    padding: 12px 18px;
  }

  .cat-count {
    display: none;
  }
}
</style>
