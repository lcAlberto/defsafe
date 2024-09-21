<template>
  <!--  <div-->
  <!--    v-if="open"-->
  <!--    :class="`alert bg-${toastData.type}`"-->
  <!--    class="absolute shadow-lg top-5 w-1/2 right-1"-->
  <!--    role="alert"-->
  <!--  >-->
  <div
    v-if="open"
    :class="`alert alert-${toastData.type} absolute shadow-lg top-5 w-1/2 right-1`"
    role="alert"
  >
    <PhosphorIconCheck :size="32" />
    <span>{{ toastData.message }}</span>
    <button
      class="btn btn-circle btn-sm p-0 btn-ghost"
      @click="store.hideToast()"
    >
      <PhosphorIconXCircle :size="32" />
    </button>
  </div>
</template>
<script
    lang="ts"
    setup
>
import {useSystemStore} from "~/stores/system/catsStore";

const store = useSystemStore()

const open = computed(() => store.getIsOpenToast);
const toastData = computed(() => store.getToast);
console.log(open.value);

watch(() => open.value, (value) => {
  if (value)
    setTimeout(() => {
      store.hideToast()
    }, 5000)
});

</script>

<style scoped>

</style>