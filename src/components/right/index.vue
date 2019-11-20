<template>
<Alley-Bscroll>
  <ul class="list">
    <Scroll/>

    <v-touch tag="li"  @tap="clickHandler(item.id)" v-for="(item,index) in movieApi" :key="index">
      <p class="list-date">{{item.comingTitle}}</p>
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
            <span>9.1</span>
          </p>
          <p class="performer font-13 color-666 line-ellipsis">主演: {{item.star}}</p>
          <p class="show-type font-13 color-666 line-ellipsis">{{item.showInfo}}</p>
        </div>
        <div :class="item.showst == 1?'aa':'btn'">{{item.showst == 1?'想看':'预购'}}</div>
      </div>
    </v-touch>
  </ul>
  </Alley-Bscroll>
</template>

<script>
import {movieCommingApi} from "../../api"
import Scroll from "./header/index.vue"
export default {
  components:{
    Scroll
  },
  async created(){
    let data = await movieCommingApi()
    this.movieApi = data.data.comingList
    // console.log( this.movieApi)
  },
  data(){
    return{
      movieApi:[]
    }
  },
  methods:{
    clickHandler(id){
      // this.$router.push({name:"xiangqing",query:{id}})
      this.$router.push({name:"xiangqing",query:{id}})

    }
  }
};
</script>

<style scoped>
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
    background-color: #faaf00;
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