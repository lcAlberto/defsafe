<template>
  <div class="">
    <button
      class="bg-transparent text-primary bg-sweet-primary border border-none rounded-md p-2"
      @click="toggleModal()"
    >
      <PhosphorIconPencilSimple
        :size="15"
        weight="fill"
      />
    </button>
    <div>
      <dialog
        :id="`${props.catData.id}-edit-cat-modal`"
        class="modal p-5"
      >
        <div class="modal-box w-full sm:w-11/12 md:w-1/2 xl:w-1/3 max-w-5xl">
          <div class="full">
            <div class="">
              <h3 class="text-lg font-bold mb-2">
                Edit {{ props.catData.name }}
              </h3>
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">
                  ✕
                </button>
              </form>
              <hr>
            </div>
            <div class="p-5 max-h-[70vh] overflow-auto">
              <!--              image-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">image</span>
                </span>
                <input
                  v-model="form.image"
                  :class="{ 'is-invalid': errors.image }"
                  class="input input-bordered w-full focus:outline-0 focus:border-primary font-normal placeholder:text-base-300"
                  placeholder="Enter your image"
                  type="text"
                >
                <span
                  v-if="errors.image"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.image }}</span>
                </span>
              </label>
              <!--              full name-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Full name</span>
                </span>
                <input
                  v-model="form.name"
                  :class="{ 'is-invalid': errors.name }"
                  class="input input-bordered w-full focus:outline-0 focus:border-primary font-normal placeholder:text-base-300"
                  placeholder="Enter your full name"
                  type="text"
                >
                <span
                  v-if="errors.name"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.name }}</span>
                </span>
              </label>
              <!--              description-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span>
                </span>
                <textarea
                  v-model="form.description"
                  :class="{ 'is-invalid': errors.description }"
                  class="textarea input-bordered w-full focus:outline-0 focus:border-primary font-normal placeholder:text-base-300"
                  placeholder="Write here..."
                  rows="5"
                  type="image"
                />
                <span
                  v-if="errors.description"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.description }}</span>
                </span>
              </label>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button, it will close the modal -->
                <button class="btn">
                  Cancel
                </button>
              </form>
              <button
                class="btn btn-primary"
                @click="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>
<script
    lang="ts"
    setup
>
import {useCatStore} from "~/stores/cats/catsStore";

const props = defineProps({
  catData: {type: Object, required: true}
})

onMounted(() => {
  if (props.catData) {
    form.value = props.catData
  }
})

const open = ref(false)
const store = useCatStore()

const form = ref({
  image: '',
  name: '',
  description: ''
})

const errors = ref({
  image: '',
  name: '',
  description: ''
})

function toggleModal() {
  open.value = !open.value
  const modalElement = document.getElementById(`${props.catData.id}-edit-cat-modal`)
  if (modalElement) {
    modalElement.showModal();
  }
}

async function submit() {
  await store.editCat(form.value, props.catData.id)
  const modalElement = document.getElementById(`${props.catData.id}-edit-cat-modal`)
  if (modalElement) {
    modalElement.close();
  }
}
</script>


<style scoped>

</style>