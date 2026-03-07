<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-text">UCC VIP</span>
          <p>China's leading cross-border auto trading platform. Connecting dealers and buyers worldwide since 2020.</p>
        </div>
        <div class="footer-col">
          <h4>Platform</h4>
          <a href="#">Browse Vehicles</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">For Dealers</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Shipping Guide</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 UCC VIP. All rights reserved.</span>
        <span>contact@uccvip.com · +86 400-888-0000</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #111827;
  color: rgba(255,255,255,.6);
  padding: 64px 0 32px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand .logo-text {
  color: #4ADE80;
  font-size: 20px;
  font-weight: 800;
}

.footer-brand p {
  font-size: 14px;
  line-height: 1.7;
  margin-top: 16px;
  max-width: 280px;
}

.footer-col h4 {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 16px;
}

.footer-col a {
  display: block;
  font-size: 14px;
  padding: 4px 0;
  transition: color .2s;
  color: inherit;
  text-decoration: none;
}

.footer-col a:hover {
  color: #00A300;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
