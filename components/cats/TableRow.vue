<template>
  <tr>
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="mask mask-circle h-14 w-14">
            <img
              :src="props.cat.image"
              alt="Avatar Tailwind CSS Component"
            >
          </div>
        </div>
      </div>
    </td>
    <td>
      <div class="flex flex-col">
        <span>
          {{ props.cat.name }}
        </span>
        <div
          v-if="props.cat.isAdopted"
          class="badge badge-primary badge-sm text-xs"
        >
          Adopted
        </div>
      </div>
    </td>
    <td>
      {{ props.cat.description }}
    </td>
    <th>
      <div class="flex">
        <edit-cat-modal :cat-data="props.cat" />
        <delete-modal
          :cat-id="props.cat.id"
          :disabled="props.cat.isAdopted"
        />
      </div>
    </th>
  </tr>
</template>
<script
    lang="ts"
    setup
>
import EditCatModal from "~/components/cats/EditCatModal.vue";
import DeleteModal from "~/components/cats/DeleteModal.vue";

const props = defineProps({
  cat: {type: Object, required: true}
})
</script>


<style scoped>

</style>