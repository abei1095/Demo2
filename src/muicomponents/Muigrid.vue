<template>
    <div class="">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in gridlist" :key="item.img" >
                <router-link :to="'/home/' + item.to">
                    <img :src="'../../static/images/'+item.img" alt="">
                    <div class="mui-media-body">{{item.content}}</div>
                </router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
/*
    测试开发环境下，要读取本地的图片路径，要把图片放到static静态文件夹下，读取相应的路径就行了
*/
export default {
    data: ()=>({
        gridlist:[
            {img:"menu1.png",content:"Home",to:"newlist"},
            {img:"menu2.png",content:"Email",to:"photolist"},
            {img:"menu3.png",content:"Chat",to:"newlist"},
            {img:"menu4.png",content:"location",to:"newlist"},
            {img:"menu5.png",content:"Search",to:"newlist"},
            {img:"menu6.png",content:"Phone",to:"newlist"}
        ]
    })
}
</script>

<style lang="scss" scoped>
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
</style>