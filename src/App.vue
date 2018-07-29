<template>
  <div id="app">
    <!-- 顶部区域  -->
    <mt-header fixed title="黑马程序员固定在顶部"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    
    <!-- 3.渲染组件 -->
    <mui-tabbar></mui-tabbar>
  </div>
</template>

<script>
//引入组件
import MuiTabbar from './muicomponents/MuiTabbar'
export default {
  name: 'App',
  //2.注册组件
  components:{
    'mui-tabbar':MuiTabbar
  }
}
</script>

<style>
body{
  background-color: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform:translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform:translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.4s ease;
}
</style>
