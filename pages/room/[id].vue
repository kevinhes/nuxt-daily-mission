<script setup>
  const route = useRoute();
  const router = useRouter();
  const roomId = route.params
  const apiUrl = `https://nuxr3.zeabur.app/api/v1/rooms/${roomId.id}`
  // const { data:roomData } = await useFetch(apiUrl)

  const { data: roomData } = await useFetch(`/rooms/${roomId.id}`, {
  baseURL: "https://nuxr3.zeabur.app/api/v1",
  transform: (response) => {
    const { result } = response;
    return result;
  },
  onResponseError({ response }) {
    const { message } = response._data;
    console.error("Error:", message);
    router.push("/");
  },
});
// console.log(roomData.value);

// useSeoMeta({
//   title:() => `Freyja | ${roomData.value.name}`,
//   description: () => `${ roomData.value.description }`,
//   ogTitle:() => `Freyja | ${roomData.value.name}`,
//   ogDescription: () => `${ roomData.value.description }`,
//   ogImage: () => `${roomData.value.imageUrl}`,
//   ogUrl: () => `https://freyja.travel.com.tw/room/${roomData.value._id}`,
//   twitterCard: () => `summary_large_image`,
//   twitterTitle: () => `Freyja | ${roomData.value.name}`,
//   twitterDescription: () => `${ roomData.value.description }`,
//   twitterImage: () => `${roomData.value.imageUrl}`
// })
const pageTitle = ref('Freyia');
const titleTemplate = computed(() => {
  return `${pageTitle.value} | ${roomData.value.name}`
})

const mainPictureUrl = computed(
  () => `https://freyja.travel.com.tw/room/${roomObject.value._id}`
)


</script>

<template>
  <Head>
    <Title>{{ rtitleTemplate }}</Title>
    <Meta name="description" :content="roomData.description" />
  
    <Meta property="og:title" :content="titleTemplate" />
    <Meta property="og:description" :content="roomData.description" />
    <Meta property="og:Image" :content="roomData.imgUrl" />
    <Meta property="og:Url" :content='mainPictureUrl' />
  
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="titleTemplate" />
    <Meta name="twitter:description" :content="roomData.description" />
    <Meta name="twitter:image" :content="roomData.imgUrl" />
  </Head>

  <h2>房型詳細頁面</h2>

  <div class="container">
    <button @click="router.go(-1)">回上一頁</button>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="room-page">
          <div class="room-header">
            <h1 class="room-name">{{ roomData.name }}</h1>
            <p class="room-description">
              {{ roomData.description }}
            </p>
          </div>

          <div class="room-gallery">
            <img
              :src="roomData.imageUrl"
              alt="尊爵雙人房主圖"
              class="room-main-image"
            />
            <div class="room-image-list">
              <img :src="image" alt="" v-for=" image in roomData.imageUrlList " :key="image">
            </div>
          </div>

          <div class="room-info">
            <div class="info-block">
              <h2>房間資訊</h2>
              <p>面積: {{ roomData.areaInfo }}</p>
              <p>床型: {{ roomData.bedInfo }}</p>
              <p>最多容納人數: {{ roomData.maxPeople }}</p>
              <p>價格: NT${{ roomData.price }}</p>
            </div>

            <div class="info-block">
              <h2>房間配置</h2>
              <ul>
                <li
                  v-for="layout in roomData.layoutInfo"
                  :key="layout.title"
                >
                  {{ layout.title }}：
                  <span v-if="layout.isProvide">提供</span>
                  <span v-else>未提供</span>
                </li>
                
              </ul>
            </div>

            <div class="info-block">
              <h2>房內設施</h2>
              <ul>
                <li
                  v-for="layout in roomData.facilityInfo"
                  :key="layout.title"
                >
                  {{ layout.title }}：
                  <span v-if="layout.isProvide">提供</span>
                  <span v-else>未提供</span>
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>客房備品</h2>
              <ul>
                <li
                  v-for="layout in roomData.amenityInfo"
                  :key="layout.title"
                >
                  {{ layout.title }}：
                  <span v-if="layout.isProvide">提供</span>
                  <span v-else>未提供</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-page {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.room-header {
  text-align: center;
  margin-bottom: 30px;
}

.room-name {
  font-size: 2rem;
  color: #333;
}

.room-description {
  font-size: 1rem;
  color: #666;
}

.room-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.room-main-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.room-image-list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.room-image-list img {
  width: 100px;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;
}

.room-image-list img:hover {
  transform: scale(1.1);
}

.room-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-block {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
}

.info-block h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #444;
}

.info-block p,
.info-block ul {
  font-size: 1rem;
  color: #555;
}

.info-block ul {
  list-style: none;
  padding-left: 0;
}

.info-block ul li {
  margin-bottom: 5px;
}
</style>