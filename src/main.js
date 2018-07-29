// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入的mini-ui
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'

//导入格式化时间的插件
import moment from 'moment'
//定义全局时间的过滤器
Vue.filter('dateFormat',function(dataStr ,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

//引入mui样式
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
//开启node服务器  命令npm start
Vue.use(VueResource)
// 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
Vue.http.options.root = 'http://127.0.0.1:5000/';
// 全局启用 emulateJSON 选项
// 请求会以application / x - www - form - urlencoded作为MIME type，
Vue.http.options.emulateJSON = true;

import { Header,Button, Cell,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

  //render: c=>c(App)  隐藏渲染
})





//组件三部曲 ：  1.定义组件  2.注册组件   3.渲染组件