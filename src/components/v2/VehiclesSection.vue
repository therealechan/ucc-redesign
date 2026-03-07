<template>
  <section class="vehicles" id="vehicles">
    <div class="container">
      <div class="vehicles-top">
        <div class="section-header">
          <div class="section-label"><Star :size="14" /> Featured Vehicles</div>
          <h2 class="section-title">Handpicked for Export</h2>
        </div>
        <a href="#" class="btn btn-outline">View All <ArrowRight :size="16" /></a>
      </div>
      
      <div class="v-grid">
        <div class="v-card">
          <div class="v-img">
            <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=375&fit=crop" alt="Toyota Camry">
            <span class="tag"><BadgeCheck :size="12" /> Certified</span>
          </div>
          <div class="v-body">
            <h3>2024 Toyota Camry Hybrid</h3>
            <div class="v-loc"><MapPin :size="13" /> Shanghai, China</div>
            <div class="v-specs">
              <span><Zap :size="12" /> Hybrid</span>
              <span><Gauge :size="12" /> 12K km</span>
              <span><Settings2 :size="12" /> Auto</span>
            </div>
            <div class="v-foot">
              <div class="v-price">$18,500 <small>FOB</small></div>
              <a href="#" class="btn btn-outline" style="padding:8px 16px;font-size:13px">Inquire</a>
            </div>
          </div>
        </div>
        
        <div class="v-card">
          <div class="v-img">
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=375&fit=crop" alt="BMW">
            <span class="tag" style="background:#111827"><Crown :size="12" /> Premium</span>
          </div>
          <div class="v-body">
            <h3>2023 BMW 325Li Long</h3>
            <div class="v-loc"><MapPin :size="13" /> Beijing, China</div>
            <div class="v-specs">
              <span><Fuel :size="12" /> Petrol</span>
              <span><Gauge :size="12" /> 28K km</span>
              <span><Settings2 :size="12" /> Auto</span>
            </div>
            <div class="v-foot">
              <div class="v-price">$29,800 <small>FOB</small></div>
              <a href="#" class="btn btn-outline" style="padding:8px 16px;font-size:13px">Inquire</a>
            </div>
          </div>
        </div>
        
        <div class="v-card">
          <div class="v-img">
            <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=375&fit=crop" alt="BYD">
            <span class="tag" style="background:#3B82F6"><BatteryCharging :size="12" /> EV</span>
          </div>
          <div class="v-body">
            <h3>2024 BYD Han EV Champion</h3>
            <div class="v-loc"><MapPin :size="13" /> Shenzhen, China</div>
            <div class="v-specs">
              <span><Zap :size="12" /> Electric</span>
              <span><Gauge :size="12" /> 5K km</span>
              <span><Settings2 :size="12" /> Auto</span>
            </div>
            <div class="v-foot">
              <div class="v-price">$24,200 <small>FOB</small></div>
              <a href="#" class="btn btn-outline" style="padding:8px 16px;font-size:13px">Inquire</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star, ArrowRight, BadgeCheck, Crown, BatteryCharging, MapPin, Zap, Fuel, Gauge, Settings2 } from 'lucide-vue-next'
</script>

<style scoped>
.vehicles {
  padding: 80px 0;
  background: #FAFAFA;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.vehicles-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.section-header {
  text-align: left;
  margin-bottom: 0;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #008600;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -.02em;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  font: 600 14px/1 'Inter', sans-serif;
  border: none;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  border: 1.5px solid #D1D5DB;
  color: #374151;
}

.btn-outline:hover {
  border-color: #008600;
  color: #008600;
}

.v-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.v-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #F3F4F6;
  transition: all .3s;
}

.v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1);
}

.v-img {
  aspect-ratio: 16/10;
  overflow: hidden;
  position: relative;
}

.v-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}

.v-card:hover .v-img img {
  transform: scale(1.05);
}

.tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #008600;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.v-body {
  padding: 20px;
}

.v-body h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

.v-loc {
  font-size: 13px;
  color: #9CA3AF;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.v-specs {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.v-specs span {
  font-size: 12px;
  color: #6B7280;
  display: flex;
  align-items: center;
  gap: 4px;
}

.v-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #F3F4F6;
  padding-top: 16px;
}

.v-price {
  font-size: 20px;
  font-weight: 800;
  color: #008600;
}

.v-price small {
  font-size: 12px;
  font-weight: 400;
  color: #9CA3AF;
}

@media (max-width: 1024px) {
  .v-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vehicles-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .v-grid {
    grid-template-columns: 1fr;
  }
}
</style>
