import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category'
import Cart from '../views/Cart'
import Profile from '../views/Profile'
import detail from '../views/Detail'
import footerBar from '@/components/FooterBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default :Home,
      'footer-bar': footerBar
    }
  },
  {
    path: '/category',
    name: 'category',
    components: {
      default:Category,
      'footer-bar': footerBar
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default:Cart,
      'footer-bar': footerBar
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      default:Profile,
      'footer-bar': footerBar
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  }
]

const router = new VueRouter({
  routes
})

export default router
