export default defineNuxtRouteMiddleware( async (to, from) => {
  const nuxtApp = useNuxtApp();
  const { $swal, isHydrating, payload } = useNuxtApp();
  if (import.meta.client && isHydrating && payload.serverRendered) {
    return;
  }
  const token = useCookie('auth')
  if(!token.value) {
    return navigateTo('/login')
  }
  try {
    const userInfo = await $fetch('/user/check', {
      baseURL: 'https://nuxr3.zeabur.app/api/v1',
      method: 'GET',
      headers: {
        Authorization: token.value
      }
    })
    console.log('isLoggedIn', userInfo);
  } catch(error) {
    token.value = null
    return navigateTo("/login");
  }
  
})
