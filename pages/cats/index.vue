<template>
  <div class="p-5">
    <div class="card bg-white border border-base-200 w-full">
      <div class="card-body">
        <div class="overflow-x-auto !h-[72vh] overflow-auto pr-5 pb-5">
          <table class="table">
            <!-- head -->
            <thead>
              <tr class="text-primary">
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <template
                v-for="(cat, index) in cats"
                :key="cat.id"
              >
                <table-row :cat="cat" />
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script
    lang="ts"
    setup
>
import {useCatStore} from "~/stores/cats/catsStore";
import TableRow from "~/components/cats/TableRow.vue";

const store = useCatStore()
const cats = computed(() => store.getCats);
// const loading = computed(() => store.getLoading('fetchingCats'));

onMounted(() => {
  loadCats()
})

async function loadCats() {
  await store.fetchCats()
}

definePageMeta({
  middleware: 'auth'
})
</script>


<style scoped>
.bg-sweet-primary:hover {
  background-color: rgba(185, 153, 225, 0.73);
}

</style>