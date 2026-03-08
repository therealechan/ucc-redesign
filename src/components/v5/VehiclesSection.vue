<template>
  <section class="vehicles" id="vehicles">
    <div class="container">
      <div class="vehicles-header">
        <div class="section-header">
          <div class="section-label"><Star :size="13" /> Featured Vehicles</div>
          <h2 class="section-title">Handpicked for Export</h2>
        </div>
        <a href="#" class="btn btn-ghost">View All <ArrowRight :size="15" /></a>
      </div>
      <div class="vehicle-grid">
        <div class="vehicle-card" v-for="(vehicle, index) in vehicles" :key="index" ref="vehicleCards">
          <div class="vehicle-img">
            <img :src="vehicle.image" :alt="vehicle.name">
            <span class="badge"><component :is="vehicle.badgeIcon" :size="11" /> {{ vehicle.badge }}</span>
          </div>
          <div class="vehicle-body">
            <h3>{{ vehicle.name }}</h3>
            <div class="vehicle-meta"><MapPin :size="12" /> {{ vehicle.location }}</div>
            <div class="vehicle-specs">
              <span><component :is="vehicle.specs[0].icon" :size="11" /> {{ vehicle.specs[0].text }}</span>
              <span><Gauge :size="11" /> {{ vehicle.specs[1].text }}</span>
              <span><Settings2 :size="11" /> {{ vehicle.specs[2].text }}</span>
            </div>
            <div class="vehicle-footer">
              <div class="vehicle-price">{{ vehicle.price }} <small>FOB</small></div>
              <a href="#" class="btn btn-outline-green" style="padding:8px 16px;font-size:13px">Inquire</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Star, ArrowRight, MapPin, Gauge, Settings2, BadgeCheck, Crown, BatteryCharging, Zap, Fuel } from 'lucide-vue-next'

const vehicleCards = ref([])
let observer = null

const vehicles = [
  {
    name: '2024 Toyota Camry Hybrid',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=375&fit=crop',
    badge: 'Certified',
    badgeIcon: BadgeCheck,
    location: 'Shanghai, China',
    specs: [
      { icon: Zap, text: 'Hybrid' },
      { text: '12K km' },
      { text: 'Auto' }
    ],
    price: '$18,500'
  },
  {
    name: '2023 BMW 325Li Long',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=375&fit=crop',
    badge: 'Premium',
    badgeIcon: Crown,
    location: 'Beijing, China',
    specs: [
      { icon: Fuel, text: 'Petrol' },
      { text: '28K km' },
      { text: 'Auto' }
    ],
    price: '$29,800'
  },
  {
    name: '2024 BYD Han EV Champion',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=375&fit=crop',
    badge: 'EV',
    badgeIcon: BatteryCharging,
    location: 'Shenzhen, China',
    specs: [
      { icon: Zap, text: 'Electric' },
      { text: '5K km' },
      { text: 'Auto' }
    ],
    price: '$24,200'
  }
]

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1'
        e.target.style.transform = 'translateY(0)'
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })

  vehicleCards.value.forEach(el => {
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, box-shadow .3s'
      observer.observe(el)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.vehicles {
  padding: 100px 0;
  background: var(--bg);
}

.vehicles-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
}

.vehicles-header .section-header {
  text-align: left;
  margin-bottom: 0;
}

.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.vehicle-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
}

.vehicle-card:hover {
  border-color: var(--green-border);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--green-border);
}

.vehicle-img {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.vehicle-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.vehicle-card:hover .vehicle-img img {
  transform: scale(1.06);
}

.vehicle-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(7, 7, 13, 0.85) 100%);
}

.vehicle-img .badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  background: rgba(0, 134, 0, 0.85);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 5px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 187, 0, 0.3);
}

.vehicle-body {
  padding: 22px 24px 24px;
}

.vehicle-body h3 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.vehicle-meta {
  font-size: 13px;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 14px;
}

.vehicle-specs {
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.vehicle-specs span {
  font-size: 12px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 5px;
  background: var(--surface-2);
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid var(--border);
}

.vehicle-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.vehicle-price {
  font-size: 22px;
  font-weight: 800;
  color: var(--green-bright);
}

.vehicle-price small {
  font-size: 12px;
  font-weight: 400;
  color: var(--text-dim);
}

@media (max-width: 1024px) {
  .vehicle-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vehicle-grid {
    grid-template-columns: 1fr;
  }

  .vehicles-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
