<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span style="color:#4ade80;font-size:20px;font-weight:800;letter-spacing:-0.02em">UCC VIP</span>
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
// No icons needed for footer
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 72px 0 36px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 56px;
}

.footer-brand p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.75;
  margin-top: 16px;
  max-width: 260px;
}

.footer-col h4 {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 18px;
}

.footer-col a {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  padding: 5px 0;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: #4ade80;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
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
