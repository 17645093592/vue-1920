<template>
    <div class="search">
        <Header/>
        <input ref="aa"  @input="inputent" class="inputa" placeholder="请输入电影名称" type="text" v-model="value">
         <ul class="list">
            <li @click="clickHandler(item.id)" v-show="flag" v-for="item in lista" :key="item">
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
            </li>
  </ul>

    </div>
</template>

<script>
import {movieNowApi} from "../../api"
import {movieCommingApi} from "../../api"
import Header from "../../public/header/header.vue"
import { link } from 'fs';
export default {
    components:{
        Header
    },
    async created() {
        // if(this.value == "")return
            let data = await movieNowApi();
            let list = await movieCommingApi()
            this. box = data.data.movieList;
            this. list =list.data.comingList
            // console.log(data)
        this.dabox = this.box.concat(this.list)
    
    // console.log(this.dabox)
  },
  methods:{
      inputent(){
         let aa = this.$refs.aa.value
            if(aa){
                this.flag = true
                return
            }else{
                this.flag = false
            }
      },
      clickHandler(id){
          this.$router.push({name:"xiangqing",query:{id}})
      }
  },
    data(){
        return{
            // movieName:""
            value:"",
            box:[],
            list:[],
            dabox:[],
            flag:false
        }
    },
    computed:{
            lista(){
                // console.log(this.value)
                let arr = []
                for(var i=0;i<this.dabox.length;i++){
                    // console.log(this.dabox[i].nm)
                    if(this.dabox[i].nm.indexOf(this.value) != -1){
                        arr.push(this.dabox[i])
                    }
                }
                // console.log(arr)
                return arr

                // console.log("aaa")
            }
        }
}
</script>

<style scoped>
.search{
    position: relative;overflow-x: hidden
}
.list{
    padding-top: .3rem
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
.inputa{
    width: 100%;height: .3rem;font-size: .14rem;position:absolute;z-index: 2
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