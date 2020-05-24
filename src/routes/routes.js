import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/home.vue';
import about from '../components/about.vue';
import work from '../components/work.vue';
import contact from '../components/contact.vue';


Vue.use(VueRouter);
export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/work',
      component:work
    },
    {
      path:'/contact',
      component:contact
    },
  ]
});