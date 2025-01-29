/* global  __VITE_APP_VERSION__ */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@unhead/vue';
import { register } from 'swiper/element/bundle';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import NavLayout from '@/layouts/NavLayout.vue';

import '@/assets/index.css';

localStorage.setItem('version', __VITE_APP_VERSION__);

const app = createApp(App);
const head = createHead();

register();

app.use(router);
app.use(head);

app
  .component('DefaultLayout', DefaultLayout)
  .component('BlankLayout', BlankLayout)
  .component('NavLayout', NavLayout);

router.isReady().then(() => {
  app.mount('#app');
});
