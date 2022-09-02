import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/styles/main.scss';

import store from './store/index';

import BaseSection from './components/UI/BaseSection';
import BaseTile from './components/UI/BaseTile';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faAt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSun);
library.add(faMoon);
library.add(faAt);
library.add(faLinkedinIn);
library.add(faGithub);
library.add(faTwitter);

const app = createApp(App);

app.use(store);

app.component('base-section', BaseSection);
app.component('base-tile', BaseTile);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
