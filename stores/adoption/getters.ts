export const getters = {
  getCats: (state) => state.cats,
  getErrors: (state) => state.errors,
  getLoading: (state) => {
    return (param) => state.loading[param]
  },
}