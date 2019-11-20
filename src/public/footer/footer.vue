<template>
    <div class="footer">
        <ul>
            <!-- <router-link 
                :to="item.path"
                tag="li"
                v-for="(item,index) in navig" 
                :key="index">
                {{item.name}}
            </router-link> -->
            <li :class="active == index ? 'color' : ''" v-for="(item,index) in navig" :key="index" @click="clickHandler(index)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navig:["电影","影院","我的"],
            active:0
                
        }
    },
    methods:{
        clickHandler(index){
            this.active = index
            switch(index){
                case 0:
                    this.$router.push("/")
                    break;
                 case 1:
                    this.$router.push("/movie")
                    break;
                 case 2:
                    this.$router.push("/mine")
                    break;
            }
        }
    }
    
    
}

 
</script>

<style scoped>
 .footer{
    width: 100%;height: .48rem;background:#fff ;
    position: fixed;bottom: 0;left: 0;
    font-size: .2rem
}
.footer>ul{
    width: 100%;height: 100%;display: flex;border-top: .01rem solid #ccc
}
.footer>ul>li{
    list-style: none;flex: 1;text-align: center;line-height: .48rem;
    border-left: .01rem solid #fff;
    

}
 .color{
        color:red    
    }

</style>