<template>
<Alley-Bscroll class="aaa" ref="scroll">
  <!-- <div class="aaa" ref="box"> -->
    <ul class="list">
      <v-touch tag="li"  @tap="clickHandler(item.id)" v-for="(item,index) in comingList" :key="index">
        <div class="list-views">
          <img
            class="poster"
            :src="item.img | toImg('128.180')"
            alt
          />
          <div class="direction">
            <p class="movie-title line-ellipsis">{{item.nm}}</p>
            <p class="score">
              <span class="font-13 color-666">观众评</span>
              <span>{{item.sc}}</span>
            </p>
            <p class="performer font-13 color-666 line-ellipsis">主演: {{item.star}}</p>
            <p class="show-type font-13 color-666 line-ellipsis">{{item.showInfo}}</p>
          </div>
          <div :class="item.showst == 3?'btn':'aa'" >{{item.showst == 3?'想看':'预购'}}</div>
        </div>
      </v-touch>
    </ul>
  <!-- </div> -->

</Alley-Bscroll>

</template>

<script>
import {movieNowApi} from "../../api"
import { async } from 'q';
// import BScroll from "better-scroll";
export default {
  async created() {
    let data = await movieNowApi(this.$store.state.city.id);
    this.comingList = data.data.movieList;
    // console.log(this.comingList)
  },
  data() {
      return {
        comingList:[],
        flag:false
      };
    },
  methods: {
      clickHandler(id){
        this.$router.push({name:'xiangqing',query:{id}})
      }
  },
   mounted(){
     //下拉刷新
    this.$refs.scroll.handlepulingDown(async()=>{
      //做下拉刷新的事情
      var arr = [20,40,51,52,56,70,76]
      var index = parseInt(Math.random()*8)
       let data = await movieNowApi(arr[index]);
        if(data.msg == "ok"){
           this.comingList = data.data.movieList;
           this.$refs.scroll.handlerfinishPullDown()
        }
    }),
    //上拉加载啊更多
  this.$refs.scroll.handlepullingUp(async()=>{
    let data = await movieNowApi();
    if(data.msg == "ok"){
      this.comingList = [...this.comingList,...data.data.movieList];
      this.$refs.scroll.handlefinishPullUp()
    
    }
  })

    // if(!this.scroll){
    //   const box = this.$refs.scroll
    //   this.scroll = new BScroll(box,{
    //       scrollY :true,
    //       // probeType:3
    //   })
    // }else{
    //   this.scroll.refresh()
    // }
  //  this.scroll.on("scroll",obj=>{
  //    console.log(obj)
  //  })
  },
 updated(){
    console.log("更新了")
 }
};
</script>

<style scoped>
.aaa{
  overflow: scroll;
  height: 6rem !important;
}

.aa{
      width: .47rem;
    height: .27rem;
    line-height: .28rem;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    border-radius: .04rem;
    white-space: nowrap;
    font-size: .12rem;
    cursor: pointer;
   position: absolute;
    right: .2rem;
  background:#3c9fe6
}
.list > li {
  padding: 0 0.15rem;
  font-size: 0;
}
.list-date {
  padding: 0.12rem 0.15rem 0;
  font-size: 0.14rem;
  color: #333;
}
.list-views {
  padding: 0.12rem 0;
  display: flex;
  align-items: center;
  position: relative;
}
.poster {
  width: 0.64rem;
  height: 0.9rem;
  margin-right: 0.1rem;
}
.direction {
  max-width: 2.1rem;
  margin-right: 0.1rem;
  height: .9rem;
}
.movie-title {
  line-height: 0.24rem;
  font-size: 0.17rem;
  color: #333;
  font-weight: 700;
}
.score {
  font-size: 0;
}
span:nth-child(2) {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.15rem;
}
.font-13{
        font-weight: 700;
    color: #666;
    font-size: 0.12rem;
    margin-right: .05rem
}
.line-ellipsis{
    font-weight: 700;
    color: #666;
    font-size: 0.12rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: .05rem
}
.btn{
    width: .47rem;
    height: .27rem;
    line-height: .28rem;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: .04rem;
    white-space: nowrap;
    font-size: .12rem;
    cursor: pointer;
   position: absolute;
    right: .2rem;
}
.movie-title{
    font-size: .16rem;color: #000;position: relative;top: 0
}

</style>