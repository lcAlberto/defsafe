<template>
  <aside class="w-72 max-w-80 border border-base bg-base-100 h-full">
    <div class="flex justify-start items-center gap-3 py-5 px-3 text-primary">
      <PhCat
        :size="32"
        weight="fill"
      />

      <p class="text-lg">
        Cat adoption plataform
      </p>
      <hr>
    </div>
    <div class="h-full px-5 pt-10">
      <p class="text-md uppercase text-base-300 font-bold">
        Main Menu
      </p>
      <ul class="p-5 h-full flex flex-col justify-between">
        <li class="flex gap-4 text-primary items-center hover:bg-purple-200 px-2 py-3 rounded-lg cursor-pointer">
          <PhCat
            :size="20"
            weight="fill"
          />
          <span>Cat List</span>
        </li>
        <li
          class="flex gap-4 text-primary items-center hover:bg-purple-200 px-2 py-3 rounded-lg cursor-pointer"
          @click="logout"
        >
          <PhosphorIconSignOut
            :size="20"
            weight="fill"
          />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script
    lang="ts"
    setup
>

import {PhCat} from "@phosphor-icons/vue";
import {useAuthStore} from "~/stores/auth/authStore";

const store = useAuthStore()

async function logout() {
  await store.logout()
}
</script>


<style scoped>

</style>