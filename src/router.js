import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Setting from './views/Settings.vue';
import User from './views/Users.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Error from './views/Error.vue';
import { getUser } from "./api";

const routes = [
    { 
        path: '/', 
        component: Dashboard, 
        props: { pageTitle: 'Dashboard' },
        meta: { layout: 'AppLayout',requiresAuth: true } 
    },
    { 
        path: '/dashboard', 
        component: Dashboard, 
        props: { pageTitle: 'Dashboard' },
        meta: { layout: 'AppLayout' ,requiresAuth: true}
    },
    { 
        path: '/settings', 
        component: Setting, 
        props: { pageTitle: 'Settings' },
        meta: { layout: 'AppLayout',requiresAuth: true }
    },
    { 
        path: '/users', 
        component: User, 
        props: { pageTitle: 'Users' },
        meta: { layout: 'AppLayout',requiresAuth: true }
    },
    { 
        path: '/login', 
        component: Login, 
        meta: { layout: 'AuthLayout' } 
    },
    { 
        path: '/register', 
        component: Register, 
        meta: { layout: 'AuthLayout' } 
    },
    { 
        path: '/error', 
        component: Error, 
        meta: { layout: 'ErrorLayout' } 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    try {
        const user = await getUser();
        if (to.meta.requiresAuth && !user) {
            next('/login');
        } else if (to.path === '/login' && user) {
            next('/dashboard');
        } else {
            next();
        }
    } catch (error) {
        if (to.meta.requiresAuth) {
            next('/login');
        } else {
            next();
        }
    }
});


export default router;