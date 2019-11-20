<template>
  <div class="header">
    <header>
      <div @click="clickHandler()" class="text-icon" v-if="$route.meta.btn">
        <i></i>

      </div>{{val.nm}}
    </header>

   
  </div>
</template>

<script>
export default {
  props:["val"],
  data() {
    return {
    //   onOffText: "展开",
    //   onOff: false
    };
  },
  created(){
        // console.log(this.comingList)
  },
  methods: {
    clickHandler() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.5rem;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background: #e54847;
  font-size: 0.22rem;
  text-align: center;
  line-height: 0.5rem;
  color: #fff;
}
.text-icon > i {
  position: absolute;
  left: 0.1rem;
  top: 0.16rem;
  display: block;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* .product {
  font-size: 0.14rem;
  height: 100%;
}

.movie-info {
  background: rgb(26, 56, 64);
  height: 100%;
  padding: 0.21rem 0.16rem;
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

.product {
  font-size: 0.14rem;
  height: 100%;
}

.movie-info {
  background: rgb(26, 56, 64);
  height: 100%;
  padding: 0.21rem 0.16rem;
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
    }*/

</style>
