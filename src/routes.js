import Login from './components/Login.vue';
import Feeds from './components/Feeds.vue';
import SomePage from './components/SomePage.vue';

export default [
    { path: '/', component: Login, name: "login" },
    { path: '/home', component: Feeds, name: "home" },
    { path: '/somePage', component: SomePage, name: "somePage" },
]
