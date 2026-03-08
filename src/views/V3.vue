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
          <h1>China's Best Vehicles, <em>Global Delivery</em></h1>
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

    <section class="steps-v3" id="how-it-works">
      <div class="container">
        <div class="section-header">
          <div class="section-label"><Route :size="14" /> Process</div>
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Six simple steps from search to delivery.</p>
        </div>
        <div class="timeline">
          <div class="tl-step"><div class="tl-dot">1</div><h4>Search</h4><p>Browse inventory</p></div>
          <div class="tl-step"><div class="tl-dot">2</div><h4>Inquire</h4><p>Get details</p></div>
          <div class="tl-step"><div class="tl-dot">3</div><h4>Negotiate</h4><p>Best price</p></div>
          <div class="tl-step"><div class="tl-dot">4</div><h4>Pay</h4><p>Secure escrow</p></div>
          <div class="tl-step"><div class="tl-dot">5</div><h4>Ship</h4><p>We handle docs</p></div>
          <div class="tl-step"><div class="tl-dot">6</div><h4>Receive</h4><p>Delivery</p></div>
        </div>
      </div>
    </section>

    <section class="why-v3" id="about">
      <div class="container">
        <div class="why-split">
          <div class="why-img"><img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop" alt="Driving"></div>
          <div class="why-content">
            <div class="section-header" style="text-align:left;margin-bottom:32px">
              <div class="section-label"><Trophy :size="14" /> Why UCC VIP</div>
              <h2 class="section-title">Built for Global Trade</h2>
            </div>
            <div class="why-list">
              <div class="why-item"><div class="why-item-icon"><Globe :size="24" /></div><div><h3>Wide Selection</h3><p>12,000+ vehicles from 200+ brands.</p></div></div>
              <div class="why-item"><div class="why-item-icon"><ScrollText :size="24" /></div><div><h3>Certified Export</h3><p>Full documentation and compliance.</p></div></div>
              <div class="why-item"><div class="why-item-icon"><Microscope :size="24" /></div><div><h3>Quality Inspection</h3><p>200-point certified inspection.</p></div></div>
              <div class="why-item"><div class="why-item-icon"><Package :size="24" /></div><div><h3>Bulk Sourcing</h3><p>Special pricing for fleet buyers.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials-v3">
      <div class="container">
        <div class="section-header">
          <div class="section-label"><MessageCircle :size="14" /> Testimonials</div>
          <h2 class="section-title">What Clients Say</h2>
        </div>
        <div class="test-layout">
          <div class="test-featured">
            <div class="qt">"</div>
            <p class="text">UCC VIP made importing vehicles incredibly smooth. The inspection reports gave us full confidence.</p>
            <div class="author"><div class="avatar">AK</div><div><div class="name">Ahmed Khalil</div><div class="role">Auto Dealer, Dubai</div></div></div>
          </div>
          <div class="test-side">
            <div class="test-sm"><div class="stars">★★★★★</div><p class="text">We've sourced 200+ vehicles. Game-changer for our business.</p><div class="author"><div class="av">MO</div><div><div class="nm">Maria Oliveira</div><div class="rl">Fleet Manager, São Paulo</div></div></div></div>
            <div class="test-sm"><div class="stars">★★★★★</div><p class="text">Transparency exceeded expectations. Every vehicle arrived as described.</p><div class="author"><div class="av">JN</div><div><div class="nm">James Njoroge</div><div class="rl">Import Agent, Nairobi</div></div></div></div>
          </div>
        </div>
        <div class="trust-row">
          <div class="trust-item"><Award :size="28" /><span>ISO 9001</span></div>
          <div class="trust-item"><Building2 :size="28" /><span>CAAM Member</span></div>
          <div class="trust-item"><ShieldCheck :size="28" /><span>Verified</span></div>
          <div class="trust-item"><Lock :size="28" /><span>Secure</span></div>
        </div>
      </div>
    </section>

    <section class="blog-v3" id="blog">
      <div class="container">
        <div class="section-header">
          <div class="section-label"><Newspaper :size="14" /> Latest News</div>
          <h2 class="section-title">Industry Insights</h2>
        </div>
        <div class="blog-grid">
          <div class="blog-card"><div class="blog-img"><img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=338&fit=crop" alt="EV"></div><div class="blog-body"><div class="blog-tag">Market Trends</div><h3>China's EV Exports Surge 80%</h3><p>New energy vehicles lead export boom.</p><div class="blog-date"><Calendar :size="12" /> March 1, 2026</div></div></div>
          <div class="blog-card"><div class="blog-img"><img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=338&fit=crop" alt="Shipping"></div><div class="blog-body"><div class="blog-tag">Logistics</div><h3>New Routes Cut Time by 30%</h3><p>Direct routes to Africa and South America.</p><div class="blog-date"><Calendar :size="12" /> Feb 24, 2026</div></div></div>
          <div class="blog-card"><div class="blog-img"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=338&fit=crop" alt="Inspection"></div><div class="blog-body"><div class="blog-tag">Quality</div><h3>Export Certification Guide</h3><p>Inspection and documentation guide.</p><div class="blog-date"><Calendar :size="12" /> Feb 18, 2026</div></div></div>
        </div>
      </div>
    </section>

    <section class="cta-v3">
      <div class="container">
        <div class="cta-text">
          <h3>Ready to Source Your Next Vehicle?</h3>
          <p>Join 500+ dealers worldwide who trust UCC VIP for their vehicle imports.</p>
        </div>
        <div class="cta-btns">
          <a href="#" class="btn btn-white btn-lg">Get Started</a>
          <a href="#" class="btn btn-ghost btn-lg">Contact Sales</a>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { Car, ShieldCheck, Search, Layers, ClipboardCheck, FileText, Ship, Star, ArrowRight, Route, Trophy, Globe, ScrollText, Microscope, Package, MessageCircle, Award, Building2, Lock, Newspaper, Calendar } from 'lucide-vue-next'
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
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
.hero-left h1 { font-size: clamp(32px, 4vw, 52px); font-weight: 900; line-height: 1.08; margin-bottom: 20px; }
.hero-left h1 em { font-style: normal; color: #4ADE80; }
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

.cta-v3 { padding: 0; background: #008600; position: relative; overflow: hidden; }
.cta-v3::before { content: ''; position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: rgba(255,255,255,.05); border-radius: 50%; }
.cta-v3::after { content: ''; position: absolute; bottom: -80px; left: -80px; width: 300px; height: 300px; background: rgba(0,0,0,.05); border-radius: 50%; }
.cta-v3 .container { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; padding-top: 64px; padding-bottom: 64px; gap: 40px; max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
.cta-v3 .cta-text { max-width: 560px; color: #fff; }
.cta-v3 h3 { font-size: 32px; font-weight: 800; margin-bottom: 12px; }
.cta-v3 p { font-size: 17px; opacity: .85; line-height: 1.7; }
.cta-v3 .cta-btns { display: flex; gap: 12px; }

.steps-v3 { padding: 80px 0; background: #F9FAFB; }
.steps-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.timeline { display: flex; gap: 0; position: relative; max-width: 900px; margin: 0 auto; }
.timeline::before { content: ''; position: absolute; top: 24px; left: 24px; right: 24px; height: 3px; background: #E5E7EB; z-index: 0; }
.tl-step { flex: 1; text-align: center; position: relative; z-index: 1; padding: 0 8px; }
.tl-dot { width: 48px; height: 48px; background: #fff; border: 3px solid #008600; color: #008600; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; margin: 0 auto 16px; }
.tl-step:first-child .tl-dot { background: #008600; color: #fff; }
.tl-step h4 { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
.tl-step p { font-size: 11px; color: #9CA3AF; line-height: 1.4; }

.why-v3 { padding: 80px 0; background: #fff; }
.why-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.why-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.why-img { border-radius: 24px; overflow: hidden; aspect-ratio: 4/3; }
.why-img img { width: 100%; height: 100%; object-fit: cover; }
.why-list { display: flex; flex-direction: column; gap: 24px; }
.why-item { display: flex; gap: 16px; align-items: flex-start; }
.why-item-icon { width: 44px; height: 44px; background: #ECFDF5; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #008600; }
.why-item h3 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
.why-item p { font-size: 14px; color: #6B7280; line-height: 1.6; }

.testimonials-v3 { padding: 80px 0; background: #F9FAFB; }
.testimonials-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.test-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.test-featured { background: #008600; color: #fff; border-radius: 24px; padding: 48px; display: flex; flex-direction: column; justify-content: center; }
.test-featured .qt { font-size: 48px; line-height: 1; opacity: .3; margin-bottom: 12px; font-weight: 800; }
.test-featured .text { font-size: 20px; line-height: 1.6; margin-bottom: 24px; font-weight: 400; }
.test-featured .author { display: flex; align-items: center; gap: 12px; }
.test-featured .avatar { width: 48px; height: 48px; background: rgba(255,255,255,.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px; }
.test-featured .name { font-weight: 700; font-size: 15px; }
.test-featured .role { font-size: 13px; opacity: .7; }
.test-side { display: flex; flex-direction: column; gap: 24px; }
.test-sm { background: #fff; border: 1px solid #F3F4F6; border-radius: 16px; padding: 28px; flex: 1; }
.test-sm .stars { color: #FBBF24; font-size: 14px; margin-bottom: 12px; letter-spacing: 2px; }
.test-sm .text { font-size: 14px; color: #4B5563; line-height: 1.6; margin-bottom: 16px; }
.test-sm .author { display: flex; align-items: center; gap: 10px; }
.test-sm .av { width: 36px; height: 36px; background: #ECFDF5; color: #008600; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; }
.test-sm .nm { font-size: 13px; font-weight: 700; }
.test-sm .rl { font-size: 11px; color: #9CA3AF; }
.trust-row { display: flex; justify-content: center; gap: 48px; margin-top: 48px; padding-top: 48px; border-top: 1px solid #E5E7EB; }
.trust-item { text-align: center; opacity: .5; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.trust-item span { font-size: 11px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; }

.blog-v3 { padding: 80px 0; background: #fff; }
.blog-v3 .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.blog-card { border-radius: 16px; overflow: hidden; border: 1px solid #F3F4F6; transition: all .3s; background: #fff; }
.blog-card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); }
.blog-img { aspect-ratio: 16/9; overflow: hidden; }
.blog-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.blog-card:hover .blog-img img { transform: scale(1.05); }
.blog-body { padding: 20px; }
.blog-tag { font-size: 11px; font-weight: 600; color: #008600; text-transform: uppercase; letter-spacing: .05em; }
.blog-body h3 { font-size: 16px; font-weight: 700; margin: 8px 0; line-height: 1.4; }
.blog-body p { font-size: 14px; color: #6B7280; line-height: 1.6; }
.blog-date { font-size: 12px; color: #9CA3AF; margin-top: 12px; display: flex; align-items: center; gap: 4px; }

@media (max-width: 1024px) {
  .hero-v3 { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .svc-grid-v3 { grid-template-columns: 1fr; }
  .v-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-stats-v3 { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .timeline { flex-wrap: wrap; gap: 16px; }
  .timeline::before { display: none; }
  .tl-step { flex: none; width: calc(33.3% - 12px); }
  .why-split { grid-template-columns: 1fr; }
  .why-img { display: none; }
  .test-layout { grid-template-columns: 1fr; }
  .blog-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-v3 .container { flex-direction: column; text-align: center; }
}
@media (max-width: 768px) {
  .v-grid { grid-template-columns: 1fr; }
  .search-strip .container { flex-direction: column; }
  .search-strip .sf { border-right: none; border-bottom: 1px solid #E5E7EB; }
  .tl-step { width: calc(50% - 8px); }
  .blog-grid { grid-template-columns: 1fr; }
}
</style>
