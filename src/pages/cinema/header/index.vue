<template>
    <div class="header">
        <a href="http://m.maoyan.com/app?channel=mymovie1yuan-dy" class="download-header">
            <div class="down-app-bar">
                <img class="lod-img" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" alt="">
                <div class="app-name">
                    <div class="name">猫眼</div>
                    <div class="desc">在线选座，热门影讯，爱上看电影</div>
                </div>
                <van-button type="warning" class="btn">立即打开</van-button>
            </div>
        </a>

        <div class="white" ref="whit">
            <div class="topbar-bg">
                <router-link to="/lite" tag="div" class="city-entry"><span class="city-name">{{$store.state.city.nm}}</span><i class="city-entry-arrow"></i></router-link>
                <div class="switch-hot">
                    <div @click= clickHandler(index) :key="index" v-for="(item,index) in hot"  class="hot-item" :class="xiabiao == index ? 'active':''">{{item}}</div>
                    <!-- <div @click= clickHandler2() class="hot-item active">即将上映</div> -->
                </div>
                <router-link to="/search" tag="div" class="search"></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            hot:["正在播放","即将上映"],
            xiabiao:0
        }
    },
    mounted(){
        

    },
    methods:{
        clickHandler(index){
            this.xiabiao = index
            // console.log("aaa")
            switch(index){
                case 0 :
                      this.$router.push({path:"/cinema/left"})
                    break;
                case 1 :
                      this.$router.push({path:"/cinema/right"})
                    break;
            }
            // location.href="http://localhost:8080/cinema/aa"
        },
        // clickHandler2(){
        // }
    },
    handerscroll(){
    }
  
}

</script>

<style scoped>
    .header{
        width: 100%;height: 1.09rem;
        background-color: #fff;
        border-bottom: .01rem solid #e6e6e6;
        position: relative;;
        overflow: scroll
    }
    .download-header{
        border-bottom: .01rem solid #e6e6e6;
        height: .64rem;padding: 0 .15rem;
    }
    .down-app-bar{
        height: 100%;display: flex;align-items: center
    }
    .lod-img{
        width: .44rem;height: .44rem;
    }
    .app-name{
        flex: 1;margin-left: .05rem
        
    }
    .btn{
         font-size: .13rem;
         padding: 0;line-height: .3rem;
        width: .68rem;height: .3rem;
    }
    .name{
        font-size: .17rem;
        color: #222;
        line-height:.23rem;
    }
    .desc{
        font-size: .12rem;
         color: #999;
    }

    /* /////////////////////////////// */
    .white{
        display: flex;padding: 0 .15rem
    }
    .topbar-bg{display: flex}
    .city-entry{
        height: .44rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .1rem
    }
    .city-name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
        max-width: 19.2vw;
        font-size: .15rem;
        color: #666;
    }
    .city-entry-arrow{
        width: 0;
        height: 0;
        border: .04rem solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: .04rem;
        margin-top: .05rem;
    }
    .search{
        width: .2rem;
    height: .2rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=) no-repeat;
    background-size: .2rem;
    padding: .1rem .15rem .1rem .1rem;
    background-position: .1rem;
    float: right;
    margin-left: .25rem
    }
    .switch-hot{
        display: flex;
        height: .44rem;
        line-height: .44rem;
        position: relative;
    }
    .hot-item{
        font-size: .15rem;
    color: #666;
    width: .88rem;
    text-align: center;
    margin: 0 .12rem;
    font-weight: 700;
    }
    .active{
        border-bottom: 2px solid #e54847
    }
</style>