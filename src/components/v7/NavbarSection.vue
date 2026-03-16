<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <div class="logo">
        <div class="logo-circle">
          <Car :size="18" color="#fff" />
        </div>
        <div class="logo-text">
          <span class="logo-name">UCC Motors</span>
          <span class="logo-tagline">Vehicle Export</span>
        </div>
      </div>
      <nav class="nav-links">
        <a href="#">Browse</a>
        <a href="#">Services</a>
        <a href="#">How It Works</a>
        <a href="#">About</a>
      </nav>
      <div class="nav-actions">
        <a href="#" class="list-link">List Your Car</a>
        <a href="#" class="cta-pill">Browse Inventory</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Car } from 'lucide-vue-next'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  height: 68px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.navbar.scrolled {
  border-bottom-color: #E5E7EB;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-circle {
  width: 38px;
  height: 38px;
  background: #008600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.logo-name {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  line-height: 1;
}

.logo-tagline {
  font-size: 10px;
  color: #9CA3AF;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  transition: color 0.15s;
}

.nav-links a:hover {
  color: #008600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.list-link {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  transition: color 0.15s;
}

.list-link:hover {
  color: #008600;
}

.cta-pill {
  background: #008600;
  color: #fff;
  padding: 9px 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
}

.cta-pill:hover {
  background: #006a00;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .list-link {
    display: none;
  }
}
</style>
