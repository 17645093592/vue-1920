<template>
    <div class="zhuce" v-show="flag">
        <van-tabs v-model="active">
               <van-cell-group >
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                        @input="inputHandler()"
                    />

                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                     <div class="bt" @click="clickHandler1()">注册</div>
                     <div class="subline">
                        <span @click="clickHanderer()">登录</span>
                        <span>找回密码</span>
                     </div>
                     <div class="copry">
                        <span>© 猫眼电影 客服电话：</span>
                        <span>400-670-5335</span>
                     </div>
                </van-cell-group>
        </van-tabs>
    </div>
</template>
<script>
import http from "../../../utils/http"
export default {
    
     data() {
        return {
        active: 2,
        username:"",
        value:"",
        sms:"",
        password:"",
        flag:false,
        age:true,
        data:[]
        };

  },
  methods:{
      inputHandler(){
     
      },
      clickHandler1(){
          
      console.log(this.username,this.password)
      
     },
     clickHanderer(){
         this.$observer.$emit("handler",this.age)
         this.flag = false
     }
   
  },
    created(){
        this.$observer.$on("handle",(val)=>{
            this.flag = val
        })
    },
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