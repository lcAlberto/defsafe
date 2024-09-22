import {defineStore} from 'pinia'

import {useSystemStore} from "~/stores/system/catsStore";

export const useAdoptionStore = defineStore('adoptionStore', {
  state: () => ({
    cats: ref([]),
    errors: ref([]),
    loading: {
      fetchingCats: false,
      creatingCat: false,
      editingCat: false,
      deletingCat: false,
    },
  }),
  getters: {
    getCats: (state) => state.cats,
    getErrors: (state) => state.errors,
    getLoading: (state) => {
      return (param) => state.loading[param]
    },
  },
  actions: {
    async adoptCat(param: object, catId: number) {
      const config = useRuntimeConfig()
      const systemStore = useSystemStore()
      await $fetch(`${config.public.baseUrl}/adopt/${catId}`, {
        method: 'POST',
        body: param
      }).then((response) => {
        systemStore.showToast('success', `${response.message}`)
      }).catch((error) => {
        this.error = error
        useNotify('error', 'Adoption', 'Error making the adoption request')
      });
    },
  },
})