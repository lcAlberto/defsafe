export const getters = {
  getCats: (state) => state.cats.value,
  getErrors: (state) => state.errors,
  getLoading: (state) => {
    return (param) => state.loading[param]
  },
}