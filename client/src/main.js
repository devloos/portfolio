/* global  __VITE_APP_VERSION__ */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@unhead/vue';
import { register } from 'swiper/element/bundle';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import NavLayout from '@/layouts/NavLayout.vue';

import MessageSvg from '@/components/svgs/MessageSvg.vue';
import LinkedinSvg from '@/components/svgs/LinkedinSvg.vue';
import InstagramSvg from '@/components/svgs/InstagramSvg.vue';
import GithubSvg from '@/components/svgs/GithubSvg.vue';
import GithubOutlineSvg from '@/components/svgs/GithubOutlineSvg.vue';
import TwitterSvg from '@/components/svgs/TwitterSvg.vue';
import LaptopSvg from '@/components/svgs/LaptopSvg.vue';
import SquareArrowSvg from '@/components/svgs/SquareArrowSvg.vue';
import FolderSvg from '@/components/svgs/FolderSvg.vue';
import ChevronRightSvg from '@/components/svgs/ChevronRightSvg.vue';
import ChevronLeftSvg from '@/components/svgs/ChevronLeftSvg.vue';
import BarsSvg from '@/components/svgs/BarsSvg.vue';
import XSvg from '@/components/svgs/XSvg.vue';

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
  .component('NavLayout', NavLayout)
  .component('MessageSvg', MessageSvg)
  .component('LinkedinSvg', LinkedinSvg)
  .component('InstagramSvg', InstagramSvg)
  .component('GithubSvg', GithubSvg)
  .component('GithubOutlineSvg', GithubOutlineSvg)
  .component('TwitterSvg', TwitterSvg)
  .component('SquareArrowSvg', SquareArrowSvg)
  .component('LaptopSvg', LaptopSvg)
  .component('ChevronRightSvg', ChevronRightSvg)
  .component('ChevronLeftSvg', ChevronLeftSvg)
  .component('BarsSvg', BarsSvg)
  .component('XSvg', XSvg)
  .component('FolderSvg', FolderSvg);

router.isReady().then(() => {
  app.mount('#app');
});
