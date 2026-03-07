<template>
  <div class="v4-page">
    <PageNav current="v4" />
    <div class="placeholder">
      <div class="container">
        <h1>V4 — Modern Bento</h1>
        <p>This version features a bento grid layout with modern aesthetics.</p>
        <router-link to="/" class="btn">← Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageNav from '../components/PageNav.vue'
</script>

<style scoped>
.v4-page {
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
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
  padding: 48px;
  background: #fff;
  border-radius: 32px;
  box-shadow: 
    0 1px 2px rgba(0,0,0,.02),
    0 4px 8px rgba(0,0,0,.02),
    0 8px 16px rgba(0,0,0,.02),
    0 16px 32px rgba(0,0,0,.02);
  border: 1px solid #e2e8f0;
}

h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  color: #fff;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
  transition: all .2s;
  box-shadow: 0 4px 14px rgba(14, 165, 233, .3);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, .4);
}
</style>
