<template>
  <section class="inventory-section">
    <div class="container">
      <!-- Header -->
      <div class="section-head">
        <h2 class="section-title">Recently Listed Vehicles</h2>
        <a href="#" class="view-all">View All (7,477)</a>
      </div>

      <!-- Sort bar -->
      <div class="sort-bar">
        <span class="sort-label">Sort by:</span>
        <button class="sort-tab active">Price</button>
        <button class="sort-tab">Year</button>
        <button class="sort-tab">Mileage</button>
      </div>

      <!-- Grid -->
      <div class="vehicle-grid">
        <div v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-card">
          <div class="card-image-wrap">
            <img :src="vehicle.img" :alt="`${vehicle.year} ${vehicle.make} ${vehicle.model}`" loading="lazy" />
            <!-- Condition badge top-left -->
            <span class="badge-condition" :class="conditionClass(vehicle.condition)">
              {{ vehicle.condition }}
            </span>
            <!-- Label badge top-right -->
            <span v-if="vehicle.badge" class="badge-label" :class="labelClass(vehicle.badge)">
              {{ vehicle.badge }}
            </span>
          </div>
          <div class="card-body">
            <div class="card-title">{{ vehicle.year }} {{ vehicle.make }} {{ vehicle.model }}</div>
            <div class="card-price">${{ vehicle.price.toLocaleString() }}</div>
            <div class="card-mileage">{{ vehicle.mileage.toLocaleString() }} mi</div>
            <button class="btn-details">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const vehicles = [
  { id: 1, year: 2021, make: 'Toyota', model: 'Camry SE', price: 22995, mileage: 28400, condition: 'Great', badge: 'Low Miles', img: 'https://picsum.photos/seed/camry/400/260' },
  { id: 2, year: 2022, make: 'Honda', model: 'CR-V EX', price: 27490, mileage: 19800, condition: 'Like New', badge: 'Hot Deal', img: 'https://picsum.photos/seed/crv/400/260' },
  { id: 3, year: 2020, make: 'Ford', model: 'F-150 XLT', price: 31900, mileage: 41200, condition: 'Good', badge: null, img: 'https://picsum.photos/seed/f150/400/260' },
  { id: 4, year: 2023, make: 'Chevrolet', model: 'Equinox LT', price: 25750, mileage: 11300, condition: 'Like New', badge: 'New Arrival', img: 'https://picsum.photos/seed/equinox/400/260' },
  { id: 5, year: 2019, make: 'BMW', model: '3 Series 330i', price: 28400, mileage: 52100, condition: 'Good', badge: null, img: 'https://picsum.photos/seed/bmw3/400/260' },
  { id: 6, year: 2021, make: 'Hyundai', model: 'Tucson SEL', price: 21800, mileage: 33700, condition: 'Great', badge: 'Low Miles', img: 'https://picsum.photos/seed/tucson/400/260' },
  { id: 7, year: 2022, make: 'Tesla', model: 'Model 3 LR', price: 38500, mileage: 22900, condition: 'Like New', badge: 'Hot Deal', img: 'https://picsum.photos/seed/model3/400/260' },
  { id: 8, year: 2020, make: 'Jeep', model: 'Grand Cherokee', price: 29900, mileage: 47600, condition: 'Good', badge: null, img: 'https://picsum.photos/seed/jeep/400/260' },
]

const conditionClass = (condition) => {
  if (condition === 'Like New') return 'cond-like-new'
  if (condition === 'Great') return 'cond-great'
  return 'cond-good'
}

const labelClass = (label) => {
  if (label === 'Hot Deal') return 'lbl-hot'
  if (label === 'Low Miles') return 'lbl-low'
  if (label === 'New Arrival') return 'lbl-new'
  return ''
}
</script>

<style scoped>
.inventory-section {
  padding: 60px 0 80px;
  background: var(--bg, #f7f8fa);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

/* Header */
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  margin: 0;
}

.view-all {
  font-size: 14px;
  font-weight: 600;
  color: var(--green, #008600);
  text-decoration: none;
  transition: opacity 0.18s;
}

.view-all:hover {
  opacity: 0.75;
}

/* Sort bar */
.sort-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
}

.sort-label {
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
}

.sort-tab {
  padding: 6px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  background: #fff;
  font: 500 13px/1 'Inter', sans-serif;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s;
}

.sort-tab:hover {
  border-color: var(--green, #008600);
  color: var(--green, #008600);
}

.sort-tab.active {
  background: var(--green, #008600);
  border-color: var(--green, #008600);
  color: #fff;
  font-weight: 700;
}

/* Vehicle Grid */
.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Vehicle Card */
.vehicle-card {
  background: #ffffff;
  border-radius: var(--radius-lg, 14px);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: var(--shadow-card, 0 2px 8px rgba(0,0,0,0.07));
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.vehicle-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover, 0 8px 24px rgba(0,0,0,0.12));
}

.card-image-wrap {
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.card-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.vehicle-card:hover .card-image-wrap img {
  transform: scale(1.04);
}

/* Condition badge - top left */
.badge-condition {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  border-radius: 100px;
  font: 700 11px/1 'Inter', sans-serif;
  letter-spacing: 0.03em;
}

.cond-like-new {
  background: #008600;
  color: #fff;
}

.cond-great {
  background: #2563eb;
  color: #fff;
}

.cond-good {
  background: #6b7280;
  color: #fff;
}

/* Label badge - top right */
.badge-label {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  border-radius: 100px;
  font: 700 11px/1 'Inter', sans-serif;
  letter-spacing: 0.03em;
}

.lbl-hot {
  background: #f97316;
  color: #fff;
}

.lbl-low {
  background: #0d9488;
  color: #fff;
}

.lbl-new {
  background: #7c3aed;
  color: #fff;
}

/* Card body */
.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.card-title {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}

.card-price {
  font-size: 20px;
  font-weight: 800;
  color: var(--green, #008600);
  letter-spacing: -0.02em;
  margin-top: 2px;
}

.card-mileage {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 10px;
}

.btn-details {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 1.5px solid rgba(0, 0, 0, 0.14);
  border-radius: var(--radius, 10px);
  font: 600 13px/1 'Inter', sans-serif;
  color: #374151;
  cursor: pointer;
  transition: border-color 0.18s, color 0.18s, background 0.18s;
  margin-top: auto;
}

.btn-details:hover {
  border-color: var(--green, #008600);
  color: var(--green, #008600);
  background: rgba(0, 134, 0, 0.04);
}

@media (max-width: 1024px) {
  .vehicle-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .inventory-section {
    padding: 40px 0 60px;
  }

  .container {
    padding: 0 16px;
  }

  .vehicle-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .section-head {
    flex-direction: column;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .vehicle-grid {
    grid-template-columns: 1fr;
  }
}
</style>
