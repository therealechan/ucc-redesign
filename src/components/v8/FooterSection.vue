<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Col 1: Brand -->
        <div class="footer-col">
          <div class="footer-logo">
            <img
              v-if="showImg"
              src="https://ucc-demo.beansmile.ai/ucc-vip-logo.svg"
              alt="UCC VIP"
              class="logo-img"
              @error="showImg = false"
            />
            <span class="logo-text">UCC VIP</span>
          </div>
          <p class="footer-tagline">China's most trusted vehicle export platform. 12,000+ certified vehicles, 60+ countries served.</p>
          <div class="social-icons">
            <a href="#" class="social-link" aria-label="Twitter">
              <Twitter :size="18" />
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <Linkedin :size="18" />
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <Facebook :size="18" />
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <Youtube :size="18" />
            </a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-col">
          <h4 class="col-heading">QUICK LINKS</h4>
          <ul class="footer-links">
            <li><a href="#">Browse Inventory</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <!-- Col 3: Services -->
        <div class="footer-col">
          <h4 class="col-heading">SERVICES</h4>
          <ul class="footer-links">
            <li><a href="#">Vehicle Sourcing</a></li>
            <li><a href="#">Inspection & Certification</a></li>
            <li><a href="#">Export Documentation</a></li>
            <li><a href="#">International Logistics</a></li>
            <li><a href="#">After-Sales Support</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact -->
        <div class="footer-col">
          <h4 class="col-heading">CONTACT</h4>
          <ul class="footer-links contact-list">
            <li>
              <Mail :size="14" class="contact-icon" />
              export@uccvip.com
            </li>
            <li>
              <Phone :size="14" class="contact-icon" />
              +86 400 123 4567
            </li>
            <li>
              <MapPin :size="14" class="contact-icon" />
              Guangzhou, Guangdong, China
            </li>
            <li>
              <Clock :size="14" class="contact-icon" />
              Mon–Fri 9:00–18:00 CST
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-copy">© 2024 UCC VIP. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <span class="divider">|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-vue-next'

const showImg = ref(true)
</script>

<style scoped>
.footer {
  background: #fff;
  border-top: 2px solid #111111;
  padding-top: 60px;
  padding-bottom: 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.logo-img {
  height: 28px;
  width: auto;
}

.logo-text {
  font-size: 18px;
  font-weight: 800;
  color: #008600;
  letter-spacing: -0.5px;
}

.footer-tagline {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0 0 24px 0;
  max-width: 280px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #F5F5F0;
  color: #9CA3AF;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.social-link:hover {
  background: #111111;
  color: #fff;
}

.col-heading {
  font-size: 11px;
  font-weight: 700;
  color: #111111;
  letter-spacing: 2px;
  text-transform: uppercase;
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
  color: #6B7280;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #008600;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #6B7280;
}

.contact-icon {
  color: #9CA3AF;
  flex-shrink: 0;
  margin-top: 2px;
}

/* BOTTOM BAR */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #E5E7EB;
  padding-top: 24px;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-copy {
  font-size: 13px;
  color: #9CA3AF;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-legal a {
  font-size: 13px;
  color: #9CA3AF;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: #374151;
}

.divider {
  color: #D1D5DB;
  font-size: 12px;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
