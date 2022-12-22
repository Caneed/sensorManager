import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/sign',
        name: 'sign',
        component: () => import('@/views/Sign.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/Main.vue'),
        children: [
            {
                path: 'project',
                name: 'project',
                component: () => import('@/views/Project.vue')
            },
            {
                path:'gateway',
                name:'gateway',
                component:()=>import('@/views/GateWay.vue'),
            },
            {
                path:'Edit',
                name:'edit',
                component:()=>import('@/views/Edit.vue')
            },
            {
                path: 'userCenter',
                name: 'userCenter',
                component: () => import('@/views/UserCenter.vue')
            }, {
                path: 'aiManager',
                name: 'aiManager',
                component: () => import('@/views/AiManager.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
