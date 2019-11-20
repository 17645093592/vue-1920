export default {
    path:"/movie",
    name:"movie",
    meta:{
        header:true,
        flooter:true
    },
    component:()=>import("../../pages/movie/index.vue")
}