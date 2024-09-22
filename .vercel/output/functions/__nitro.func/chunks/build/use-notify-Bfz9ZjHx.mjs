import { useNotification } from '@kyvg/vue3-notification';

function useNotify(type, title, text) {
  const { notify } = useNotification();
  console.log(title);
  notify({
    title,
    text,
    type: type || "error"
  });
}

export { useNotify as u };
//# sourceMappingURL=use-notify-Bfz9ZjHx.mjs.map
