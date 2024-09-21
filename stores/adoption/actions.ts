import {useSystemStore} from "~/stores/system/catsStore";

export const actions = {
  
  async adoptCat(param: object, catId: number) {
    const systemStore = useSystemStore()
    await $fetch(`http://localhost:3000/api/adopt/${catId}`, {
      method: 'POST',
      body: param
    }).then((response) => {
      systemStore.showToast('success', `${response.message}`)
    }).catch((error) => {
      this.error = error
      systemStore.showToast('error', `Error making the adoption request`)
    });
  },
}
