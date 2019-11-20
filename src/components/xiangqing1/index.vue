<template>
  <div class="product">
    <Header :val="detailMovie"/>

    <!-- <down-load-app/> -->
    <div class="movie-info">
      <div class="movie">
        <img
          class="poster"
          :src="detailMovie.img | toImg('128.180')"
          alt
        />
        <div class="movie-desc">
          <p class="movie-name">{{detailMovie.nm}}</p>
          <p class="movie-english-name">{{detailMovie.enm}}</p>
          <p class="movie-cat">{{detailMovie.cat}}</p>
          <p class="actors">{{detailMovie.star}}</p>
          <p class="movie-show-time">{{detailMovie.pubDesc}}</p>
          <div class="look">
            <button class="likes" @click="clickHandler()">想看</button>
            <button class="no-like">不想看</button>
          </div>
        </div>
      </div>
      <div class="mouth">
        <div class="top">实时口碑</div>
        <div class="middle">
          <span>{{detailMovie.wish}}</span>
          <span>人想看</span>
        </div>
        <div class="bottom">上映首周评 <span class="aaa">{{detailMovie.sc}}</span> </div>
      </div>
      <div class="brief-introduction">
        <div>
          <span>简介</span>
          <span @click="onOff = !onOff">{{onOffText}}}</span>
        </div>
        <div
          :class="{'line-clamp-3':!onOff}"
        >{{detailMovie.dra}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../xiangqing/header/index.vue";
import {movieDetail} from "../../api/index"
export default {
  components: {
    Header
  },
  async created(){
    let {id} = this.$route.query;
    let data = await movieDetail(id)
    this.detailMovie =   data.data.detailMovie
    console.log()
    
  },
  data() {
    return {
      onOffText: "展开",
      onOff: false,
      detailMovie:[]
    };
  },
  methods:{
    clickHandler(){
      this.detailMovie.wish++
    }
  }
};
</script>
<style scoped>
.product {
  font-size: 0.14rem;
  height: 100%;
}

.movie-info {
  background: rgb(26, 56, 64);
  height: 100%;
  padding: 0.21rem 0.16rem;
}
.aaa{
  color: yellow
}
.movie {
  display: flex;
  align-items: center;
}
.poster {
  width: 1.03rem;
  height: 1.4rem;
  margin-right: 0.12rem;
}

.mouth {
  width: 3.3rem;
  height: 1.29rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.1rem;
  margin-top: 0.2rem;
  color: #fff;
  box-sizing: border-box;
  padding: 0.15rem 0.15rem;
}

.middle {
  width: 100%;
  height: 0.65rem;
  text-align: center;
  line-height: 0.65rem;
}

span:nth-child(1) {
  color: red;
}

span:nth-child(2) {
  color: green;
}
</style>

