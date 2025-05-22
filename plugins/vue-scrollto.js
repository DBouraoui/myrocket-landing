// plugins/vue-scrollto.js
import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        duration: 200,
        offset: 100,
        easing: "ease",
        cancelable: true
    })
})