/* global  __VITE_APP_VERSION__ */
import '@/assets/index.css';

import { createHead } from '@unhead/vue/client';
import { register } from 'swiper/element/bundle';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';

localStorage.setItem('version', __VITE_APP_VERSION__);

const app = createApp(App);
const head = createHead();

register();

app.use(router);
app.use(head);

router.isReady().then(() => {
  app.mount('#app');
});
