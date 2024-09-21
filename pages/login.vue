<template>
  <div class="flex flex-col md:flex-row justify-evenly h-full  w-full md:w-11/12 xl:w-9/12 gap-4 p-10 mx-auto">
    <div class="bg-login h-1/3 md:h-full md:w-1/2 rounded-2xl relative flex flex-col items-center justify-start pt-5">
      <h1 class="text-xl text-wrap lg:text-4xl text-base-100 font-bold text-center md:mt-44 px-5">
        Wellcome to the Cat Adoption Panel
      </h1>
      <img
        class="absolute bottom-0 w-1/4 md:w-11/12 lg:max-w-md"
        src="~/assets/img/login.png"
      >
    </div>
    <div class="md:w-1/2 flex flex-col justify-center items-start gap-3 py-5 px-10">
      <div class="flex items-center gap-4 text-primary mb-5">
        <PhCat
          :size="50"
          weight="fill"
        />

        <p class="text-xl">
          Cat adoption plataform
        </p>
      </div>
      <div class="flex flex-col justify-start w-full">
        <h1 class="text-xl font-bold">
          Login
        </h1>
        <label class="form-control w-full my-5">
          <span class="label">
            <span class="label-text text-primary font-bold">Full name</span>
          </span>
          <input
            v-model="form.username"
            :class="{ 'is-invalid': errors.username }"
            class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
            placeholder="Enter your full name"
            type="text"
          >
          <span
            v-if="errors.username"
            class="label"
          >
            <span class="label-text-alt text-red-500">{{ errors.username }}</span>
          </span>
        </label>
        <label class="form-control w-full my-5">
          <span class="label">
            <span class="label-text text-primary font-bold">Full name</span>
          </span>
          <input
            v-model="form.password"
            :class="{ 'is-invalid': errors.password }"
            class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"
            placeholder="Enter your full name"
            type="text"
          >
          <span
            v-if="errors.password"
            class="label"
          >
            <span class="label-text-alt text-red-500">{{ errors.password }}</span>
          </span>
        </label>
        <div class="w-full">
          <button
            class="btn btn-primary w-full"
            @click="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script
    lang="ts"
    setup
>
import {PhCat} from "@phosphor-icons/vue";
import {loginFormSchema} from "~/validations/LoginRequestSchemaValidation";
import {useAuthStore} from "~/stores/auth/authStore";

const store = useAuthStore()

const form = ref({
  username: '',
  password: ''
})

const errors = ref({
  username: '',
  password: ''
})

function validateForm() {
  errors.value = {
    username: '',
    password: '',
  }
  try {
    loginFormSchema.parse(form.value);
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
    const param = {
      username: form.value.username,
      password: form.value.password
    }
    store.login(param)
  }
}

definePageMeta({
  layout: 'guest',
})

</script>