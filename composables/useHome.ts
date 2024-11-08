export const useHome = () => {
  
  const newsList = ref([]);
  const isLoading = ref(false);

  async function getNewsList() {
    isLoading.value = true
    try {
      newsList.value = await $fetch('https://nuxr3.zeabur.app/api/v1/home/news/')
    } catch(error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

    return {
      newsList,
      isLoading,
      getNewsList
    }
  }
