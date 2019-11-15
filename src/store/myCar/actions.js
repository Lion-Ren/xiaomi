import {SYNC_UPDATE} from './const'
export default{
    initCars({commit}){
        var cars = getCar()
        commit(SYNC_UPDATE,cars)
    },

    addGoodInCar({commit},good){
        setTimeout(()=>{
            var cars = getCar()

            let isHas = cars.some(item=>{
                if(item.CommodityId === good.CommodityId){
                    item.num++;
                    return true
                }
            })
            if(!isHas){
                good.num = 1
                cars.push(good)
            }
            localStorage.cars = JSON.stringify(cars)


            commit(SYNC_UPDATE,cars)
        },1000);
    },

    reduceGoodInCar({commit},good){
        setTimeout(()=>{
            var cars = getCar()
            cars = cars.filter(item =>{
                if(item.CommodityId === good.CommodityId){
                    item.num--;
                    if(item.num <= 0) return false;
                }
                return true
            })
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
        },300)        
    }
}


function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}