<script setup>
const { data:roomsList } = await useFetch('https://nuxr3.zeabur.app/api/v1/rooms')

// 使用 fetch 或 axios 串接 前台房型 API ( GET )
// apiUrl : https://nuxr3.zeabur.app/api/v1/rooms
// response 回傳後，將資料寫入 roomsList 變數
// 使用 roomsList 變數在下方 template 渲染列表

const route = useRoute()
const router = useRouter()

console.log(roomsList);


</script>

<template>
  <h1>房型頁面 {{ route.fullPath }}</h1>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-3" v-for=" room in roomsList.result " :key="room._id">
        <nuxt-link class="card h-100 shadow-sm" :to="`/room/${room._id}`">
          <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ room.name }}</h3>
            <p class="card-text flex-grow-1">{{ room.description }}</p>
            <ul class="list-unstyled">
              <li><strong>面積:</strong> {{ room.areaInfo }}</li>
              <li><strong>床型:</strong> {{ room.bedInfo }}</li>
              <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
              <li><strong>價格:</strong> {{ room.price }}</li>
            </ul>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
  max-width: 100%;
}
</style>