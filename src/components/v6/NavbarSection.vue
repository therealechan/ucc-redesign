<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="nav-logo">
        <span class="logo-text">UCC</span>
        <span class="logo-dot"></span>
      </a>
      <ul class="nav-links">
        <li><a href="#">Buy</a></li>
        <li><a href="#">Sell</a></li>
        <li><a href="#">Finance</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div class="nav-right">
        <span class="nav-phone">(800) 555-0198</span>
        <a href="#" class="btn-prequalify">Get Pre-Qualified</a>
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
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
}

.logo-text {
  font-size: 22px;
  font-weight: 900;
  color: var(--green);
  letter-spacing: -0.04em;
}

.logo-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  margin-top: 2px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: #444;
  text-decoration: none;
  transition: color 0.18s;
}

.nav-links a:hover {
  color: var(--green);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-phone {
  font-size: 14px;
  font-weight: 600;
  color: #444;
}

.btn-prequalify {
  display: inline-flex;
  align-items: center;
  padding: 9px 20px;
  background: var(--green);
  color: #fff;
  font: 600 14px/1 'Inter', sans-serif;
  border-radius: var(--radius);
  text-decoration: none;
  transition: background 0.18s, transform 0.18s;
}

.btn-prequalify:hover {
  background: var(--green-mid);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .nav-links,
  .nav-phone {
    display: none;
  }

  .navbar .container {
    padding: 0 16px;
  }
}
</style>
