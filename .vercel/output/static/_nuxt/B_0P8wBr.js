import{E as a,r as c,J as g,G as u}from"./DZUntpnH.js";import{u as l}from"./GdG2erHO.js";import{u as r}from"./CpAunxkk.js";const y=a("authStore",{state:()=>({authUser:c([]),errors:c([]),loading:!1,token:l("token")||null}),getters:{getAuthUser:o=>o.authUser,getErrors:o=>o.errors,getLoading:o=>o.loading},actions:{async setToken(o,t){const s=l("token");o&&t&&t.length>0?s.value=o+" "+t:s.value=null},async login(o){const t=u();try{await $fetch(`${t.public.baseUrl}/auth/login/`,{method:"POST",body:o}).then(async s=>{var n,i;const e=s==null?void 0:s.data;e!=null&&e.session&&(e!=null&&e.user)&&(this.authUser=e==null?void 0:e.user,await this.setToken((n=e==null?void 0:e.session)==null?void 0:n.token_type,(i=e==null?void 0:e.session)==null?void 0:i.access_token)),console.log("wellcome"),r("success","Login","Wellcome!")}).catch(s=>{if(s)return{error:s,message:"Invalid Credentials"}})}catch(s){console.error(s),r("error","Login","Someting is wrong!")}},async logout(){const o=u();try{await $fetch(`${o.public.baseUrl}/auth/logout`,{method:"POST"}).then(()=>{this.setToken(),g("/login"),r("success","Logout","Bye! See you later!")}).catch(t=>{t&&r("error","Logout","Error on logout!")})}catch(t){console.error(t)}}}});export{y as u};
