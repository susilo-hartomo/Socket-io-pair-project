import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateRoom from '../components/CreateRoom.vue';
import BlockGame from '../components/BlockGame.vue';
import Login from '../components/LoginForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/room',
    name: 'CreateRoom',
    component: CreateRoom,
  },
  {
    path: '/play',
    name: 'BlockGame',
    component: BlockGame,
  },
  
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from ,next)=>{
  if(to.name == 'BlockGame' && !localStorage.currentUser){
    next({name: 'Login'})
  }else{
    next()
  }
})

export default router;