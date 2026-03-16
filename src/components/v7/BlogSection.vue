<template>
  <section class="blog">
    <div class="container">
      <div class="section-top">
        <div>
          <span class="section-label">INSIGHTS</span>
          <h2 class="section-title">From Our Export Experts</h2>
        </div>
        <a href="#" class="view-all-link">
          View All Articles
          <ArrowRight :size="14" />
        </a>
      </div>

      <div class="magazine-grid">
        <!-- Featured article -->
        <div class="featured-article">
          <div class="featured-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&h=500&fit=crop"
              alt="Featured Article"
            />
            <span class="category-tag">EXPORT GUIDE</span>
          </div>
          <div class="featured-body">
            <h3 class="featured-article-title">Complete Guide to Importing Chinese Cars in 2024</h3>
            <p class="featured-excerpt">
              Everything you need to know about the import process — from finding the right vehicle to navigating customs in your country. A step-by-step breakdown.
            </p>
            <div class="article-meta">
              <div class="author-row">
                <div class="author-avatar">L</div>
                <span>Liu Wei</span>
                <span class="meta-dot">·</span>
                <span>Mar 8, 2024</span>
              </div>
              <a href="#" class="read-link">
                Read Article <ArrowRight :size="13" />
              </a>
            </div>
          </div>
        </div>

        <!-- Stacked articles -->
        <div class="stacked-articles">
          <div v-for="(article, i) in articles" :key="i" class="article-card">
            <div class="article-img-wrap">
              <img :src="article.img" :alt="article.title" />
            </div>
            <div class="article-content">
              <span class="category-tag small">{{ article.category }}</span>
              <h4>{{ article.title }}</h4>
              <div class="article-meta-row">
                <span class="meta-author">{{ article.author }}</span>
                <span class="meta-dot">·</span>
                <span class="meta-date">{{ article.date }}</span>
              </div>
              <a href="#" class="read-link small">
                Read <ArrowRight :size="12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const articles = [
  {
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop',
    category: 'EV SPOTLIGHT',
    title: 'Why BYD is Dominating Global Markets in 2024',
    author: 'Chen Ming',
    date: 'Feb 22, 2024'
  },
  {
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop',
    category: 'MARKET NEWS',
    title: 'Top 5 Destinations for Chinese Vehicle Exports',
    author: 'Sarah Kim',
    date: 'Jan 15, 2024'
  }
]
</script>

<style scoped>
.blog {
  background: #F8F8F8;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;
}

.section-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #008600;
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(24px, 2.5vw, 36px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
  margin: 0;
}

.view-all-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #008600;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  flex-shrink: 0;
  transition: gap 0.15s;
}

.view-all-link:hover {
  gap: 10px;
}

.magazine-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: stretch;
}

/* Featured Article */
.featured-article {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #E5E7EB;
}

.featured-img-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.featured-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}

.featured-article:hover .featured-img-wrap img {
  transform: scale(1.03);
}

.category-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #008600;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 6px;
}

.category-tag.small {
  position: static;
  display: inline-block;
  margin-bottom: 8px;
}

.featured-body {
  padding: 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.featured-article-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.35;
}

.featured-excerpt {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

.article-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #F3F4F6;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #9CA3AF;
}

.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #008600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.meta-dot {
  opacity: 0.5;
}

.read-link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #008600;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.15s;
}

.read-link:hover {
  gap: 8px;
}

.read-link.small {
  font-size: 12px;
}

/* Stacked Articles */
.stacked-articles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  display: flex;
  flex: 1;
  transition: box-shadow 0.2s;
}

.article-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
}

.article-img-wrap {
  width: 40%;
  flex-shrink: 0;
}

.article-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.article-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-content h4 {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.35;
  flex: 1;
}

.article-meta-row {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #9CA3AF;
}

@media (max-width: 768px) {
  .magazine-grid {
    grid-template-columns: 1fr;
  }
}
</style>
