import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage, // Set the landing page as the component for the home route
  },
  // You can add more routes here for other pages/views
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
