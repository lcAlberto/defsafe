<template>
    <div class="container h-screen mx-auto bg-base-200">
        <slot />
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    // middleware: 'auth'
})
</script>


<style scoped>
.bg-gradient {
    background-color: rgba(63, 21, 213, 0.5);
}
</style>