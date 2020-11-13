import {App as Application, createApp} from "vue"
import {router, routerHistory} from "./router"
import App from './app.vue'

declare global {
    interface Window {
        // h: HTML5History
        h: typeof routerHistory
        r: typeof router
        // @ts-ignore
        vm: ReturnType<Application['mount']>
        app: Application
    }
}

// @ts-ignore
const app = createApp(App)
app.use(router)

window.app = app
window.vm = app.mount('#app')
