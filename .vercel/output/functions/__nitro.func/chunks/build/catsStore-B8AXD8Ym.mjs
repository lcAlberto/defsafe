import { d as defineStore, u as useRuntimeConfig } from './server.mjs';
import { ref } from 'vue';
import { u as useNotify } from './use-notify-Bfz9ZjHx.mjs';

const getters = {
  getCats: (state2) => state2.cats,
  getErrors: (state2) => state2.errors,
  getLoading: (state2) => {
    return (param) => state2.loading[param];
  }
};
const state = () => ({
  cats: ref([]),
  errors: ref([]),
  loading: {
    fetchingCats: false,
    creatingCat: false,
    editingCat: false,
    deletingCat: false
  }
});
const actions = {
  async fetchCats() {
    const config = useRuntimeConfig();
    await $fetch(`${config.public.baseUrl}/cats/cats-with-status`, {
      method: "GET"
    }).then((response) => {
      this.cats = response.cats;
      useNotify("success", "Cats", `${response.message} || Success!`);
    }).catch((error) => {
      this.error = error;
      useNotify("error", "Cats", `Error on fetch cats`);
    });
  },
  async createCat(params) {
    const config = useRuntimeConfig();
    await $fetch(`${config.public.baseUrl}/cats/`, {
      method: "POST",
      body: params
    }).then((response) => {
      useNotify("success", "Cats", `${response.message} || Success!`);
      this.fetchCats();
    }).catch((error) => {
      this.error = error;
      useNotify("error", "Cats", `Error on create`);
    });
  },
  async editCat(params, id) {
    const config = useRuntimeConfig();
    await $fetch(`${config.public.baseUrl}/cats/${id}`, {
      method: "PUT",
      body: params
    }).then((response) => {
      useNotify("success", "Cats", `${response.message} || Success!`);
      this.fetchCats();
    }).catch((error) => {
      this.error = error;
      useNotify("error", "Cats", `Error on update`);
    });
  },
  async deleteCat(id) {
    const config = useRuntimeConfig();
    await $fetch(`${config.public.baseUrl}/cats/${id}`, {
      method: "DELETE"
    }).then((response) => {
      useNotify("success", "Cats", `${response.message} || Success!`);
      this.fetchCats();
    }).catch((error) => {
      this.error = error;
      useNotify("error", "Cats", `Error on delete`);
    });
  }
};
const useCatStore = defineStore("catStore", {
  getters,
  state,
  actions
});

export { useCatStore as u };
//# sourceMappingURL=catsStore-B8AXD8Ym.mjs.map
