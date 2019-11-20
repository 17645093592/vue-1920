<template>
    <div id="app">
        <Header v-if="$route.meta.header"/>
        <Content class="zhong">
            <router-view></router-view>
        </Content>
        <Footer v-if="$route.meta.flooter"/>
    </div>
   
</template>

<script>
import Header from "./public/header/header.vue"
// import Content from "./public/content/content.vue"
import Footer from "./public/footer/footer.vue"

export default {
  components:{
      Header,
    //   Content,
      Footer
  },
    data(){
        return{

        }
    },
    methods:{
        clickHandler(){

        }
    },

}
</script>

<style scoped>
.app{
    overflow: hidden;height: 100%;
}
.zhong>div{
    padding: .5rem 0 .48rem 0 
}
</style>