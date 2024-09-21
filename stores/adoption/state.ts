export const state = () => ({
  cats: ref([]),
  errors: ref([]),
  loading: {
    fetchingCats: false,
    creatingCat: false,
    editingCat: false,
    deletingCat: false,
  },
})