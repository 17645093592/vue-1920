<template>
     <div class="city_body aa" ref="contationr">
    <!--热门城市-->
      <div class="content_city" ref="scroll">
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" v-for="(item,index) in hotCity" :key="index">{{item.nm}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="list">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <div class="city_title_letter" >{{item.index}}</div>
            <div class="city_list_name">
              <v-touch
              tag="div"
              @tap="handlerToMovie(child)"
               class="city_list_name_item"
                v-for="(child,idx) in item.list"
                 :key="idx">
                 {{child.nm}}
              </v-touch>
            </div>
          </div>
        </div>
      </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <v-touch
        tag="div"
        class="index_item"
         v-for="(item,index) in cityList"
          :key="index"
          @tap="handlerTo(index)"
      >
      {{item.index}}
      </v-touch>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState, mapMutations} from "vuex"
export default {
    name:"City",
    data(){
        return{
            IndexAnchor:""
        }
    },
    created(){
        this.handleGetCity()
    },
    computed:{
      ...mapState({
        cityList:state=>state.city.cityList,
        hotCity:state=>state.city.hotCity
      })
    },
    methods:{
        ...mapActions({
            handleGetCity:"city/handleGetCity"
        }),
        ...mapMutations({
          handleModify:"city/handleModify"
        }),
        handlerTo(index){
            var indexlist = this.$refs.list.querySelectorAll(".city_title_letter")
           //点击谁 就是谁的自身离顶部的距离
          //  console.log(indexlist[index].offsetTop)
            this.$refs.contationr.scrollTop = indexlist[index].offsetTop
            
            // this.$refs.scroll.handleScrollTop(indexlist[index].offsetTop)
        },
        handlerToMovie(info){
          // console.log(info)
          this.$router.go(-1);
          this.handleModify(info)
        }
        // handleScrollTop(t){
        //   this.scroll.scrollTo(0,-t,300)
        // }
    },
  
}

</script>

<style scoped>
.aa{
    padding: 0 !important
}
.city_body {
  background: #ebebeb;
  height: 100%;
  overflow:hidden;
  position: absolute;
  width: 100%
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  /* padding-right: 0.6rem; */
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: .5rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.18rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.18rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: .6rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.15rem;
}
.aa{
  overflow: auto;
  overflow-x: hidden;
}
</style>