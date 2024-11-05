<script setup>
  const route = useRoute()
</script>

<template>
  <div>
    <h1>Page:首頁</h1>
    <p>目前路由的路徑 - route.full 為 {{ route.fullPath }}</p>
  </div>
</template>

<style scoped></style>
