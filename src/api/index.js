import http from "../utils/http.js"

//正在热映
export const movieNowApi = (id=1)=> http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:id
    }
})
//即将上映
export const movieCommingApi = (id=10)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:id
    }
})

//搜索

export const movieSearch = (id,value)=>http({
    url:"/api/searchList",
    data:{
        cityId:id,
        kw:value,
    }
})


//详情页面

export const movieDetail = (movieId)=>http({
    url:"/api/detailmovie",
    data:{
        movieId:movieId
    }
})


export const movieDetailaa = (id)=>http({
    url:"/ajax/cinemaList?day=2019-11-17&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1573983046130&cityId=1",
    data:{
        id:id
    }
})