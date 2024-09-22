<template>
  <div class="">
    <button
      class="btn btn-primary"
      @click="toggleModal"
    >
      Register New Cat
    </button>
    <div>
      <dialog
        id="new-cat-modal"
        class="modal p-5"
      >
        <div class="modal-box w-full sm:w-11/12 md:w-1/2 xl:w-1/3 max-w-5xl">
          <div class="full">
            <div class="">
              <h3 class="text-lg font-bold mb-2">
                Register new Cat
              </h3>
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">
                  ✕
                </button>
              </form>
              <hr>
            </div>
            <div class="p-5 max-h-[70vh] overflow-auto">
              <!-- Image -->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Image</span>
                </span>
                <input
                  ref="fileInput"
                  accept="image/*"
                  class="hidden"
                  type="file"
                  @change="handleFileChange"
                >
                <button
                  class="btn btn-block btn-outline input-bordered flex justify-between font-normal"
                  type="button"
                  @click="triggerFileInput"
                >
                  <span>{{ selectedFileName || 'Choose Image' }}</span>
                  <PhosphorIconCamera
                    :size="25"
                    weight="fill"
                  />
                </button>
                <span
                  v-if="errors.image"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.image }}</span>
                </span>
              </label>
              <!-- Full name -->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Full name</span>
                </span>
                <input
                  v-model="form.name"
                  :class="{ 'is-invalid': errors.name }"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300 input-bordered"
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
              <!-- Description -->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span>
                </span>
                <textarea
                  v-model="form.description"
                  :class="{ 'is-invalid': errors.description }"
                  class="textarea w-full focus:outline-0 focus:border-primary placeholder:text-base-300 input-bordered"
                  placeholder="Write here..."
                  rows="5"
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
import {ref} from 'vue';
import {useCatStore} from '~/stores/cats/catsStore';

const store = useCatStore();

const open = ref(false);

const form = ref({
  image: '',
  name: '',
  description: ''
});

const errors = ref({
  image: '',
  name: '',
  description: ''
});

const selectedFileName = ref('');
const fileInput = ref<HTMLInputElement | null>(null);

function toggleModal() {
  open.value = !open.value;
  const modalElement = document.getElementById('new-cat-modal');
  if (modalElement) {
    modalElement.showModal();
  }
}

function triggerFileInput() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    selectedFileName.value = file.name;
    form.value.image = file;
  }
}

async function submit() {
  const formData = new FormData();
  formData.append('image', form.value.image);
  formData.append('name', form.value.name);
  formData.append('description', form.value.description);

  try {
    await store.createCat(formData);
    const modalElement = document.getElementById('new-cat-modal');
    if (modalElement) {
      modalElement.close();
    }
  } catch (error) {
    console.error('Failed to create cat:', error);
  }
}
</script>


<style scoped>

</style>