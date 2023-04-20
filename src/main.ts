import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Vue3Toastify, { ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';

createApp(App)
    .use(createPinia())
    .use(router)
    .use(Vue3Toastify, {
        position: 'bottom-right',
        theme: 'dark',
        autoClose: 3000
    } as ToastContainerOptions)
    .mount('#app');
