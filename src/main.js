import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import { Card,GoodsAction, GoodsActionIcon, GoodsActionButton,PullRefresh,List,Col, Row,Toast,CellGroup,Field,Tab, Tabs,Button,NavBar,Icon,Tabbar, TabbarItem,Swipe,SwipeItem,Lazyload   } from 'vant';
Vue.use(Card).use(GoodsAction).use( GoodsActionIcon).use(GoodsActionButton).use(PullRefresh).use(Toast).use(CellGroup).use(Field).use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)
.use(Lazyload).use(Tab).use(Tabs).use(Col).use(Row).use(List);

import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
