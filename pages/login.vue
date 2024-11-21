<script setup>
const { $swal } = useNuxtApp();
const loginFormData= ref({
  email: "",
  password: "",
});
const userCookie = useCookie('auth', {
  path: '/',
})

const userLogin = async() => {
  try {
    const response = await $fetch('/v1/user/login', {
      baseURL: "https://nuxr3.zeabur.app/api",
      method: 'POST',
      body: {
        ...loginFormData.value
      }
    })
    if ( response.status === true ) {
      await $swal.fire({
        position: "center",
        icon: "success",
        title: "登入成功",
        showConfirmButton: false,
        timer: 1500,
      });
      userCookie.value = response.token
    }
  } catch (error) {
    const { message } = error.response._data;
    $swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
}

</script>

<template>
  <h2 class="h3 mb-4">登入</h2>
  <form @submit.prevent="userLogin">
    <div class="mb-4">
      <label for="loginemail">信箱 <span class="text-danger">*</span></label>
      <input
        type="email"
        class="form-control"
        id="loginemail"
        placeholder="example@gmail.com"
        required
        v-model="loginFormData.email"
      />
    </div>
    <div class="mb-4">
      <label for="loginpassword">密碼 <span class="text-danger">*</span></label>
      <input
        type="password"
        class="form-control"
        id="loginpassword"
        placeholder="請輸入密碼"
        required
        v-model="loginFormData.password"
      />
    </div>
    <button class="btn btn-secondary w-100" type="submit">
      登入
    </button>
  </form>
</template>