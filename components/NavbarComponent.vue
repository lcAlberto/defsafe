<template>
  <nav class="w-full flex flex-row items-center justify-between px-5 h-20">
    <div class="flex justify-start items-center gap-2 py-5 px-3">
      <button class="btn btn-ghost px-4 py-1">
        <PhCat
          :size="20"
          class="text-primary"
          weight="fill"
        />
      </button>

      <h1 class="text-lg bold">
        Cat List
      </h1>
      <hr>
    </div>
    <register-cat-modal />
  </nav>
</template>
<script
    lang="ts"
    setup
>

import {PhCat} from "@phosphor-icons/vue";
import RegisterCatModal from "~/components/cats/RegisterCatModal.vue";
</script>


<style scoped>

</style>