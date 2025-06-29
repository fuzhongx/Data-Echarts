import server from "@/requert/requert";

export function getData(params){
    return server({
        url:'/data',
        method:'get',
        params
    })
}