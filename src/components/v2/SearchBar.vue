<template>
  <section class="search-bar">
    <div class="container">
      <select>
        <option>Any Brand</option>
        <option>Toyota</option>
        <option>BMW</option>
        <option>Mercedes</option>
        <option>BYD</option>
        <option>NIO</option>
      </select>
      <select>
        <option>Any Type</option>
        <option>Sedan</option>
        <option>SUV</option>
        <option>Truck</option>
        <option>EV</option>
      </select>
      <select>
        <option>Budget</option>
        <option>Under $10K</option>
        <option>$10K–$25K</option>
        <option>$25K–$50K</option>
        <option>$50K+</option>
      </select>
      <button class="btn btn-primary"><Search :size="16" /> Search</button>
    </div>
  </section>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
</script>

<style scoped>
.search-bar {
  background: #fff;
  border-bottom: 1px solid #F3F4F6;
  padding: 20px 0;
}

.search-bar .container {
  display: flex;
  gap: 12px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.search-bar select {
  flex: 1;
  padding: 12px 16px;
  border: 1.5px solid #E5E7EB;
  border-radius: 12px;
  font: 400 14px 'Inter', sans-serif;
  color: #1F2937;
  background: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%239CA3AF'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  min-width: 0;
}

.search-bar select:focus {
  outline: none;
  border-color: #008600;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font: 600 14px/1 'Inter', sans-serif;
  border: none;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.btn-primary {
  background: #008600;
  color: #fff;
}

.btn-primary:hover {
  background: #006B00;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .search-bar .container {
    flex-wrap: wrap;
  }
  .search-bar select {
    width: calc(50% - 6px);
    flex: none;
  }
  .search-bar .btn {
    width: 100%;
  }
}
</style>
