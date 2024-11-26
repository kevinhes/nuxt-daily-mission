export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('timeformat', (el, binding) => {
    const date = new Date(binding.value)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0'); // 獲取日期，並補零
    const newDate = `${year}-${month}-${day}`

    el.innerHTML = newDate
  })
})
