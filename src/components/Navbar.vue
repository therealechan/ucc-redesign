<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="nav-logo">
        <img src="https://ucc-demo.beansmile.ai/ucc-vip-logo.svg" alt="UCC VIP" @error="hideImg">
        <span>UCC VIP</span>
      </router-link>
      <ul class="nav-links">
        <li><a href="#vehicles"><Car :size="16" /> Vehicles</a></li>
        <li><a href="#services"><ShieldCheck :size="16" /> Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">News</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#" class="btn btn-outline">Sign In</a>
        <a href="#" class="btn btn-primary">Get Started</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Car, ShieldCheck } from 'lucide-vue-next'

const hideImg = (e) => {
  e.target.style.display = 'none'
}
</script>

<style scoped>
.navbar {
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #E5E7EB;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 24px;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo img {
  height: 32px;
}

.nav-logo span {
  font-weight: 700;
  font-size: 18px;
  color: #008600;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  transition: color .2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links a:hover {
  color: #008600;
}

.nav-cta {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  font: 600 14px/1 'Inter', sans-serif;
  border: none;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.btn-primary {
  background: #008600;
  color: #fff;
}

.btn-primary:hover {
  background: #006B00;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
}

.btn-outline {
  background: transparent;
  border: 1.5px solid #D1D5DB;
  color: #374151;
}

.btn-outline:hover {
  border-color: #008600;
  color: #008600;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
