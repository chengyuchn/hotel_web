import one from '../components/one.vue';
import home from '../components/home.vue';

export default[{
    path: '',
    component: home,
    redirect: '/home'
},{
    path: '/home',
    component: home
},{
    path: '/one',
    component: one
}]