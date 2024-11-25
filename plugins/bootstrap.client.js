import Modal from 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      modal: Modal,
      offcanvas:Offcanvas,
    }
  }
})
