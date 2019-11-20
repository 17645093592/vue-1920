<template>
    <div class="header">
        <header>
            <div @click="clickHandler()" class="text-icon" v-if="$route.meta.btn">
                <i></i>
            </div>
            猫眼影院
        </header>
    </div>
</template>

<script>
export default {
    methods:{
        clickHandler(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;height: .5rem;
    }
    .header{
        position: fixed;top: 0;left: 0;width: 100%;height: .5rem;
        background:#e54847;font-size: .22rem;
        text-align: center;line-height: .5rem;color: #fff;z-index: 2;
    }
    .text-icon>i{
        position: absolute;
        left: .1rem;
        top:.16rem;
        display: block;
        width: 16px;
        height: 16px;
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-left:.15rem
    }


</style>