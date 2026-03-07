<template>
  <div class="v3-page">
    <PageNav current="v3" />
    
    <nav class="navbar-v3">
      <div class="container">
        <router-link to="/" class="nav-logo"><span class="nav-logo-text">UCC VIP</span></router-link>
        <ul class="nav-links">
          <li><a href="#vehicles"><Car :size="16" /> Vehicles</a></li>
          <li><a href="#services"><ShieldCheck :size="16" /> Services</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div class="nav-cta">
          <a href="#" class="btn btn-outline">Sign In</a>
          <a href="#" class="btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>

    <section class="hero-v3">
      <div class="hero-left">
        <div class="hero-left-inner">
          <div class="hero-badge"><span class="dot"></span> Export to 60+ Countries</div>
          <h1>China's Best Vehicles, <em>Global Delivery</em></h1>
          <p class="hero-desc">Connect directly with certified Chinese dealers. We handle inspections, documentation, and worldwide shipping.</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary btn-lg">Browse Inventory</a>
            <a href="#" class="btn btn-dark btn-lg">How It Works</a>
          </div>
          <div class="hero-stats-v3">
            <div class="hs"><span class="num">12K+</span><span class="lbl">Vehicles</span></div>
            <div class="hs"><span class="num">60+</span><span class="lbl">Countries</span></div>
            <div class="hs"><span class="num">200+</span><span class="lbl">Brands</span></div>
            <div class="hs"><span class="num">500+</span><span class="lbl">Dealers</span></div>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop" alt="Sports car">
        <div class="hero-img-overlay"></div>
      </div>
    </section>

    <section class="search-strip">
      <div class="container">
        <div class="sf"><label>Brand</label><select><option>Any Brand</option><option>Toyota</option><option>BMW</option></select></div>
        <div class="sf"><label>Type</label><select><option>Any Type</option><option>Sedan</option><option>SUV</option></select></div>
        <div class="sf"><label>Price</label><select><option>Any Price</option></select></div>
        <button class="search-go"><Search :size="18" /> Search</button>
      </div>
    </section>

    <section class="services-v3" id="services">
      <div class="container">
        <div class="section-header">
          <div class="section-label"><Layers :size="14" /> Services</div>
          <h2 class="section-title">What We Offer</h2>
        </div>
        <div class="svc-grid-v3">
          <div class="svc-card-v3"><div class="svc-icon-v3"><Search :size="24" /></div><div><h3>Vehicle Sourcing</h3><p>Access China's largest certified dealer network.</p></div></div>
          <div class="svc-card-v3"><div class="svc-icon-v3"><ClipboardCheck :size="24" /></div><div><h3>Quality Inspection</h3><p>200-point certified inspection with reports.</p></div></div>
          <div class="svc-card-v3"><div class="svc-icon-v3"><FileText :size="24" /></div><div><h3>Export Documentation</h3><p>Complete customs and compliance handling.</p></div></div>
          <div class="svc-card-v3"><div class="svc-icon-v3"><Ship :size="24" /></div><div><h3>Global Logistics</h3><p>Shipping to 60+ countries worldwide.</p></div></div>
        </div>
      </div>
    </section>

    <section class="vehicles-v3" id="vehicles">
      <div class="container">
        <div class="vehicles-top">
          <div class="section-header">
            <div class="section-label"><Star :size="14" /> Featured</div>
            <h2 class="section-title">Available Now</h2>
          </div>
          <a href="#" class="btn btn-outline">View All <ArrowRight :size="16" /></a>
        </div>
        <div class="v-grid">
          <div class="v-card-v3"><div class="v-img-v3"><img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=375&fit=crop" alt="Toyota"></div><div class="v-body-v3"><span class="v-tag">Certified</span><h3>2024 Toyota Camry</h3><div class="v-specs-v3"><span>Shanghai</span><span>Hybrid</span></div><div class="v-footer-v3"><span class="v-price-v3">$18,500</span><a href="#" class="btn btn-primary">Inquire</a></div></div></div>
          <div class="v-card-v3"><div class="v-img-v3"><img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=375&fit=crop" alt="BMW"></div><div class="v-body-v3"><span class="v-tag premium">Premium</span><h3>2023 BMW 325Li</h3><div class="v-specs-v3"><span>Beijing</span><span>Petrol</span></div><div class="v-footer-v3"><span class="v-price-v3">$29,800</span><a href="#" class="btn btn-primary">Inquire</a></div></div></div>
          <div class="v-card-v3"><div class="v-img-v3"><img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=375&fit=crop" alt="BYD"></div><div class="v-body-v3"><span class="v-tag ev">EV</span><h3>2024 BYD Han EV</h3><div class="v-specs-v3"><span>Shenzhen</span><span>Electric</span></div><div class="v-footer-v3"><span class="v-price-v3">$24,200</span><a href="#" class="btn btn-primary">Inquire</a></div></div></div>
        </div>
      </div>
    </section>

    <section class="cta-v3">
      <div class="container">
        <h2>Start Sourcing Today</h2>
        <p>Join thousands of dealers importing quality vehicles from China.</p>
        <a href="#" class="btn btn-white btn-lg">Get Started <ArrowRight :size="18" /></a>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { Car, ShieldCheck, Search, Layers, ClipboardCheck, FileText, Ship, Star, ArrowRight } from 'lucide-vue-next'
import PageNav from '../components/PageNav.vue'
import FooterSection from '../components/v1/FooterSection.vue'
</script>

<style scoped>
.navbar-v3 { background: #111827; position: sticky; top: 0; z-index: 100; }
.navbar-v3 .container { display: flex; align-items: center; justify-content: space-between; height: 64px; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.nav-logo-text { font-weight: 700; font-size: 18px; color: #4ADE80; }
.nav-links { display: flex; gap: 28px; list-style: none; }
.nav-links a { font-size: 14px; font-weight: 500; color: rgba(255,255,255,.7); display: flex; align-items: center; gap: 6px; }
.nav-links a:hover { color: #fff; }
.nav-cta { display: flex; gap: 12px; }
.nav-cta .btn-outline { border-color: rgba(255,255,255,.25); color: rgba(255,255,255,.8); }
.nav-cta .btn-outline:hover { border-color: #4ADE80; color: #4ADE80; }

.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font: 600 14px/1 'Inter', sans-serif; border: none; cursor: pointer; transition: all .2s; text-decoration: none; }
.btn-primary { background: #008600; color: #fff; }
.btn-primary:hover { background: #006B00; transform: translateY(-1px); }
.btn-dark { background: #111827; color: #fff; }
.btn-dark:hover { background: #000; }
.btn-white { background: #fff; color: #008600; }
.btn-white:hover { background: #F9FAFB; }
.btn-outline { background: transparent; border: 1.5px solid #D1D5DB; color: #374151; }
.btn-outline:hover { border-color: #008600; color: #008600; }
.btn-lg { padding: 16px 32px; font-size: 16px; border-radius: 16px; }

.hero-v3 { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 64px); }
.hero-left { background: #111827; color: #fff; display: flex; align-items: center; padding: 60px 64px 60px 0; }
.hero-left-inner { max-width: 540px; margin-left: auto; }
.hero-right { position: relative; overflow: hidden; }
.hero-right img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
.hero-img-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, #111827 0%, transparent 30%); }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(74,222,128,.1); border: 1px solid rgba(74,222,128,.2); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 500; color: #4ADE80; margin-bottom: 28px; }
.hero-badge .dot { width: 8px; height: 8px; background: #4ADE80; border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
.hero-left h1 { font-size: clamp(32px, 4vw, 52px); font-weight: 900; line-height: 1.08; margin-bottom: 20px; }
.hero-left h1 em { font-style: normal; color: #4ADE80; }
.hero-desc { font-size: 17px; color: rgba(255,255,255,.6); line-height: 1.7; margin-bottom: 32px; }
.hero-actions { display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap; }
.hero-stats-v3 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid rgba(255,255,255,.1); padding-top: 32px; }
.hero-stats-v3 .hs { text-align: left; padding-right: 16px; }
.hero-stats-v3 .hs .num { font-size: 26px; font-weight: 800; display: block; }
.hero-stats-v3 .hs .lbl { font-size: 11px; color: rgba(255,255,255,.4); text-transform: uppercase; }

.search-strip { background: #fff; border-bottom: 2px solid #F3F4F6; }
.search-strip .container { display: flex; gap: 0; align-items: stretch; max-width: 1200px; margin: 0 auto; }
.search-strip .sf { flex: 1; padding: 16px 20px; border-right: 1px solid #E5E7EB; display: flex; flex-direction: column; gap: 4px; }
.search-strip .sf label { font-size: 11px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; }
.search-strip .sf select { background: transparent; border: none; color: #1F2937; font: 600 15px 'Inter', sans-serif; appearance: none; cursor: pointer; padding: 4px 20px 4px 0; outline: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%239CA3AF'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0 center; }
.search-strip .search-go { display: flex; align-items: center; padding: 0 32px; background: #008600; cursor: pointer; transition: background .2s; border: none; color: #fff; font: 600 15px 'Inter', sans-serif; gap: 8px; }
.search-strip .search-go:hover { background: #006B00; }

.services-v3 { padding: 80px 0; background: #F9FAFB; }
.services-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section-header { text-align: center; margin-bottom: 56px; }
.section-label { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #008600; text-transform: uppercase; margin-bottom: 12px; }
.section-title { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; color: #111827; }
.svc-grid-v3 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.svc-card-v3 { display: flex; gap: 20px; align-items: flex-start; background: #fff; border: 1px solid #F3F4F6; border-radius: 16px; padding: 28px; transition: all .3s; }
.svc-card-v3:hover { border-color: #008600; box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); transform: translateY(-2px); }
.svc-icon-v3 { width: 48px; height: 48px; background: #ECFDF5; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #008600; }
.svc-card-v3:hover .svc-icon-v3 { background: #008600; color: #fff; }
.svc-card-v3 h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
.svc-card-v3 p { font-size: 14px; color: #6B7280; line-height: 1.6; }

.vehicles-v3 { padding: 80px 0; background: #fff; }
.vehicles-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.vehicles-top { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; }
.vehicles-top .section-header { text-align: left; margin-bottom: 0; }
.v-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.v-card-v3 { background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #F3F4F6; transition: all .3s; }
.v-card-v3:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,.1); }
.v-img-v3 { aspect-ratio: 16/10; overflow: hidden; }
.v-img-v3 img { width: 100%; height: 100%; object-fit: cover; }
.v-body-v3 { padding: 20px; }
.v-tag { font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 100px; background: #008600; color: #fff; }
.v-tag.premium { background: #111827; }
.v-tag.ev { background: #3B82F6; }
.v-body-v3 h3 { font-size: 16px; font-weight: 700; margin: 12px 0 8px; }
.v-specs-v3 { display: flex; gap: 12px; margin-bottom: 16px; }
.v-specs-v3 span { font-size: 13px; color: #6B7280; }
.v-footer-v3 { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #F3F4F6; }
.v-price-v3 { font-size: 20px; font-weight: 800; color: #008600; }

.cta-v3 { padding: 80px 0; background: linear-gradient(135deg, #001a00 0%, #003300 100%); text-align: center; color: #fff; }
.cta-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.cta-v3 h2 { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; margin-bottom: 16px; }
.cta-v3 p { font-size: 17px; opacity: .8; margin-bottom: 32px; }

@media (max-width: 1024px) {
  .hero-v3 { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .svc-grid-v3 { grid-template-columns: 1fr; }
  .v-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-stats-v3 { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
@media (max-width: 768px) {
  .v-grid { grid-template-columns: 1fr; }
  .search-strip .container { flex-direction: column; }
  .search-strip .sf { border-right: none; border-bottom: 1px solid #E5E7EB; }
}
</style>
