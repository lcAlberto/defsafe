import { d as defineStore, c as navigateTo, u as useRuntimeConfig } from './server.mjs';
import { ref } from 'vue';
import { u as useCookie } from './cookie-BtMhqDlC.mjs';
import { u as useNotify } from './use-notify-Bfz9ZjHx.mjs';

const useAuthStore = defineStore("authStore", {
  state: () => ({
    authUser: ref([]),
    errors: ref([]),
    loading: false,
    token: useCookie("token") || null
  }),
  getters: {
    getAuthUser: (state) => state.authUser,
    getErrors: (state) => state.errors,
    getLoading: (state) => state.loading
  },
  actions: {
    async setToken(type, token) {
      const accessToken = useCookie("token");
      if (type && token && token.length > 0) {
        accessToken.value = type + " " + token;
      } else {
        accessToken.value = null;
      }
    },
    async login(payload) {
      const config = useRuntimeConfig();
      try {
        await $fetch(
          `${config.public.baseUrl}/auth/login/`,
          {
            method: "POST",
            body: payload
          }
        ).then(async (response) => {
          var _a, _b;
          const data = response == null ? void 0 : response.data;
          if ((data == null ? void 0 : data.session) && (data == null ? void 0 : data.user)) {
            this.authUser = data == null ? void 0 : data.user;
            await this.setToken((_a = data == null ? void 0 : data.session) == null ? void 0 : _a.token_type, (_b = data == null ? void 0 : data.session) == null ? void 0 : _b.access_token);
          }
          console.log("wellcome");
          useNotify("success", "Login", "Wellcome!");
        }).catch((error) => {
          if (error) {
            return {
              error,
              message: "Invalid Credentials"
            };
          }
        });
      } catch (e) {
        console.error(e);
        useNotify("error", "Login", "Someting is wrong!");
      }
    },
    async logout() {
      const config = useRuntimeConfig();
      try {
        await $fetch(
          `${config.public.baseUrl}/auth/logout`,
          {
            method: "POST"
          }
        ).then(() => {
          this.setToken();
          navigateTo("/login");
          useNotify("success", "Logout", "Bye! See you later!");
        }).catch((error) => {
          if (error) {
            useNotify("error", "Logout", "Error on logout!");
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=authStore-CYv3PTET.mjs.map
