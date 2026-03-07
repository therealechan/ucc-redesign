<template>
  <section class="blog" id="blog">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><Newspaper :size="14" /> Latest News</div>
        <h2 class="section-title">Industry Insights</h2>
      </div>
      <div class="blog-grid">
        <div class="blog-card">
          <div class="blog-img"><img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=338&fit=crop" alt="EV"></div>
          <div class="blog-body">
            <div class="blog-tag">Market Trends</div>
            <h3>China's EV Exports Surge 80% in 2025</h3>
            <p>New energy vehicles lead China's auto export boom, with BYD and NIO topping charts.</p>
            <div class="blog-date"><Calendar :size="12" /> March 1, 2026</div>
          </div>
        </div>
        <div class="blog-card">
          <div class="blog-img"><img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=338&fit=crop" alt="Shipping"></div>
          <div class="blog-body">
            <div class="blog-tag">Logistics</div>
            <h3>New Routes Cut Delivery Time by 30%</h3>
            <p>Direct routes from Shanghai to Africa and South America now available.</p>
            <div class="blog-date"><Calendar :size="12" /> Feb 24, 2026</div>
          </div>
        </div>
        <div class="blog-card">
          <div class="blog-img"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=338&fit=crop" alt="Inspection"></div>
          <div class="blog-body">
            <div class="blog-tag">Quality</div>
            <h3>Understanding Export Certification</h3>
            <p>A guide to inspection and documentation for cross-border purchases.</p>
            <div class="blog-date"><Calendar :size="12" /> Feb 18, 2026</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Newspaper, Calendar } from 'lucide-vue-next'
</script>

<style scoped>
.blog {
  padding: 80px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #008600;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #111827;
  letter-spacing: -.02em;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #E5E7EB;
  transition: all .3s;
  background: #fff;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1);
}

.blog-img {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}

.blog-card:hover .blog-img img {
  transform: scale(1.05);
}

.blog-body {
  padding: 20px;
}

.blog-tag {
  font-size: 11px;
  font-weight: 600;
  color: #008600;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.blog-body h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0;
  line-height: 1.4;
  color: #111827;
}

.blog-body p {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
}

.blog-date {
  font-size: 12px;
  color: #9CA3AF;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
