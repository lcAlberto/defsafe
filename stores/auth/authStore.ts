import {defineStore} from 'pinia'
import {navigateTo} from "#app";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authUser: ref([]),
    errors: ref([]),
    loading: false,
    token: useCookie('token') || null,
  }),
  getters: {
    getAuthUser: (state) => state.authUser,
    getErrors: (state) => state.errors,
    getLoading: (state) => state.loading
  },
  actions: {
    
    async setToken(type: string | null, token: string | null) {
      const accessToken = useCookie("token");
      if (type && token && token.length > 0) {
        accessToken.value = type + ' ' + token//barear tken blalaal
      } else {
        accessToken.value = null
      }
    },
    
    async login(payload: { email: string, password: string }) {
      
      const config = useRuntimeConfig()
      try {
        await $fetch(`${config.public.apiUrl}/auth/login/`, {
            method: 'POST',
            body: payload
          }
        ).then(async (response) => {
          const data = response?.data
          if (data?.session && data?.user) {
            this.authUser = data?.user
            await this.setToken(data?.session?.token_type, data?.session?.access_token)
          }
          console.log('wellcome');
          useNotify('success', 'Login', 'Wellcome!')
        }).catch((error) => {
          if (error) {
            return {
              error,
              message: 'Invalid Credentials',
            }
          }
        })
      } catch (e) {
        console.error(e)
        useNotify('error', 'Login', 'Someting is wrong!')
      }
    },
    
    async logout() {
      const config = useRuntimeConfig()
      try {
        await $fetch(`${config.public.apiUrl}/auth/logout`,
          {
            method: 'POST'
          }).then(() => {
          this.setToken();
          navigateTo('/login')
          useNotify('success', 'Logout', 'Bye! See you later!')
        }).catch((error) => {
          if (error) {
            useNotify('error', 'Logout', 'Error on logout!')
          }
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
})