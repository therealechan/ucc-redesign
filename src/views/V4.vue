<template>
  <div class="v4-page">
    <PageNav current="v4" />
    <Navbar />

    <section class="hero-v4">
      <div class="hero-car-bg">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=900&fit=crop&q=80" alt="Cars">
      </div>
      <div class="container">
        <div class="hero-content">
          <h1>Quality Cars from China, <em>Shipped Worldwide</em></h1>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary btn-lg"><Search :size="18" /> Browse</a>
            <a href="#" class="btn btn-outline btn-lg">Learn More</a>
          </div>
        </div>
        <div class="hero-stats-floating">
          <div class="stat-pill"><span class="num">12K+</span><span class="lbl">Vehicles</span></div>
          <div class="stat-pill"><span class="num">60+</span><span class="lbl">Countries</span></div>
          <div class="stat-pill"><span class="num">500+</span><span class="lbl">Dealers</span></div>
        </div>
      </div>

      <div class="search-floating">
        <div class="sf-grid">
          <div class="sf"><label>Brand</label><select><option>Any Brand</option></select></div>
          <div class="sf"><label>Type</label><select><option>Any Type</option></select></div>
          <div class="sf"><label>Price</label><select><option>Any Price</option></select></div>
          <button class="search-btn"><Search :size="18" /> Search</button>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item"><div class="stat-number">12K+</div><div class="stat-label">Vehicles</div></div>
          <div class="stat-item"><div class="stat-number">60+</div><div class="stat-label">Countries</div></div>
          <div class="stat-item"><div class="stat-number">200+</div><div class="stat-label">Brands</div></div>
          <div class="stat-item"><div class="stat-number">500+</div><div class="stat-label">Dealers</div></div>
        </div>
      </div>
    </section>

    <section class="services-v4" id="services">
      <div class="container">
        <div class="section-header">
          <div class="section-label"><Layers :size="14" /> Services</div>
          <h2 class="section-title">Complete Export Solutions</h2>
        </div>
        <div class="services-bento">
          <div class="svc-card-v4 large"><div class="svc-icon-v4"><Search :size="32" /></div><h3>Vehicle Sourcing</h3><p>Access 12,000+ certified vehicles</p></div>
          <div class="svc-card-v4"><div class="svc-icon-v4"><ClipboardCheck :size="24" /></div><h3>Inspection</h3><p>200-point check</p></div>
          <div class="svc-card-v4"><div class="svc-icon-v4"><FileText :size="24" /></div><h3>Documentation</h3><p>Full compliance</p></div>
          <div class="svc-card-v4"><div class="svc-icon-v4"><Ship :size="24" /></div><h3>Shipping</h3><p>Global logistics</p></div>
          <div class="svc-card-v4"><div class="svc-icon-v4"><ShieldCheck :size="24" /></div><h3>Support</h3><p>24/7 assistance</p></div>
        </div>
      </div>
    </section>

    <section class="vehicles-v4" id="vehicles">
      <div class="container">
        <div class="section-header">
          <div class="section-label"><Star :size="14" /> Featured</div>
          <h2 class="section-title">Available Now</h2>
        </div>
        <div class="v-grid-v4">
          <div class="v-card-v4"><img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=375&fit=crop" alt="Toyota"><div class="v-body-v4"><span class="v-tag">Certified</span><h3>2024 Toyota Camry</h3><p>Shanghai · Hybrid · 12K km</p><div class="v-footer-v4"><span class="v-price-v4">$18,500</span><a href="#" class="btn btn-primary">Inquire</a></div></div></div>
          <div class="v-card-v4"><img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=375&fit=crop" alt="BMW"><div class="v-body-v4"><span class="v-tag premium">Premium</span><h3>2023 BMW 325Li</h3><p>Beijing · Petrol · 28K km</p><div class="v-footer-v4"><span class="v-price-v4">$29,800</span><a href="#" class="btn btn-primary">Inquire</a></div></div></div>
          <div class="v-card-v4"><img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=375&fit=crop" alt="BYD"><div class="v-body-v4"><span class="v-tag ev">EV</span><h3>2024 BYD Han EV</h3><p>Shenzhen · Electric · 5K km</p><div class="v-footer-v4"><span class="v-price-v4">$24,200</span><a href="#" class="btn btn-primary">Inquire</a></div></div></div>
        </div>
      </div>
    </section>

    <section class="cta-v4">
      <div class="container">
        <h2>Ready to Start?</h2>
        <p>Join 500+ dealers worldwide.</p>
        <a href="#" class="btn btn-white btn-lg">Get Started <ArrowRight :size="18" /></a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { Search, Layers, ClipboardCheck, FileText, Ship, ShieldCheck, Star, ArrowRight } from 'lucide-vue-next'
import PageNav from '../components/PageNav.vue'
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/v1/FooterSection.vue'
</script>

<style scoped>
.hero-v4 { position: relative; min-height: calc(100vh - 64px); background: linear-gradient(135deg, #ECFDF5 0%, #fff 60%); padding-bottom: 80px; }
.hero-v4::before { content: ''; position: absolute; top: 0; left: 0; right: 40%; bottom: 0; background: linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%); clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%); z-index: 1; }
.hero-v4 .hero-car-bg { position: absolute; right: 0; top: 0; width: 50%; height: 100%; z-index: 0; overflow: hidden; }
.hero-v4 .hero-car-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.hero-v4 .container { position: relative; z-index: 2; padding-top: 80px; max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
.hero-content { max-width: 600px; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
.hero-v4 h1 { font-size: clamp(36px, 5vw, 64px); font-weight: 900; line-height: 1.08; margin-bottom: 20px; letter-spacing: -.03em; color: #111827; }
.hero-v4 h1 em { font-style: normal; color: #008600; }
.hero-actions { display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap; }

.hero-stats-floating { position: absolute; right: 10%; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 16px; z-index: 2; }
.stat-pill { background: #fff; border: 1px solid #E5E7EB; border-radius: 100px; padding: 12px 20px; box-shadow: 0 8px 30px rgba(0,0,0,.08); min-width: 140px; text-align: center; }
.stat-pill .num { font-size: 24px; font-weight: 800; color: #008600; display: block; }
.stat-pill .lbl { font-size: 11px; color: #6B7280; text-transform: uppercase; display: block; }

.search-floating { position: absolute; bottom: -60px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1100px; background: #fff; border: 1px solid #E5E7EB; border-radius: 24px; padding: 24px; box-shadow: 0 8px 30px rgba(0,0,0,.08); z-index: 10; }
.sf-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.sf { display: flex; flex-direction: column; gap: 6px; }
.sf label { font-size: 11px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; }
.sf select { background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 10px 12px; color: #1F2937; font: 600 14px 'Inter', sans-serif; appearance: none; cursor: pointer; outline: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%239CA3AF'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 32px; }
.search-btn { grid-column: span 1; background: #008600; color: #fff; border: none; border-radius: 12px; font: 600 15px 'Inter', sans-serif; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all .2s; }
.search-btn:hover { background: #006B00; transform: translateY(-1px); }

.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font: 600 14px/1 'Inter', sans-serif; border: none; cursor: pointer; transition: all .2s; text-decoration: none; }
.btn-primary { background: #008600; color: #fff; }
.btn-primary:hover { background: #006B00; transform: translateY(-1px); }
.btn-outline { background: transparent; border: 1.5px solid #D1D5DB; color: #374151; }
.btn-outline:hover { border-color: #008600; color: #008600; }
.btn-white { background: #fff; color: #008600; }
.btn-white:hover { background: #F9FAFB; transform: translateY(-1px); }
.btn-lg { padding: 16px 32px; font-size: 16px; border-radius: 16px; }

.stats-section { padding: 120px 0 100px; background: #fff; border-bottom: 1px solid #F3F4F6; }
.stats-section .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 48px; max-width: 1000px; margin: 0 auto; }
.stat-item { text-align: center; padding: 32px 24px; background: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 16px; transition: all .3s; }
.stat-item:hover { border-color: #008600; box-shadow: 0 4px 20px rgba(0,0,0,.06); transform: translateY(-4px); }
.stat-number { font-size: 48px; font-weight: 800; color: #008600; line-height: 1; margin-bottom: 12px; }
.stat-label { font-size: 13px; font-weight: 600; color: #6B7280; text-transform: uppercase; }

.services-v4 { padding: 100px 0 80px; background: #fff; }
.services-v4 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section-header { text-align: center; margin-bottom: 56px; }
.section-label { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #008600; text-transform: uppercase; margin-bottom: 12px; }
.section-title { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; color: #111827; }
.services-bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-card-v4 { background: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 16px; padding: 28px; transition: all .3s; }
.svc-card-v4:hover { border-color: #008600; box-shadow: 0 8px 30px rgba(0,0,0,.08); transform: translateY(-4px); }
.svc-card-v4.large { grid-column: span 2; grid-row: span 2; }
.svc-icon-v4 { width: 56px; height: 56px; background: #ECFDF5; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #008600; margin-bottom: 16px; }
.svc-card-v4:hover .svc-icon-v4 { background: #008600; color: #fff; }
.svc-card-v4 h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.svc-card-v4 p { font-size: 14px; color: #6B7280; }

.vehicles-v4 { padding: 80px 0; background: #F9FAFB; }
.vehicles-v4 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.v-grid-v4 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.v-card-v4 { background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #F3F4F6; transition: all .3s; }
.v-card-v4:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,.1); }
.v-card-v4 img { width: 100%; aspect-ratio: 16/10; object-fit: cover; }
.v-body-v4 { padding: 20px; }
.v-tag { font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 100px; background: #008600; color: #fff; }
.v-tag.premium { background: #111827; }
.v-tag.ev { background: #3B82F6; }
.v-body-v4 h3 { font-size: 16px; font-weight: 700; margin: 12px 0 4px; }
.v-body-v4 p { font-size: 14px; color: #6B7280; margin-bottom: 16px; }
.v-footer-v4 { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #F3F4F6; }
.v-price-v4 { font-size: 20px; font-weight: 800; color: #008600; }

.cta-v4 { padding: 80px 0; background: linear-gradient(135deg, #001a00 0%, #003300 100%); text-align: center; color: #fff; }
.cta-v4 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.cta-v4 h2 { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; margin-bottom: 16px; }
.cta-v4 p { font-size: 17px; opacity: .8; margin-bottom: 32px; }

@media (max-width: 1024px) {
  .hero-stats-floating { display: none; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .services-bento { grid-template-columns: repeat(2, 1fr); }
  .svc-card-v4.large { grid-column: span 2; grid-row: span 1; }
  .v-grid-v4 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .hero-v4 .hero-car-bg { display: none; }
  .sf-grid { grid-template-columns: 1fr; }
  .search-floating { position: relative; bottom: auto; left: auto; transform: none; margin: 40px 24px 0; width: auto; }
  .stats-grid { grid-template-columns: 1fr; }
  .services-bento { grid-template-columns: 1fr; }
  .svc-card-v4.large { grid-column: span 1; }
  .v-grid-v4 { grid-template-columns: 1fr; }
}
</style>
