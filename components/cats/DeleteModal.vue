<template>
  <div class="">
    <button
      :class="{'btn-disabled text-gray-500 tooltip': props.disabled}"
      :disabled="props.disabled"
      class="bg-transparent text-error bg-sweet-danger border border-none rounded-md p-2"
      data-tip="You cannot delete this cat because he is adopted!"
      role="button"
      tabindex="-1"
      @click="toggleModal()"
    >
      <PhosphorIconTrashSimple
        :size="15"
        weight="fill"
      />
    </button>
    <div>
      <dialog
        :id="`delete-cat-${props.catId}`"
        class="modal p-5"
      >
        <div class="modal-box max-w-72">
          <div class="full">
            <div class="p-5 h-52 overflow-auto flex flex-col items-center justify-evenly text-center">
              <span class="text-error mb-5">
                <PhosphorIconTrashSimple
                  :size="32"
                  weight="fill"
                />
              </span>
              <h3 class="text-lg font-bold my-3">
                Are You Sure?
              </h3>
              <p class="font-normal text-md">
                Are you sure you want to delete this cat profile? This action cannot be undone.
              </p>
            </div>
            <div class="modal-action grid grid-cols-2">
              <form
                class="w-full"
                method="dialog"
              >
                <button class="btn w-full">
                  Cancel
                </button>
              </form>
              <button
                class="btn btn-error w-full text-white"
                @click="
                  submit"
              >
                Delete
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
  catId: {type: Number, required: true},
  disabled: {type: Boolean, default: true},
})

const open = ref(false)
const store = useCatStore()

function toggleModal() {
  open.value = !open.value
  const modalElement = document.getElementById(`delete-cat-${props.catId}`)
  if (modalElement) {
    modalElement.showModal();
  }
}

function submit() {
  store.deleteCat(props.catId)
}
</script>


<style scoped>
.bg-sweet-danger:hover {
  background-color: rgba(230, 126, 126, 0.75);
}
</style>