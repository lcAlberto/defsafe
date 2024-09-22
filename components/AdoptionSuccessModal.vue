<template>
  <div class="">
    <div>
      <dialog
        id="adopt-cat-modal"
        class="modal p-5"
      >
        <div class="modal-box w-80">
          <div class="full">
            <div class="p-5 overflow-auto flex flex-col items-center justify-evenly text-center">
              <span class="text-success mb-5 bg-green-50 p-4 rounded-lg">
                <PhosphorIconCheck :size="32" />
              </span>
              <h3 class="text-lg font-bold my-3">
                Application Submitted!
              </h3>
              <p class="font-normal text-md">
                Tank you for submitting your adoption application! Our team will review your application and get back to
                you shortly.
              </p>
            </div>
            <div class="modal-action">
              <form
                class="w-full"
                method="dialog"
              >
                <button
                  class="btn btn-primary btn-block"
                  @click="store.hideToast()"
                >
                  Close
                </button>
              </form>
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
import {useSystemStore} from "~/stores/system/catsStore";

const store = useSystemStore()

const open = computed(() => store.getIsOpenToast);

watch(() => open.value, (value) => {
  toggleModal()
});

function toggleModal() {
  const modalElement = document.getElementById('adopt-cat-modal')
  if (modalElement) {
    if (open.value) {
      document.getElementById('adopt-cat-modal').showModal()
      setTimeout(() => {
        document.getElementById('adopt-cat-modal').close()
      }, 3000)
    } else {
      document.getElementById('adopt-cat-modal').close()
    }
  }
}
</script>


<style scoped>

</style>