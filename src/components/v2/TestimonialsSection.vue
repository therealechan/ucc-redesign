<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><MessageCircle :size="14" /> Testimonials</div>
        <h2 class="section-title">What Our Clients Say</h2>
      </div>
      <div class="test-grid">
        <div class="test-card">
          <div class="test-stars">★★★★★</div>
          <p class="test-text">"UCC VIP made importing vehicles from China incredibly smooth. The inspection reports gave us full confidence, and the logistics were handled flawlessly."</p>
          <div class="test-author">
            <div class="test-avatar">AK</div>
            <div>
              <div class="test-name">Ahmed Khalil</div>
              <div class="test-role">Auto Dealer, Dubai UAE</div>
            </div>
          </div>
        </div>
        
        <div class="test-card">
          <div class="test-stars">★★★★★</div>
          <p class="test-text">"We've sourced over 200 vehicles through UCC VIP. Their bulk pricing and dedicated support team have been game-changers for our business."</p>
          <div class="test-author">
            <div class="test-avatar">MO</div>
            <div>
              <div class="test-name">Maria Oliveira</div>
              <div class="test-role">Fleet Manager, São Paulo</div>
            </div>
          </div>
        </div>
        
        <div class="test-card">
          <div class="test-stars">★★★★★</div>
          <p class="test-text">"The transparency in pricing and the quality of documentation exceeded our expectations. Every vehicle arrived exactly as described."</p>
          <div class="test-author">
            <div class="test-avatar">JN</div>
            <div>
              <div class="test-name">James Njoroge</div>
              <div class="test-role">Import Agent, Nairobi</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="trust-row">
        <div class="trust-item"><Award :size="28" /><span>ISO 9001</span></div>
        <div class="trust-item"><Building2 :size="28" /><span>CAAM Member</span></div>
        <div class="trust-item"><ShieldCheck :size="28" /><span>Verified</span></div>
        <div class="trust-item"><Lock :size="28" /><span>Secure Pay</span></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MessageCircle, Award, Building2, ShieldCheck, Lock } from 'lucide-vue-next'
</script>

<style scoped>
.testimonials {
  padding: 80px 0;
  background: #FAFAFA;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
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

.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.test-card {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px;
  position: relative;
}

.test-card::before {
  content: '"';
  font-size: 64px;
  font-weight: 800;
  color: #008600;
  opacity: .12;
  position: absolute;
  top: 16px;
  right: 24px;
  line-height: 1;
}

.test-stars {
  color: #FBBF24;
  font-size: 14px;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.test-text {
  font-size: 15px;
  color: #4B5563;
  line-height: 1.7;
  margin-bottom: 20px;
}

.test-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.test-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ECFDF5;
  color: #008600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 15px;
}

.test-name {
  font-size: 14px;
  font-weight: 700;
}

.test-role {
  font-size: 12px;
  color: #9CA3AF;
}

.trust-row {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid #E5E7EB;
}

.trust-item {
  text-align: center;
  opacity: .5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.trust-item span {
  font-size: 11px;
  color: #6B7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .05em;
}

@media (max-width: 1024px) {
  .test-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .test-grid {
    grid-template-columns: 1fr;
  }
  .trust-row {
    flex-wrap: wrap;
    gap: 24px;
  }
}
</style>
