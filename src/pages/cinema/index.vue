<template>
    <div class="daohang">
        <Banner/>
        <router-view></router-view>
    </div>
</template>

<script>
import Banner from "./header/index.vue"
export default {
    components:{
        Banner
    } 
}
</script>

<style scoped>

</style>