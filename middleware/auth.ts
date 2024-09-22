export default defineNuxtRouteMiddleware(() => {
  const accessToken = useCookie('token')
  
  if (!accessToken.value) {
    return navigateTo('/login')
  }
})
