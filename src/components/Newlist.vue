<template>
    <div class="">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
                <router-link :to="'/home/newinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>时间：{{item.add_time | dateFormat }}</span>
                            <span>点击：{{item.isdel}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data: ()=>({
        newlist:[]
    }),
    created(){
        this.getNewList();
    },
    methods:{
        getNewList(){
            this.$http.get('api/getnewslist').then(result=>{
                
                if(result.body.status ==0){
                    
                    this.newlist = result.body.message;
                }else{
                    Toast("获取数据失败")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>