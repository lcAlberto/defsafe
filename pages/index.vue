<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-start items-center gap-3 py-5 px-3 text-primary">
      <PhCat
        :size="32"
        weight="fill"
      />

      <p class="text-lg">
        Cat adoption plataform
      </p>
    </div>
    <hr>
    <div class="px-5">
      <div class="py-5">
        <h1 class="text-2xl font-bold text-primary">
          Cats for adoption
        </h1>
        <p class="text-md">
          Explore our list of lovable cats looking for their forever homes.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-wrap justify-items-center items-center h-[80vh] overflow-auto md:pr-5"
      >
        <div
          v-for="(cat, index) in cats"
          :key="index"
        >
          <div class="card bg-base-100 border border-base-200 h-[30rem] shadow-xl max-w-96">
            <!-- <div class="card bg-base-100 w-80 h-[30rem] shadow-xl"> -->
            <div class="card-body max-w-96 p-5">
              <figure class="rounded-xl max-h-56">
                <img
                  :alt="`image-of-${cat.name}`"
                  :src="cat.image"
                >
              </figure>
              <h2 class="card-title">
                {{ cat.name }}
              </h2>
              <p class="h-max-16 overflow-auto">
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
import {PhCat} from "@phosphor-icons/vue";

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
