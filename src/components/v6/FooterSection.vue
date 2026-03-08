<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand -->
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <span class="logo-text">UCC</span>
            <span class="logo-dot"></span>
          </div>
          <p class="tagline">Driving better car-buying experiences for everyone.</p>
        </div>

        <!-- Col 2: Buy -->
        <div class="footer-col">
          <div class="col-title">Buy</div>
          <ul>
            <li><a href="#">Search Inventory</a></li>
            <li><a href="#">By Make</a></li>
            <li><a href="#">By Type</a></li>
            <li><a href="#">Deals</a></li>
          </ul>
        </div>

        <!-- Col 3: Company -->
        <div class="footer-col">
          <div class="col-title">Company</div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2024 UCC. All rights reserved.</span>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <span class="sep">·</span>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #111827;
  color: #d1d5db;
  padding: 60px 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand col */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 14px;
}

.logo-text {
  font-size: 22px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.04em;
}

.logo-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green, #008600);
  margin-top: 2px;
}

.tagline {
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.65;
  margin: 0;
  max-width: 220px;
}

/* Link columns */
.col-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin-bottom: 16px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

ul a {
  font-size: 14px;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.18s;
}

ul a:hover {
  color: #ffffff;
}

/* Bottom bar */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 13px;
  color: #6b7280;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.18s;
}

.footer-links a:hover {
  color: #ffffff;
}

.sep {
  color: #4b5563;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>
