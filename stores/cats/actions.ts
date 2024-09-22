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
  
  async createCat(params: object) {
    await $fetch(`http://localhost:3000/api/cats/`, {
      method: 'POST',
      body: params
    }).then((response) => {
      this.fetchCats()
    }).catch((error) => {
      this.error = error
    });
  },
  
  async editCat(params: object, id: number) {
    await $fetch(`http://localhost:3000/api/cats/${id}`, {
      method: 'PUT',
      body: params
    }).then((response) => {
      this.fetchCats()
    }).catch((error) => {
      this.error = error
    });
  },
  
  async deleteCat(id: number) {
    await $fetch(`http://localhost:3000/api/cats/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      this.fetchCats()
    }).catch((error) => {
      this.error = error
    });
  }
}
