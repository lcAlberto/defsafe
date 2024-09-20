export const actions = {

  async fetchCats() {
    console.log('fetchCats');

    try {
      const {$db} = useNuxtApp()
      this.loading.fetchingCats = true
      const {data, error} = await $db.from("cats").select()
      this.cats.value = data
      console.log(this.cats.value);
      
      this.errors.value = error
    } catch (e) {
      console.log(e);
    }

    this.loading.fetchingCats = false
  },

  createCat(params: object) {
    console.log(params)
  }
}
