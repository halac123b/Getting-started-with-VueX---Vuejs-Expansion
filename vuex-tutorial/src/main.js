import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import storeConfig from './store'

const store = createStore(storeConfig);
createApp(App).mount('#app');
App.use(store);
