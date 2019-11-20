export default{
    path:"/search",
    name:"search",
    meta:{
        header:true,
        flooter:false,
        btn:true
    },
    component:()=>import("../../components/search/index.vue")
}