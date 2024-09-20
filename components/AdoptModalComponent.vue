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
                  :class="{ 'is-invalid': errors.fullName }"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Enter your full name"
                  type="text"
                >
                <span
                  v-if="errors.fullName"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.fullName }}</span>
                </span>
              </label>
              <!--              email-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Email</span>
                </span>
                <input
                  v-model="form.email"
                  :class="{ 'is-invalid': errors.email }"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Enter your email"
                  type="email"
                >
                <span
                  v-if="errors.email"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.email }}</span>
                </span>
              </label>
              <!--              phone-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Telephone</span>
                </span>
                <input
                  v-model="form.phone"
                  v-maska="'(##) # ####-####'"
                  :class="{ 'is-invalid': errors.phone }"
                  class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Enter your phone"
                  type="email"
                >
                <span
                  v-if="errors.phone"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ erros.phone }}l</span>
                </span>
              </label>
              <!--              reason-->
              <label class="form-control w-full">
                <span class="label">
                  <span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span>
                </span>
                <textarea
                  v-model="form.reason"
                  :class="{ 'is-invalid': errors.reason }"
                  class="textarea w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
                  placeholder="Write here..."
                  rows="5"
                  type="email"
                />
                <span
                  v-if="errors.reason"
                  class="label"
                >
                  <span class="label-text-alt text-red-500">{{ errors.reason }}</span>
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
                <small
                  v-if="errors.terms"
                  class="text-red-500"
                >
                  {{ errors.terms }}
                </small>
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
import {adoptionFormSchema} from '~/validations/AdoptionRequestSchemaValidation';
import {vMaska} from "maska/vue"
import {useCatStore} from "~/stores/cats/catsStore";

const props = defineProps({
  index: {type: Number, required: true},
})

const store = useCatStore()

const open = ref(false)
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  reason: '',
  terms: false,
})
const errors = ref({
  fullName: '',
  email: '',
  phone: '',
  reason: '',
  terms: '',
});

function toggleModal() {
  open.value = !open.value
  document.getElementById(`${props.index}-cat`).showModal();
}

function validateForm() {
  errors.value = {
    fullName: '',
    email: '',
    phone: '',
    reason: '',
    terms: '',
  }
  try {
    adoptionFormSchema.parse(form.value);
    return true;
  } catch (e) {
    if (e.errors) {
      e.errors.forEach(error => {
        errors.value[error.path[0]] = error.message;
      });
    }
    return false;
  }
}

function submit() {
  if (validateForm()) {
    store.createCat(form.value)
  }
}
</script>

<style>
dialog {
  border-radius: 1rem !important;
}
</style>