<template>
  <section class="blog" id="blog">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Newspaper :size="13" /> Latest News</div>
        <h2 class="section-title">Industry Insights</h2>
      </div>
      <div class="blog-grid">
        <div class="blog-card" v-for="(post, index) in posts" :key="index" ref="blogCards">
          <div class="blog-img">
            <img :src="post.image" :alt="post.title">
          </div>
          <div class="blog-body">
            <div class="blog-tag">{{ post.tag }}</div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <div class="blog-date"><Calendar :size="11" /> {{ post.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Newspaper, Calendar } from 'lucide-vue-next'

const blogCards = ref([])
let observer = null

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=338&fit=crop',
    tag: 'Market Trends',
    title: "China's EV Exports Surge 80% in 2025",
    excerpt: 'New energy vehicles lead China\'s auto export boom, with BYD and NIO topping charts.',
    date: 'March 1, 2026'
  },
  {
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=338&fit=crop',
    tag: 'Logistics',
    title: 'New Routes Cut Delivery Time by 30%',
    excerpt: 'Direct routes from Shanghai to Africa and South America now available.',
    date: 'Feb 24, 2026'
  },
  {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=338&fit=crop',
    tag: 'Quality',
    title: 'Understanding Export Certification',
    excerpt: 'A complete guide to inspection and documentation for cross-border purchases.',
    date: 'Feb 18, 2026'
  }
]

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1'
        e.target.style.transform = 'translateY(0)'
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })

  blogCards.value.forEach(el => {
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, box-shadow .3s'
      observer.observe(el)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.blog {
  padding: 100px 0;
  background: var(--bg);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.blog-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all 0.3s;
}

.blog-card:hover {
  border-color: var(--green-border);
  transform: translateY(-5px);
  box-shadow: var(--shadow-float);
}

.blog-img {
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s, filter 0.5s;
  filter: brightness(0.85);
}

.blog-card:hover .blog-img img {
  transform: scale(1.05);
  filter: brightness(0.95);
}

.blog-body {
  padding: 24px;
}

.blog-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  color: var(--green-bright);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--green-glow-sm);
  border: 1px solid var(--green-border);
  padding: 3px 10px;
  border-radius: 100px;
  margin-bottom: 12px;
}

.blog-body h3 {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
  margin-bottom: 10px;
}

.blog-body p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.65;
}

.blog-date {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
