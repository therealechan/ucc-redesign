<template>
  <section class="vehicles">
    <div class="container">
      <div class="section-top">
        <div>
          <span class="section-label">FEATURED VEHICLES</span>
          <h2 class="section-title">Handpicked for Export</h2>
        </div>
        <a href="#" class="view-all-btn">
          View All
          <ArrowRight :size="14" />
        </a>
      </div>

      <div class="bento-grid">
        <!-- Featured large card -->
        <div class="featured-card">
          <div class="featured-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
              alt="2024 Toyota Camry Hybrid"
            />
            <div class="img-overlay"></div>
            <span class="badge">FEATURED</span>
            <div class="featured-bottom">
              <h3 class="featured-title">2024 Toyota Camry Hybrid</h3>
              <div class="featured-meta">
                <span class="meta-location">
                  <MapPin :size="12" /> Shanghai
                </span>
                <div class="specs-row">
                  <span class="spec-pill">Hybrid</span>
                  <span class="spec-pill">12K km</span>
                  <span class="spec-pill">Auto</span>
                </div>
              </div>
              <div class="featured-footer">
                <span class="featured-price">$18,500 <small>FOB</small></span>
                <a href="#" class="inquire-btn">Inquire Now</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Stacked small cards -->
        <div class="stacked-cards">
          <div v-for="car in stackedCars" :key="car.title" class="mini-card">
            <div class="mini-img-wrap">
              <img :src="car.img" :alt="car.title" />
            </div>
            <div class="mini-content">
              <h4>{{ car.title }}</h4>
              <div class="mini-location">
                <MapPin :size="11" color="#9CA3AF" />
                <span>{{ car.city }}</span>
              </div>
              <div class="mini-specs">
                <span v-for="spec in car.specs" :key="spec" class="mini-spec">{{ spec }}</span>
              </div>
              <div class="mini-footer">
                <span class="mini-price">${{ car.price }} <small>FOB</small></span>
                <a href="#" class="mini-inquire">
                  Inquire <ArrowRight :size="12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, MapPin } from 'lucide-vue-next'

const stackedCars = [
  {
    title: '2023 BMW 325Li Long',
    city: 'Beijing',
    specs: ['Petrol', '28K km', 'Auto'],
    price: '29,800',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop'
  },
  {
    title: '2024 BYD Han EV',
    city: 'Shenzhen',
    specs: ['Electric', '5K km', 'Auto'],
    price: '24,200',
    img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop'
  }
]
</script>

<style scoped>
.vehicles {
  background: #F8F8F8;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;
}

.section-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #008600;
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(24px, 2.5vw, 36px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
  margin: 0;
}

.view-all-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid #D1D5DB;
  color: #374151;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s;
  flex-shrink: 0;
}

.view-all-btn:hover {
  border-color: #008600;
  color: #008600;
}

.bento-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
}

/* Featured Card */
.featured-card {
  border-radius: 16px;
  overflow: hidden;
}

.featured-img-wrap {
  position: relative;
  aspect-ratio: 4/3;
}

.featured-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, transparent 50%);
}

.badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #008600;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 6px;
}

.featured-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
}

.featured-title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px 0;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.meta-location {
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
}

.specs-row {
  display: flex;
  gap: 6px;
}

.spec-pill {
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

.featured-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.featured-price {
  font-size: 24px;
  font-weight: 800;
  color: #fff;
}

.featured-price small {
  font-size: 13px;
  font-weight: 500;
  opacity: 0.7;
}

.inquire-btn {
  background: #fff;
  color: #111827;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s;
}

.inquire-btn:hover {
  transform: translateY(-1px);
}

/* Stacked Cards */
.stacked-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mini-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  flex: 1;
  transition: box-shadow 0.2s;
}

.mini-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.mini-img-wrap {
  width: 40%;
  flex-shrink: 0;
}

.mini-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 16/10;
}

.mini-content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mini-content h4 {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.3;
}

.mini-location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #9CA3AF;
}

.mini-specs {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.mini-spec {
  background: #F3F4F6;
  color: #6B7280;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
}

.mini-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.mini-price {
  font-size: 16px;
  font-weight: 800;
  color: #008600;
}

.mini-price small {
  font-size: 11px;
  font-weight: 400;
  color: #9CA3AF;
}

.mini-inquire {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #008600;
  text-decoration: none;
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
</style>
