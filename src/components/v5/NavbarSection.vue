<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="nav-logo">
        <img src="https://ucc-demo.beansmile.ai/ucc-vip-logo.svg" alt="UCC VIP" @error="$event.target.style.display='none'">
        <span class="nav-logo-text">UCC VIP</span>
      </a>
      <ul class="nav-links">
        <li><a href="#vehicles">Vehicles</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">News</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#" class="btn btn-ghost">Sign In</a>
        <a href="#" class="btn btn-primary">Get Started</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0;
  border-bottom: 1px solid #e5e5e5;
  background: #ffffff;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo img {
  height: 30px;
}

.nav-logo-text {
  font-weight: 800;
  font-size: 19px;
  color: var(--green);
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: #444;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links a:hover {
  color: var(--green);
}

.nav-cta {
  display: flex;
  gap: 10px;
  align-items: center;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
