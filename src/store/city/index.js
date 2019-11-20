import {getCity} from "../../api/city"
const state = {
    hotCity:[],
    cityList:[],
    nm:sessionStorage.getItem("nm") || "北京",
    id:sessionStorage.getItem("id") ||1
}

// mapActions  用这个调用
//异步处理
const actions = {
    async handleGetCity({commit}){
        let data = await getCity()
        commit("handleMutation",data.data)
    }
}
const mutations = {
    handleModify(state,info){
        // console.log(info)
        state.nm = info.nm;
        state.id = info.id

        sessionStorage.setItem("nm",info.nm)
        sessionStorage.setItem("id",info.id)

    },
    handleMutation(state,params){
        let city = params.cities
        /*
            hotCity = [{id:id,name:name}]
            cityList = [
                {index:A,list:[{id,name}]},
                {index:B,list:[{id,name}]},
                {index:C,list:[]}
            ]
        */
        
        let hotCity = [], cityList = [];
        //拿热门城市
        for(var i=0;i<city.length;i++){
            if(city[i].isHot){
                hotCity.push({id:city[i].id,nm:city[i].nm})
            }
        }
        // console.log(hotCity)
        //拿城市列表
        /*
            判断当前城市的首字母是否在cityList存在，如果存在则将当前城市添加到对应的list里面
            如果当前城市下标不存在 则创建一个新的对象，创建新的下标并且将当前城市传递到list里面
        */
       for(var i=0;i<city.length;i++){
        let first = city[i].py.slice(0,1).toUpperCase()

        if(isIndex(first)){
            cityList.push({index:first,list:[{id:city[i].id,nm:city[i].nm}]})
        }else{

            for(var j=0;j<cityList.length;j++){
                if(first == cityList[j].index){
                    cityList[j].list.push({id:city[i].id,nm:city[i].nm});
                    break;
                }
            }
        }
    }

    //判断当前首字母是否在cityList中存在

    function isIndex(first){
        var bStop = true;
        for(var i=0;i<cityList.length;i++){
            if(cityList[i].index == first){
                bStop = false;
                break;
            }
        }
        //如果存在为false  不存在为true
        return bStop;
    }
    //城市排序
    cityList.sort((a,b)=>{
        if(a.index>b.index){
            return 1;
        }else{
            return -1
        }
    })
    //    console.log(cityList)
       state.hotCity = hotCity;
       state.cityList = cityList
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}



