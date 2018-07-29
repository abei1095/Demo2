<template>
    <div class="home">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url"> 
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <mui-grid></mui-grid>

    </div>
</template>

<script>
/*
    1.根据api文档使用vue-resource 发送ajax
    2.获取到数据之后给data里面的lunbotulist 重新复制
    2.1 可以使用Toast 做信息的提示
    3.通过v-for 渲染数据
*/
import {Toast} from 'mint-ui'
import MuiGrid from '../muicomponents/Muigrid'
export default {
    data: ()=>({
        msg:"welcome to home",
        lunbotulist:[]
    }),
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            //获取轮播图数据的方法
            this.$http.get('api/getlunbo').then(result => {
                
                if(result.body.status == 0){
                    this.lunbotulist = result.body.message;
                     
                    // console.log(result.body.message);
                }else{
                    Toast({message:"获取数据失败", position: 'bottom',duration: 5000})
                }
            })
        }
    },
    components:{
        "mui-grid":MuiGrid
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item {
        img{
            height: 200px;
            width: 100%;
        }
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: green;
        }
        &:nth-child(3){
            background-color: hotpink;
        }
    }

</style>