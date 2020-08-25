import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from './components/Home.vue'
import AppForm from './components/Form.vue'
import AppTable from './components/Table.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: AppHome,
    name: 'Home'
}, {
    path: '/form',
    component: AppForm,
    name: 'Form'
}, {
    path: '/table',
    component: AppTable,
    name: 'Table'
}, {
    path: '*',
    redirect: '/'
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'c-sidebar-nav-link-primary'
})

export default router