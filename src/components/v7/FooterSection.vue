<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1 -->
        <div class="footer-col brand-col">
          <div class="footer-logo">
            <div class="logo-circle">UCC</div>
            <span class="logo-name">UCC Motors</span>
          </div>
          <p class="tagline">China's trusted gateway for global vehicle export.</p>
          <div class="social-row">
            <a href="#" class="social-icon" aria-label="Twitter"><Twitter :size="18" /></a>
            <a href="#" class="social-icon" aria-label="Facebook"><Facebook :size="18" /></a>
            <a href="#" class="social-icon" aria-label="Instagram"><Instagram :size="18" /></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><Linkedin :size="18" /></a>
          </div>
        </div>

        <!-- Col 2 -->
        <div class="footer-col">
          <h4 class="col-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#">Browse Inventory</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <!-- Col 3 -->
        <div class="footer-col">
          <h4 class="col-heading">Services</h4>
          <ul class="footer-links">
            <li><a href="#">Vehicle Sourcing</a></li>
            <li><a href="#">Inspection</a></li>
            <li><a href="#">Export Docs</a></li>
            <li><a href="#">Logistics</a></li>
            <li><a href="#">After-Sales</a></li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div class="footer-col">
          <h4 class="col-heading">Contact</h4>
          <ul class="footer-contact">
            <li>
              <MapPin :size="14" />
              Shanghai, China HQ
            </li>
            <li>
              <Mail :size="14" />
              export@uccmotors.com
            </li>
            <li>
              <Phone :size="14" />
              +86 21 8888 9999
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <span class="copyright">© 2024 UCC Motors. All rights reserved.</span>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-vue-next'
</script>

<style scoped>
.footer {
  background: #111827;
  color: #fff;
  padding: 72px 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

/* Brand col */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.logo-circle {
  width: 36px;
  height: 36px;
  background: #008600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.logo-name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.tagline {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
  margin: 0 0 20px 0;
  max-width: 240px;
}

.social-row {
  display: flex;
  gap: 12px;
}

.social-icon {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.15s;
}

.social-icon:hover {
  color: #fff;
}

/* Columns */
.col-heading {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 20px 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.15s;
}

.footer-links a:hover {
  color: #fff;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.footer-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 0 24px 0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

.legal-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.15s;
}

.legal-links a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .brand-col {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
