import Vue from 'vue'
import VueRouter  from 'vue-router'
import UserList from '@/components/UserList.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
 

Vue.use(VueRouter)

const routes =  [
    { path : '/UserList' ,component : UserList }  ,
    { path : '/Register' , component : Register ,name : 'Register' } ,
    { path : '/Login' , component : Login ,name : 'Login' } ,
       
]

const router  =  new VueRouter({
    mode : 'history',
    routes
})

export default router;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}