<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Alley-Bscroll",

    mounted(){
     this.scroll = new BScroll(this.$refs.wrapper,{
            //下拉刷新
          pullDownRefresh:true,
            //  scrollY :true,
            //上拉加载更多
            pullUpLoad:true
     })
     
    },
    methods:{
        //下拉刷新
        //传一个cb  父组件需要做什么事情就把他传给我就行了
        handlepulingDown(cb){
            this.scroll.on("pullingDown",()=>{
                cb()
            })
        },
        //下拉刷新后通知bscroll可以做下一次请求，并且重新计算高度
        handlerfinishPullDown(){
            this.scroll.finishPullDown();
            //重亲计算滚动区域的高度
            this.scroll.refresh()
        },
        //上拉记载更多
        handlepullingUp(cb){
            this.scroll.on("pullingUp",()=>{
                cb()
            })
        },
         //上拉刷新加载更多后后通知bscroll可以做下一次请求，并且重新计算高度
        handlefinishPullUp(){
                  this.scroll.finishPullUp();
                  this.scroll.refresh();
       
        }
    }
}
</script>

<style scoped>
    .wrapper{
        height: 100%;overflow:hidden;
        height: 600px;
    }
</style>