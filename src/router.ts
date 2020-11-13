import {createRouter, createWebHistory} from "vue-router";

export const routerHistory = createWebHistory()

export const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: '/',
            component: () => import('./views/Main.vue')
        },
        {
            path: '/test',
            component: () => import('./views/Test.vue')
        }
    ]
})