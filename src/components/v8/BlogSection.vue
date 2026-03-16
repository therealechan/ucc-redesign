<template>
  <section class="blog-section">
    <div class="container">
      <div class="section-header">
        <div class="header-left">
          <div class="green-line"></div>
          <span class="section-label">EXPORT INSIGHTS</span>
          <h2 class="section-h2">From our export experts</h2>
        </div>
        <a href="#" class="view-all">All Articles →</a>
      </div>

      <div class="blog-grid">
        <article v-for="(post, i) in posts" :key="i" class="blog-card">
          <div class="card-image-wrap">
            <img :src="post.image" :alt="post.title" class="card-img" />
            <span class="category-tag">{{ post.category }}</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-excerpt">{{ post.excerpt }}</p>
            <div class="card-footer">
              <div class="author-row">
                <div class="author-avatar">{{ post.authorInitial }}</div>
                <div class="author-info">
                  <div class="author-name">{{ post.author }}</div>
                  <div class="post-date">{{ post.date }}</div>
                </div>
              </div>
              <a href="#" class="read-link">Read →</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=640&h=400&fit=crop',
    category: 'EXPORT GUIDE',
    title: 'Complete Guide to Importing Chinese Cars in 2024',
    excerpt: 'Everything you need to know about regulations, costs, and timelines for importing vehicles from China.',
    author: 'Liu Wei',
    authorInitial: 'L',
    date: 'Mar 8, 2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=640&h=400&fit=crop',
    category: 'EV SPOTLIGHT',
    title: 'Why BYD is Dominating Global Markets in 2024',
    excerpt: "BYD's rapid global expansion and what it means for buyers outside China looking for affordable EVs.",
    author: 'Chen Ming',
    authorInitial: 'C',
    date: 'Feb 22, 2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=640&h=400&fit=crop',
    category: 'MARKET NEWS',
    title: 'Top 5 Destinations for Chinese Vehicle Exports',
    excerpt: 'Africa, Middle East, Southeast Asia — discover which markets are importing the most Chinese vehicles.',
    author: 'Sarah Kim',
    authorInitial: 'S',
    date: 'Jan 15, 2024'
  }
]
</script>

<style scoped>
.blog-section {
  background: #F8F7F3;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
}

.green-line {
  width: 40px;
  height: 3px;
  background: #008600;
  margin-bottom: 16px;
}

.section-label {
  display: block;
  color: #008600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-h2 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
  margin: 0;
}

.view-all {
  color: #008600;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 4px;
}

.view-all:hover {
  text-decoration: underline;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #EEEEE9;
  transition: box-shadow 0.2s, transform 0.2s;
}

.blog-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.card-image-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.blog-card:hover .card-img {
  transform: scale(1.05);
}

.category-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #008600;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: 4px;
}

.card-body {
  padding: 24px;
}

.card-title {
  font-size: 17px;
  font-weight: 700;
  color: #111111;
  line-height: 1.35;
  margin: 0 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-excerpt {
  font-size: 13px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #008600;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-name {
  font-size: 13px;
  font-weight: 600;
  color: #111111;
}

.post-date {
  font-size: 11px;
  color: #9CA3AF;
}

.read-link {
  font-size: 13px;
  font-weight: 600;
  color: #008600;
  text-decoration: none;
  white-space: nowrap;
}

.read-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .section-h2 {
    font-size: 32px;
  }
}
</style>
