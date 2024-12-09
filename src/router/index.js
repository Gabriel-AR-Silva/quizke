import { createRouter, createWebHistory } from 'vue-router'

const defaultTabName = ' | QuizKe';

const routes = [
    {
        path: '/', 
        name: 'home', 
        component: () => import('@/views/Home.vue'),
        meta: { title: 'Home' + defaultTabName },
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'QuizKe';
    next();
})

export default router