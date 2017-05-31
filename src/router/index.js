import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Admin from '@/components/admin/index'
import AdminUsers from '@/components/admin/users'
import AdminBlog from '@/components/admin/blog'
import Login from '@/components/login'
// import routes from './routes'
Vue.use(Router)
const routes = [
  { 
  	path: '/',
  	name: 'Home',
  	component: Home,
    props: { theme: "app"},
    children:[
      { 
        path: 'login',
        name: 'Login',
        component: Login 
      },
      { 
        path: 'contact',
        name: 'Contact',
        component: Contact 
      },
      { 
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'blog',
        name: 'Blog',
        component: Blog
      },

    ],

  },
  {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requiresAuth: true },
        props: { theme: "admin"},
          children: [
            {
               path: 'users',
               name: 'AdminUsers',
               component: AdminUsers
            },
            {
              path: 'blog',
              name: 'AdminBlog',
              component: AdminBlog
            }
          ]
      }  
  
];

export default new Router({
  routes: routes
})
