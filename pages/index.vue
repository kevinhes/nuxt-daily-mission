<script setup>
import { useLoading } from 'vue-loading-overlay'

const { $modal, $offcanvas } = useNuxtApp()
// modal
const modalRef = ref(null);
let modal;
const showModal = () => {
  // 開啟 modal
  modal.show()
};
const closeModal = () => {
  // 關閉 modal
  modal.hide()
};

// offcanvas

const offcanvasRef = ref(null);
let offcanvas;
const showOffcanvas = () => {
  // 開啟 offcanvas
  offcanvas.show()
};
const closeOffcanvas = () => {
  // 關閉 offcanvas
  offcanvas.hide()
};

onMounted(() => {
  // 初始化 modal 與 offcanvas 元件
  modal = new $modal(modalRef.value)
  offcanvas = new $offcanvas(offcanvasRef.value)
});

// 文字外掛練習
const message = ref("A1B2c3deFGhijk");
const time = ref(1730427600000);

const $loading = useLoading({})
// const fullPage = ref(false)

function openLoading() {
  // 開啟讀取效果
  const loader = $loading.show({})
  console.log(loader);
  
  setTimeout(() => {
    // 關閉讀取效果
    loader.hide()
  }, 1000);
}
</script>

<template>
  <div class="container mb-5">
    <button type="button" class="btn btn-primary" @click="showModal">開啟 Modal</button>
  </div>
  <!-- modal 元件 -->
  <div
    class="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <button type="button" class="btn btn-secondary" @click="showOffcanvas">
      開啟 Offcanvas
    </button>
  </div>
  <!-- Offcanvas  元件 -->
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
    ref="offcanvasRef"
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasBottomLabel">
        Offcanvas bottom
      </h3>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="closeOffcanvas"
      ></button>
    </div>
    <div class="offcanvas-body small">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius
      perferendis illum cum vero cumque totam repudiandae accusantium facere est
    </div>
  </div>

  <div class="container">
    <h2>自訂英文文字大小寫轉換指令</h2>
    <!-- 使用 plugins/textformat.js 建立的指令，將變數 message 的字串帶入 -->

    <!-- 大寫轉小寫格式之後，將結果寫入元素 -->
    <p v-textformat:lowercase="message"></p>
    <!-- 小寫轉大寫格式之後，將結果寫入元素 -->
    <p v-textformat:uppercase="message"></p>
    <h2>自訂時間轉換指令</h2>
    <p v-timeformat="time"></p>
  </div>

  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>