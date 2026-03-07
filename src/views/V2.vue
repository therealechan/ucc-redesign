<template>
  <div class="v2-page">
    <PageNav current="v2" />
    <div class="placeholder">
      <div class="container">
        <h1>V2 — Hero Banner</h1>
        <p>This version features a large hero banner with bold typography.</p>
        <router-link to="/" class="btn">← Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageNav from '../components/PageNav.vue'
</script>

<style scoped>
.v2-page {
  min-height: 100vh;
  background: #0f172a;
  color: #fff;
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
}

h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 18px;
  color: #94a3b8;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #3b82f6;
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all .2s;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}
</style>
