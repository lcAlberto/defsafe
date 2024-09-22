<template>
  <aside class="max-w-80 border border-base h-full">
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
      <ul class="p-5">
        <li class="flex gap-4 text-primary items-center">
          <PhCat
            :size="20"
            weight="fill"
          />
          <span>Cat List</span>
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
</script>


<style scoped>

</style>