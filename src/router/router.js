import home from '../components/home'
import login from '../components/login'
import NotFound from '../components/NotFound'
import dashboard from '../components/dashboard'

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/dashboard', component: dashboard },
    { path: '*', component: NotFound }
]

export default routes;