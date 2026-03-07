<template>
  <div class="v3-page">
    <PageNav current="v3" />
    <div class="placeholder">
      <div class="container">
        <h1>V3 — Bold Split</h1>
        <p>This version features a split-screen design with strong contrasts.</p>
        <router-link to="/" class="btn">← Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageNav from '../components/PageNav.vue'
</script>

<style scoped>
.v3-page {
  min-height: 100vh;
  background: linear-gradient(90deg, #000 50%, #fff 50%);
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.container {
  max-width: 600px;
  padding: 40px 24px;
  background: rgba(255,255,255,.95);
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
}

h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #111;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #111;
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all .2s;
}

.btn:hover {
  background: #333;
  transform: translateY(-2px);
}
</style>
