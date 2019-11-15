import {SYNC_UPDATE} from "./const"
export default {
    initCars({commit}){
        var cars = getCar();      //从后端获取最新的cars
        commit(SYNC_UPDATE,cars)  //更改vuex里面的cars
    }, 
    addGoodInCar({commit},good){
        setTimeout(() => {
            //获取后端给我的购物车
            var cars = getCar();  //[{CommodityId:XXX,num:1}]
            //需要判断后端给我们的cars里面是否有你传递来的这个商品，如果有的话需要将对应商品的数量+1
            let isHas = cars.some(item=>{
                if(item.action.path === good.action.path){
                    item.num++
                    // alert("添加成功")
                    return true;
                }
            })
            if(!isHas){ //代表添加过来的商品对象good在cars数组里面不存在
                good.num = 1;
                cars.push(good)
                // alert("添加成功")
            }
            //通知后台更新cars
            localStorage.cars = JSON.stringify(cars)
            //前端cars需要多个组件共享，所以前端需要将cars放入到vuex里面进行管理
            //更改state里面的cars，需要调用commit方法来触发具体的mutations的方法，进行同步更新state里面的数据
            commit(SYNC_UPDATE,cars)
        }, 0);
    },
    reduceGoodInCar({commit},good){
        setTimeout(() => {
            var cars = getCar(); 
            cars = cars.filter(item=>{
                if(item.action.path === good.action.path){
                    item.num--
                    if(item.num<=0) return false; //将此商品直接过滤掉了（从数组里面移除掉了）
                }
                return true; //返回true是把符和要求的数据放入到一个新的数组里面。
            })
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
        }, 0);
    }
}


//可以通过localStorage模拟后端
function getCar(){
    return  JSON.parse(localStorage.cars?localStorage.cars:'[]')
}