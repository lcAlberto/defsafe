<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-start items-center gap-3 py-5 px-3 text-primary">
      <span class="text-3xl">
        <svg
          height="64"
          viewBox="0 0 256 256"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M222.83 33.54a16 16 0 0 0-18.14 3.15c-.14.14-.26.27-.38.41L187.05 57A111.28 111.28 0 0 0 69 57L51.69 37.1c-.12-.14-.24-.27-.38-.41a16 16 0 0 0-18.14-3.15A16.4 16.4 0 0 0 24 48.46V136c0 49 40.06 89.63 91.56 95.32a4 4 0 0 0 4.44-4v-32l-13.42-13.43a8.22 8.22 0 0 1-.41-11.37a8 8 0 0 1 11.49-.18L128 180.68l10.34-10.35a8 8 0 0 1 11.49.18a8.22 8.22 0 0 1-.41 11.37L136 195.31v32a4 4 0 0 0 4.44 4C191.94 225.62 232 185 232 136V48.46a16.4 16.4 0 0 0-9.17-14.92M84 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20-64a8 8 0 1 1-16 0V69a8 8 0 0 1 16 0Zm32 0a8 8 0 1 1-16 0V64a8 8 0 0 1 16 0Zm16 0V69a8 8 0 0 1 16 0v19a8 8 0 1 1-16 0m20 64a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
            fill="black"
          />
        </svg>
      </span>
      <p class="text-lg">
        Cat adoption plataform
      </p>
    </div>
    <hr>
    <div>
      <div class="py-5">
        <h1 class="text-2xl text-primary">
          Cats for adoption
        </h1>
        <p class="text-md">
          Explore our list of lovable cats looking for their forever homes.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-wrap items-center h-[80vh] overflow-auto pr-5"
      >
        <div
          v-for="(cat, index) in cats"
          :key="index"
        >
          <div class="card bg-base-100 border border-base-200 h-[30rem] shadow-xl">
            <!-- <div class="card bg-base-100 w-80 h-[30rem] shadow-xl"> -->
            <div class="card-body max-w-96 p-5">
              <figure class="rounded-xl max-h-56">
                <img
                  :src="cat.image"
                  alt="Shoes"
                >
              </figure>
              <h2 class="card-title">
                {{ cat.name }}
              </h2>
              <p class="h-16 overflow-auto">
                {{ cat.description }}
              </p>
              <div class="card-actions justify-center">
                <adopt-modal-component :index="index" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script
    lang="ts"
    setup
>
import AdoptModalComponent from "~/components/AdoptModalComponent.vue";

const {$db} = useNuxtApp()

const cats = ref([])

onMounted(() => {
  loadCatList()
})

async function loadCatList() {
  const {data, error} = await $db.from("cats").select()
  cats.value = data
}

definePageMeta({
  layout: 'guest',
})

</script>

<style scoped>

</style>
