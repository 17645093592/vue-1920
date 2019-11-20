import Vue from 'vue'
import Router from "vue-router"
import Cinema from "./cinema"
import Movie from "./movie"
import Mine from "./mine/index"
import Search from "./search"
import Lite from "./lite"
import Xiangq from "./xiangqing"
Vue.use(Router)

let router = new Router({
    // mode:"hash",
    mode: "history",
    routes:[
        {
            path:"/",
            redirect: "/cinema/left",
            meta:{
                header:true,
                flooter:false
            },
        },
        Cinema,
        Movie,
        Mine,
        Search,
        Lite,
        Xiangq,
    ],

})

export default router