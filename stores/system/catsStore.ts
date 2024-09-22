import {defineStore} from 'pinia'

export const useSystemStore = defineStore('systemStore', {
  getters: {
    getIsOpenToast: (state) => state.toast.show,
    getToast: (state) => state.toast,
  },
  state: () => ({
    toast: ref({
      message: '',
      type: '',
      show: false
    }),
  }),
  actions: {
    showToast(type: typeToast, message: string) {
      this.toast = {
        message,
        type,
        show: true
      }
    },
    hideToast() {
      this.toast = {
        message: '',
        type: '',
        show: false
      }
    },
  },
})

enum typeToast {
  primary = 'primary',
  warning = 'warning',
  error = 'error',
  info = 'info'
}