import Home from './components/Home.vue'
import Charts from './components/Charts.vue'
import Table from './components/Table.vue'

const routes = [{
    path: '/',
    component: Home,
    name: 'Home'
}, {
    path: '/charts',
    component: Charts,
    name: 'Charts'
}, {
    path: '/table',
    component: Table,
    name: 'Table'
}, {
    path: '*',
    redirect: '/'
}]

export default routes