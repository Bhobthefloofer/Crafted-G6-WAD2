import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css'; // Import Tailwind from your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


createApp(App)
  .use(router) // Use the router
  .mount('#app');
