export const actions = {
  
  async fetchCats() {
    const config = useRuntimeConfig()
    await $fetch(`${config.public.baseUrl}/cats/cats-with-status`, {
      method: 'GET'
    }).then((response) => {
      this.cats = response.cats;
      useNotify('success', 'Cats', `${response.message} || Success!`)
    }).catch((error) => {
      this.error = error
      useNotify('error', 'Cats', `Error on fetch cats`)
    });
  },
  
  async createCat(params: object) {
    const config = useRuntimeConfig()
    await $fetch(`${config.public.baseUrl}/cats/`, {
      method: 'POST',
      body: params
    }).then((response) => {
      useNotify('success', 'Cats', `${response.message} || Success!`)
      this.fetchCats()
    }).catch((error) => {
      this.error = error
      useNotify('error', 'Cats', `Error on create`)
    });
  },
  
  async editCat(params: object, id: number) {
    const config = useRuntimeConfig()
    await $fetch(`${config.public.baseUrl}/cats/${id}`, {
      method: 'PUT',
      body: params
    }).then((response) => {
      useNotify('success', 'Cats', `${response.message} || Success!`)
      this.fetchCats()
    }).catch((error) => {
      this.error = error
      useNotify('error', 'Cats', `Error on update`)
    });
  },
  
  async deleteCat(id: number) {
    const config = useRuntimeConfig()
    await $fetch(`${config.public.baseUrl}/cats/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      useNotify('success', 'Cats', `${response.message} || Success!`)
      this.fetchCats()
    }).catch((error) => {
      this.error = error
      useNotify('error', 'Cats', `Error on delete`)
    });
  }
}
