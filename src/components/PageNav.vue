<template>
  <div class="page-nav">
    <button class="page-nav-btn" @click="toggleMenu">
      <LayoutGrid :size="16" /> Pages
    </button>
    <div class="page-nav-menu" :class="{ open: isOpen }">
      <router-link v-for="page in pages" :key="page.path" :to="page.path" :class="{ active: current === page.id }">
        {{ page.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LayoutGrid } from 'lucide-vue-next'

const props = defineProps({
  current: String
})

const isOpen = ref(false)

const pages = [
  { id: 'v1', path: '/v1', label: 'V1 — Classic Green' },
  { id: 'v2', path: '/v2', label: 'V2 — Hero Banner' },
  { id: 'v3', path: '/v3', label: 'V3 — Bold Split' },
  { id: 'v4', path: '/v4', label: 'V4 — Modern Bento' },
  { id: 'v5', path: '/v5', label: 'V5 — Dark Premium' },
  { id: 'v6', path: '/v6', label: 'V6 — Marketplace Search' },
  { id: 'v7', path: '/v7', label: 'V7 — Editorial Split' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = (e) => {
  if (!e.target.closest('.page-nav')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>

<style scoped>
.page-nav {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.page-nav-btn {
  background: var(--white, #fff);
  border: 1px solid var(--gray-200, #E5E7EB);
  padding: 10px 16px;
  border-radius: 12px;
  font: 500 14px 'Inter', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
  transition: all .2s;
}

.page-nav-btn:hover {
  border-color: #008600;
  color: #008600;
}

.page-nav-menu {
  display: none;
  position: absolute;
  right: 0;
  bottom: calc(100% + 8px);
  background: var(--white, #fff);
  border: 1px solid var(--gray-200, #E5E7EB);
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1);
  min-width: 220px;
  overflow: hidden;
}

.page-nav-menu.open {
  display: block;
}

.page-nav-menu a {
  display: block;
  padding: 10px 16px;
  font-size: 14px;
  transition: background .15s;
  color: inherit;
  text-decoration: none;
}

.page-nav-menu a:hover {
  background: var(--gray-50, #F9FAFB);
}

.page-nav-menu a.active {
  color: #008600;
  font-weight: 600;
  background: rgba(0,134,0,.05);
}

@media (max-width: 768px) {
  .page-nav {
    bottom: 12px;
    right: 12px;
  }
}
</style>
