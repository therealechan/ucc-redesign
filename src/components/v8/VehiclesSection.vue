<template>
  <section class="vehicles-section">
    <div class="container">
      <div class="section-header">
        <div class="header-left">
          <div class="green-line"></div>
          <span class="section-label">FEATURED VEHICLES</span>
          <h2 class="section-h2">Handpicked for Export</h2>
        </div>
        <a href="#" class="view-all">View All →</a>
      </div>
    </div>

    <div class="scroll-area-wrap">
      <button class="nav-arrow nav-prev" @click="scrollLeft" aria-label="Previous">
        <ChevronLeft :size="20" />
      </button>
      <div class="scroll-rack" ref="rackRef">
        <div
          v-for="(v, i) in vehicles"
          :key="i"
          class="vehicle-card"
        >
          <div class="card-image-wrap">
            <img :src="v.image" :alt="v.title" class="card-img" />
            <span class="card-badge" :class="v.badgeType">{{ v.badge }}</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ v.title }}</h3>
            <div class="card-location">
              <MapPin :size="13" class="loc-icon" />
              <span>{{ v.location }}</span>
            </div>
            <div class="card-specs">
              <span class="spec-tag">{{ v.fuel }}</span>
              <span class="spec-tag">{{ v.km }}</span>
              <span class="spec-tag">Auto</span>
            </div>
            <div class="card-footer">
              <span class="card-price">{{ v.price }}</span>
              <a href="#" class="card-inquire">Inquire →</a>
            </div>
          </div>
        </div>
      </div>
      <button class="nav-arrow nav-next" @click="scrollRight" aria-label="Next">
        <ChevronRight :size="20" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const rackRef = ref(null)

const vehicles = [
  {
    title: '2024 Toyota Camry Hybrid',
    location: 'Shanghai',
    fuel: 'Hybrid',
    km: '12K km',
    price: '$18,500 FOB',
    badge: 'Certified',
    badgeType: 'badge-green',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=640&h=400&fit=crop'
  },
  {
    title: '2023 BMW 325Li Long',
    location: 'Beijing',
    fuel: 'Petrol',
    km: '28K km',
    price: '$29,800 FOB',
    badge: 'Premium',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=640&h=400&fit=crop'
  },
  {
    title: '2024 BYD Han EV',
    location: 'Shenzhen',
    fuel: 'Electric',
    km: '5K km',
    price: '$24,200 FOB',
    badge: 'EV',
    badgeType: 'badge-blue',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=640&h=400&fit=crop'
  },
  {
    title: '2023 Audi A6L',
    location: 'Guangzhou',
    fuel: 'Petrol',
    km: '35K km',
    price: '$34,500 FOB',
    badge: 'Premium',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=640&h=400&fit=crop'
  },
  {
    title: '2024 Tesla Model Y',
    location: 'Shanghai',
    fuel: 'Electric',
    km: '8K km',
    price: '$31,000 FOB',
    badge: 'EV',
    badgeType: 'badge-blue',
    image: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=640&h=400&fit=crop'
  }
]

const scrollLeft = () => {
  if (rackRef.value) rackRef.value.scrollBy({ left: -340, behavior: 'smooth' })
}

const scrollRight = () => {
  if (rackRef.value) rackRef.value.scrollBy({ left: 340, behavior: 'smooth' })
}
</script>

<style scoped>
.vehicles-section {
  background: #fff;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
}

.green-line {
  width: 40px;
  height: 3px;
  background: #008600;
  margin-bottom: 16px;
}

.section-label {
  display: block;
  color: #008600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-h2 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
  margin: 0;
}

.view-all {
  color: #008600;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 4px;
}

.view-all:hover {
  text-decoration: underline;
}

/* SCROLL RACK */
.scroll-area-wrap {
  position: relative;
  padding: 0 24px;
  max-width: 1248px;
  margin: 0 auto;
}

.scroll-rack {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 8px 4px 16px;
}

.scroll-rack::-webkit-scrollbar {
  display: none;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s;
  color: #374151;
}

.nav-arrow:hover {
  background: #008600;
  color: #fff;
  border-color: #008600;
}

.nav-prev {
  left: 0;
}

.nav-next {
  right: 0;
}

/* VEHICLE CARD */
.vehicle-card {
  width: 320px;
  flex-shrink: 0;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #EEEEE9;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}

.vehicle-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-image-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.vehicle-card:hover .card-img {
  transform: scale(1.04);
}

.card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
}

.badge-green {
  background: #008600;
  color: #fff;
}

.badge-dark {
  background: #111111;
  color: #fff;
}

.badge-blue {
  background: #2563EB;
  color: #fff;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 6px 0;
  line-height: 1.3;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #9CA3AF;
  font-size: 13px;
  margin-bottom: 12px;
}

.loc-icon {
  color: #9CA3AF;
}

.card-specs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.spec-tag {
  background: #F5F5F0;
  color: #6B7280;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-price {
  font-size: 20px;
  font-weight: 800;
  color: #008600;
}

.card-inquire {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;
}

.card-inquire:hover {
  color: #008600;
}

@media (max-width: 768px) {
  .nav-arrow {
    display: none;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
