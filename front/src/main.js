import { createApp } from 'vue'
import App from './App.vue'
import routes from './components/routes/routes'
import store from "./components/Store/store";

const app  = createApp(App)

app.use(routes)

app.use(store)

app.mount('#app')


