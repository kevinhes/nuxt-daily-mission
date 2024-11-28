export const useBookingStore = defineStore('bookingStore', () => {
  const bookingResult = ref({});

  return {
    bookingResult
  }
})