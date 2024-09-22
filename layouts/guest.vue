<template>
  <div>
    <div class="h-screen mx-auto bg-base-100">
      <slot />
    </div>
  </div>
</template>
<script
    lang="ts"
    setup
>
definePageMeta({
  // middleware: 'auth'
})
</script>


<style scoped>
.bg-gradient {
  background-color: rgba(63, 21, 213, 0.5);
}
</style>