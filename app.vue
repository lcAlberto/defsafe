<template>
  <div
    class="h-[90vh]"
    data-theme="my"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <notifications position="top right" />
  </div>
</template>

<script
    lang="ts"
    setup
>
import {Notifications} from "@kyvg/vue3-notification";
</script>
