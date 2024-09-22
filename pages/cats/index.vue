<template>
  <div class="p-5">
    <div class="card bg-white border border-base-200 w-full">
      <div class="card-body">
        <h2 class="card-title">
          Card title!
        </h2>
        <div class="overflow-x-auto">
          {{ cats }}
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
              <tr>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-circle h-14 w-14">
                        <img
                          alt="Avatar Tailwind CSS Component"
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        >
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Theo
                </td>
                <td>
                  dgkjklgjfdk
                </td>
                <th>
                  <div class="flex">
                    <button class="bg-transparent text-primary bg-sweet-primary border border-none rounded-md p-2">
                      <PhosphorIconPencilSimple
                        :size="15"
                        weight="fill"
                      />
                    </button>
                    <delete-modal :cat-id="5" />
                  </div>
                </th>
              </tr>
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

const store = useCatStore()
const cats = computed(() => store.getCats);
// const loading = computed(() => store.getLoading('fetchingCats'));

onMounted(() => {
  loadCats()
})

async function loadCats() {
  await store.fetchCats()
}
</script>


<style scoped>
.bg-sweet-primary:hover {
  background-color: rgba(185, 153, 225, 0.73);
}

</style>