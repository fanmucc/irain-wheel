import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import './assets/css/index.less'
import './assets/font/iconfont.js'
import './assets/font/iconfont.css'
import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()

const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc
        }
    ]
})

const app = createApp(App)

app.use(router)


app.mount('#app')
