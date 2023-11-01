import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);

app.mount('#app');

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/images/', true, /\.((png)|(jpe?g)|(gif)|(svg))$/));
