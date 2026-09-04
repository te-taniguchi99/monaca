import { createApp } from 'vue';
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Framework7本体のCSS(iOS/Android両テーマ込みのbundle版)
import 'framework7/css/bundle';
import './css/style.css';

import App from './App.vue';

// Framework7にVue用プラグインを登録する(f7-app等のコンポーネントを使えるようにする)
Framework7.use(Framework7Vue);

const app = createApp(App);
// f7-page, f7-navbar など全Framework7コンポーネントをVueアプリに登録する
registerComponents(app);
app.mount('#app');
