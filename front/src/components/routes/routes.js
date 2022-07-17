import {createRouter,createWebHistory} from "vue-router";
import AuthPage from "../../components/AuthPage.vue"
import RegistrationPage from "../../components/RegistrationPage.vue"
import HomePage from "../UI/HomePage/HomePage";
import Settingspage from "../UI/ChangePage/SettingsPage.vue"
import NotFoundThisComponents from "../UI/ChangePage/NotFoundThisComponents.vue"
import ChangeSettings from "../UI/ChangePage/UISettings/ChangeSettings.vue";
import ErrorPage404 from "../UI/ErrorPage404.vue";
import store from "../Store/store";
const routes =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            redirect: "/home"
        },
        {
            path: "/auth", 
            component: AuthPage,
            name:"auth"
        },
        {
            path: "/register",
            component:RegistrationPage,
            name:"register"
        },
        {
            path:"/home",
            component: HomePage,
            name:"home"
        },
        {
            path:"/settings/",
            component: Settingspage,
            name:"settings",
            redirect: '/settings/account',
            children:[
                {
                    path:"account",
                    component: ChangeSettings
                },
                {
                    path:"address",
                    component: NotFoundThisComponents
                },
                {
                    path:"payment",
                    component: NotFoundThisComponents
                },
                {
                    path:"security",
                    component: NotFoundThisComponents
                }
            ]
        },
		{
			path:"/:pathMatch(.*)*",
			component:ErrorPage404
			
		}
    ],
    mode: 'history',
})
routes.beforeEach( async (to, from , next) => {
    const isAuth = await store.dispatch('ValidateToken');
    if(!isAuth){
        routes.options.routes[4].children.forEach(el => {
            const path = "/settings/" + el.path;
            if(to.path === path){
                return routes.push('/register')
            }
        })
    }
    if(to.name === 'home' && !isAuth){
        routes.push("/register")
    }
    if(to.name === 'register' && isAuth){
        routes.push("/home")
    }
    if(to.name === 'auth' && isAuth){
        routes.push("/home")
    }
    else next()
})
export default routes;
