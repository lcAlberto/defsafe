<template>
  <div class="w-full">
    <button
      class="btn w-full btn-primary"
      @click="toggleModal()"
    >
      Adopt
    </button>
    <div>
      <dialog
        :id="`${props.index}-cat`"
        class="modal p-5"
      >
        <div class="modal-box w-full sm:w-11/12 md:w-1/2 xl:w-1/3 max-w-5xl">
          <div class="full">
            <div class="">
              <h3 class="text-lg font-bold mb-2">
                Adoption form
              </h3>
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">
                  ✕
                </button>
              </form>
              <hr>
            </div>
            <div class="p-5 max-h-[70vh] overflow-auto">
              <!--              full name-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Full name</span>
                </span>
                <input
                  v-model="form.fullName"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Enter your full name"
                  type="text"
                >
                <span class="label">
                  <span class="label-text-alt text-red-500">Bottom Right label</span>
                </span>
              </label>
              <!--              email-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Email</span>
                </span>
                <input
                  v-model="form.email"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Enter your email"
                  type="email"
                >
                <span class="label">
                  <span class="label-text-alt text-red-500">Bottom Right label</span>
                </span>
              </label>
              <!--              phone-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Telephone</span>
                </span>
                <input
                  v-model="form.phone"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Enter your phone"
                  type="email"
                >
                <span class="label">
                  <span class="label-text-alt text-red-500">Bottom Right label</span>
                </span>
              </label>
              <!--              reason-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span>
                </span>
                <textarea
                  v-model="form.reason"
                  class="textarea w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Write here..."
                  rows="5"
                  type="email"
                />
                <span class="label">
                  <span class="label-text-alt text-red-500">Bottom Right label</span>
                </span>
              </label>
              <!--              term-->
              <div class="form-control">
                <label class="label cursor-pointer flex justify-start gap-3">
                  <input
                    v-model="form.terms"
                    checked="checked"
                    class="checkbox checkbox-primary"
                    type="checkbox"
                  >
                  <span class="label-text">I agree to take care of this cat</span>
                </label>
              </div>
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
                Submit application
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  index: {type: Number, required: true},
})

const open = ref(false)
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  reason: '',
  terms: false,

})

function toggleModal() {
  open.value = !open.value
  document.getElementById(`${props.index}-cat`).showModal();
}

function submit() {
  console.log(form.value);
}
</script>

<style>
dialog {
  border-radius: 1rem !important;
}
</style>