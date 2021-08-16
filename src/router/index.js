import { createRouter,createWebHistory } from 'vue-router'

// import VueRouter from 'vue-router'



export const constantRoutes = [
    {
        path: '/',
        component:()=>import('@/views/home/index')
    },
    {
        path:'/about',
        component:()=>import('@/views/about/index')
    },
    {
        path:'/photo',
        component:()=>import('@/views/photos/index')
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes:constantRoutes
})

// export function resetRouter(){
//     const newRouter = createRouter
//     router.matcher = newRouter.matcher
// }

export default router