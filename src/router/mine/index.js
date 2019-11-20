export default {
    path:"/mine",
    name:"mine",
    meta:{
        header:true,
        flooter:true,
        btn:true
    },
    component:()=>import("../../pages/mine/index.vue")
}