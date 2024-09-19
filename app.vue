<template>
  <div>
  </div>
</template>

<script setup lang="ts">

const { $db } = useNuxtApp()

const teste = await $db.from("cats").select();
console.log(teste);

</script>
