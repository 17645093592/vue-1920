<template>
    <div class="denglu" >
        <van-tabs v-model="active" v-show="age">

            <van-tab title="美团账号登录" class="one">
               <van-cell-group >
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                    />

                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                     <div class="bt" @click="clickHandler1()">登录</div>
                     <div class="subline">
                        <span @click="clickHandlerr()">注册</span>
                        <span>找回密码</span>
                     </div>
                     <div class="copry">
                        <span>© 猫眼电影 客服电话：</span>
                        <span>400-670-5335</span>
                     </div>
                </van-cell-group>
            </van-tab>

            <van-tab title="手机验证登录" class="two">

                <van-cell-group>
                    <van-field
                        v-model="sms"
                        center
                        clearable
                        placeholder="请输入手机号"
                    >
                        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                    </van-field>
                </van-cell-group>

                <van-cell-group>
                      <van-field v-model="value" placeholder="请输入手机验证码" />
                </van-cell-group>

                 <div class="bt" @click="clickHandler2()">登录</div>
                    <div class="subline">
                        <span>注册</span>
                        <span>找回密码</span>
                     </div>
                     <div class="copry">
                        <span>© 猫眼电影 客服电话：</span>
                        <span>400-670-5335</span>
                     </div>
            </van-tab>
        </van-tabs>

        <zhuce/>

       

    </div>
</template>
<script>
import zhuce from "./zhuce/index.vue"
export default {
    components:{
        zhuce
    },
    async created() {
    // this.comingList = data.data.movieList;
  },
    
     data() {
        return {
        active: 2,
        username:"",
        value:"",
        sms:"",
        password:"",
        flag:true,
        age:true
        };
  },
  methods:{
      clickHandler1(){
        // console.log("aaa")
      console.log(this.username,this.password)
     },
    //  注册
     clickHandlerr(){
         this.$observer.$emit("handle",this.flag)
         this.age =false
     },
     
  },
   created(){
        this.$observer.$on("handler",(val)=>{
            this.age = val
        })
    },
    mounted(){
        // this.$axios("/api/aaa",{

        // }).then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })
    }
  
}
</script>

<style scoped>
.one{
    background: #ccc

}
.bt{
    width: 100%;height: .4rem;background: red;
    font-size: 0.18rem;
    text-align: center;
    line-height: .4rem;
    color: #fff;
    margin-top: .2rem
}
.subline{
    height: .28rem;padding: .1rem;
    font-size: .14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color-adjust: red;
}
.copry{
    font-size: .14rem;height: .28rem;display: flex;
    align-items: center;justify-content: center;;
}
.copry>span:nth-child(2){
    color: red
}
</style>