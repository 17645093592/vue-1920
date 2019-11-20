<template>
  <!-- <div class="box">
    <div class="logo">最受欢迎的电影</div>
    <div class="dabox">
      <ul>
        <li v-for="item in list" :key="item.id">
          <img
            src="https://p0.meituan.net/170.230/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg"
            alt
          />
          <b>
            <span class="spana">
              <span>99999</span>
              人想看
            </span>
          </b>
          <p>塘人家探案</p>
          <p>2020年1月25日</p>
        </li>
      </ul>
    </div>
  </div> -->
   <div class="movie-scroll">
        <p class="title">近期最受期待</p>
        <div class="out-div" ref="outDiv">
            <ul class="lists" ref="lists">
                <v-touch tag="li"  @tap="clickHandler(item.id)" v-for="item in list" :key="item.id">
                    <div class="movie-img">
                        <img :src="item.img | toImg('128.180')" alt="">
                        <div class="shadow"></div>     
                        <div class="wish"><span class="wish-num">{{item.wish}}</span>人想看</div>
                    </div>
                    <p class="name line-ellipsis">{{item.nm}}</p>
                    <p class="date">{{item.rt}}</p>
                </v-touch>
            </ul>
        </div>
    </div>
</template>

<script>
import { movieNowApi } from "../../../api";
import BScroll from "better-scroll"
export default {
  async created() {
    let data = await movieNowApi();
    this.list = data.data.movieList;
    // console.log(this.comingList)
  },
  data() {
    return {
      list: []
    };
  },
  mounted(){
      let outDiv = this.$refs.outDiv;
    //   let lists = this.$refs.lists;
      this.scroll = new BScroll(outDiv,{
          scrollX :true
      })
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
/* .logo{color: red;margin-left: .1rem}
    .box{
        width: 100%;font-size: .14rem
    }
    ul{
        display:inline-flex
    }
    ul>li{margin-left: .1rem;position: relative;}
    ul>li>img{
        width: .85rem;display: block
    }
    .spana{
        position: absolute;bottom: .65rem;color: #faaf00
    } */
.movie-scroll {
  padding: 0.12rem 0.15rem;
  font-size: 0.14rem;
}

.title {
  color: #333;
  margin-bottom: 0.12rem;
}

.out-div {
  overflow: hidden;
}

.lists {
  display: inline-flex;
}

li {
  display: inline-block;
  flex: 0 0 auto;
  width: 0.85rem;
  overflow: hidden;
  margin-right: 0.1rem;
}
.movie-img {
  width: 100%;
  position: relative;
}

img {
  width: 100%;
}

.shadow {
  display: inline-block;
  width: 100%;
  height: 0.35rem;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}

.wish {
  position: absolute;
  left: 0.04rem;
  bottom: 0.02rem;
  color: #faaf00;
  font-size: 0.11rem;
  font-weight: 600;
}

.name {
  font-size: 0.13rem;
  color: #222;
  margin-bottom: 0.03rem;
}

.date {
  font-size: 0.12rem;
  color: #999;
}
</style>
                   
                      