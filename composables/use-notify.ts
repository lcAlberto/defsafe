import {useNotification} from "@kyvg/vue3-notification";


export default function (type: string, title: string, text: string) {
  const {notify} = useNotification()
  console.log(title);
  notify({
    title: title,
    text: text,
    type: type || 'error'
  });
}