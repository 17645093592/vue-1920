import Vue from "vue"
import Bscroll from "./bascoll/index.vue"

const components = [
    Bscroll
]

const install = (val)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item)
        })
    }
}

export default install;