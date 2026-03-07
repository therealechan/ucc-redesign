<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <h1>UCC VIP Redesign</h1>
        <p>Choose a landing page version to view:</p>
        
        <div class="versions">
          <router-link v-for="v in versions" :key="v.path" :to="v.path" class="version-card">
            <span class="version-num">{{ v.num }}</span>
            <span class="version-name">{{ v.name }}</span>
            <span class="version-desc">{{ v.desc }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const versions = [
  { path: '/v1', num: 'V1', name: 'Classic Green', desc: 'Traditional green theme with clean layout' },
  { path: '/v2', num: 'V2', name: 'Hero Banner', desc: 'Large hero banner with bold typography' },
  { path: '/v3', num: 'V3', name: 'Bold Split', desc: 'Split-screen design with strong contrasts' },
  { path: '/v4', num: 'V4', name: 'Modern Bento', desc: 'Bento grid layout with modern aesthetics' }
]
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #001a00 0%, #003300 50%, #004d00 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  text-align: center;
}

h1 {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -.02em;
}

p {
  font-size: 18px;
  color: rgba(255,255,255,.7);
  margin-bottom: 48px;
}

.versions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.version-card {
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 20px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all .3s;
  text-decoration: none;
  color: inherit;
}

.version-card:hover {
  background: rgba(255,255,255,.15);
  transform: translateY(-4px);
  border-color: #4ADE80;
}

.version-num {
  font-size: 48px;
  font-weight: 800;
  color: #4ADE80;
  line-height: 1;
}

.version-name {
  font-size: 20px;
  font-weight: 700;
}

.version-desc {
  font-size: 14px;
  color: rgba(255,255,255,.6);
}

@media (max-width: 600px) {
  .versions {
    grid-template-columns: 1fr;
  }
}
</style>
