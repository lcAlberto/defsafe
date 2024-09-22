<template>
  <div class="flex h-full w-full bg-gray-100">
    <div class="hidden md:block">
      <sidebar-component />
    </div>
    <main class="w-full">
      <navbar-component />
      <slot />
    </main>
  </div>
</template>
<script
    lang="ts"
    setup
>


</script>


<style scoped></style>