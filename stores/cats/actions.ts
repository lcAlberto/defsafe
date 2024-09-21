export const actions = {

  async fetchCats() {
    await $fetch('http://localhost:3000/api/cats/cats-with-status', {
      method: 'GET'
    }).then((response) => {
      this.cats = response.cats;
    }).catch((error) => {
      this.error = error
    });
  },

  // async oldWayfetchCats() {
  //   console.log('fetchCats');
  //
  //   try {
  //     const {$db} = useNuxtApp()
  //     this.loading.fetchingCats = true
  //     const {data, error} = await $db.from("cats").select()
  //     this.cats.value = data
  //     console.log(this.cats.value);
  //
  //     this.errors.value = error
  //   } catch (e) {
  //     console.log(e);
  //   }
  //
  //   this.loading.fetchingCats = false
  // },

  createCat(params: object) {
    console.log(params)
  }
}
