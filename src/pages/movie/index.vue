<template>
    <div class="movie">
        <div class="one">
            <div class="topbar-bg">
                <router-link to="/lite" tag="div" class="city-entry"><span class="city-name">{{$store.state.city.nm}}</span><i class="city-entry-arrow"></i></router-link>
                <van-search placeholder="请输入搜索关键词" v-model="value" />
            </div>
        </div>
        <div class="box">
            <div class="item" v-for="item in lista" :key="item.id" > 
                <div class="title">
                    <div class="title line-ellipsis">
                        <span class="">{{item.nm}}</span>
                        <span class="price-block">
                            <span class="price">{{item.sellPrice}}</span>
                            <span class="p">元起</span>
                        </span>
                    </div>
                    <div class="location-block box-flex">
                        <div class="flex line-ellipsis">{{item.addr}}-101-26</div>
                        <div class="distance">{{item.distance}}</div>
                    </div>
                    <div class="label-block">
                        <div class="allowRefund">退</div>
                        <div class="endorse">改签</div>
                        <div class="snack">小吃</div>
                        <div class="vipTag">折扣卡</div>
                    </div>
                    <div class="discount-block">
                        <div class="block">
                            <div class="discount-label normal card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                            </div>
                            <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {movieDetailaa} from "../../api/index"
export default {
async created() {
    let data = await movieDetailaa();
    this.movieDetailaa = data.cinemas;
    // console.log(this.movieDetailaa)
    // console.log(this.comingList)
  },
    data() {
    return {
      active: 2,
      show: true,
      value:"",
      movieDetailaa:[]
    };
  },
  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    } 
  },
  computed:{
      lista(){
                // console.log(this.value)
                let arr = []
                for(var i=0;i<this.movieDetailaa.length;i++){
                    // console.log(this.movieDetailaa[i].nm)
                    if(this.movieDetailaa[i].nm.indexOf(this.value) != -1){
                        arr.push(this.movieDetailaa[i])
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
.aa{
    width: 100%;height: 500px;
}
.movie{
    padding: 0
}
.one{
    width: 100%;height: .55rem;background: #f5f5f5
}
.topbar-bg{
    display: flex;
    position: relative;
    top: .05rem;
    }
  .city-entry{
      width: .6rem;
        height: .44rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .1rem;
        font-size: .14rem
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
    .van-search{
        flex: 1;
        height: .44rem;
    }
    .van-search{
        background:#f5f5f5 !important
    }
    .van-cell{
        background: #fff
    }
    .item{
        padding: .13rem .15rem .13rem 0;
        margin-left: .15rem;
        background-color: #fff;
        position: relative;
        overflow: hidden;
    }
    .titel{
        display: block;
        -webkit-box-align: center;
        align-items: center;
    }
    .line-ellipsis{
            height: .23rem;
            line-height: .23rem;
            font-size: .16rem;
            color: #000;
    }
    .price-block{
        color: red;font-size: .2rem
    }
    .location-block {
        margin-top: .06rem;
        font-size: .13rem;
        color: #666;
        line-height: 1.5;
        display: flex;
    }
    .line-ellipsis{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
             -webkit-box-flex: 1;
             flex: 1;
             color: #666;
             font-size: .14rem;
    }
    .distance{
        margin-left: .05rem
    }
    .lavel-block{
        height: .17rem;
    line-height: .17rem;
    margin-top: .04rem;
    margin-bottom: .04rem;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
    }
    .label-block{
    height: .25rem;

    }
    .label-block>div{
        position: relative;
        padding: 0 .03rem;
        height: .15rem;
        line-height: .15rem;
        border-radius: .02rem;
        font-size: .16rem;
        float: left;
        margin-left: .1rem
    }
    .allowRefund{
        color: #589daf;
        margin: 0 !important;
    border: 1px solid #589daf;
    
    }
    .endorse{
        color: #589daf;
    border: 1px solid #589daf;
    }
    .snack{
        color: #f90;
    border: .01rem solid #f90;
        margin-left: .05rem;
    }
    .vipTag{
        color: #f90;
    border: 1px solid #f90;
    margin-left: 5px;
    }
    .discount-block{
            color: #999;
    margin-bottom: 4px;
        font-size: 14px;
}
.discount-label{
        width: 15px;
    height: 14px;
    position: relative;
    top: 3px;
}
.block{
    display: flex
}
.discount-label>img{
    width: 100%
}
.discount-label-text{
    margin-left: .1rem;
    font-size: 11px;

}
.box{
    border-bottom: 1px solid #ccc
}

</style>