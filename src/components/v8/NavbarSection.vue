<template>
  <nav class="navbar" :class="{ scrolled: !isTop }">
    <div class="nav-container">
      <div class="nav-logo">
        <img
          v-if="showImg"
          src="https://ucc-demo.beansmile.ai/ucc-vip-logo.svg"
          alt="UCC VIP"
          class="logo-img"
          @error="showImg = false"
        />
        <span class="logo-text" :class="{ 'logo-dark': !isTop }">UCC VIP</span>
      </div>

      <div class="nav-links">
        <a href="#" class="nav-link">Inventory</a>
        <a href="#" class="nav-link">Services</a>
        <a href="#" class="nav-link">How It Works</a>
        <a href="#" class="nav-link">About</a>
      </div>

      <div class="nav-right">
        <a href="#" class="nav-signin">Sign In</a>
        <a href="#" class="nav-browse-btn">Browse</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isTop = ref(true)
const showImg = ref(true)

const handleScroll = () => {
  isTop.value = window.scrollY < 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 72px;
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease;
}

.navbar.scrolled {
  background: #fff;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #E5E7EB;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  height: 32px;
  width: auto;
}

.logo-text {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #fff;
  transition: color 0.3s ease;
}

.logo-text.logo-dark {
  color: #008600;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.scrolled .nav-link {
  color: #374151;
}

.nav-link:hover {
  color: #fff;
}

.scrolled .nav-link:hover {
  color: #008600;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.nav-signin {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.scrolled .nav-signin {
  color: #374151;
}

.nav-signin:hover {
  color: #fff;
}

.scrolled .nav-signin:hover {
  color: #008600;
}

.nav-browse-btn {
  display: inline-flex;
  align-items: center;
  background: #008600;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.nav-browse-btn:hover {
  background: #006B00;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
