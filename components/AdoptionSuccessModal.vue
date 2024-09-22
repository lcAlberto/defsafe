<template>
  <div class="">
    <button
      class="btn btn-primary"
      @click="toggleModal()"
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
            <div class="p-5 h-52 overflow-auto flex flex-col items-center justify-evenly text-center">
              <span class="text-success mb-5">
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
              <form method="dialog">
                <button class="btn btn-primary">
                  Cancel
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
const open = ref(false)

function toggleModal() {
  open.value = !open.value
  const modalElement = document.getElementById('new-cat-modal')
  if (modalElement) {
    document.getElementById(`delete-cat-${props.catId}`).showModal();
  }
}
</script>


<style scoped>

</style>