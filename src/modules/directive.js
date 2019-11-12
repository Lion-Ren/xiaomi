import Vue from "vue"

// 注册全局自定义指令  v-backtop
Vue.directive("backtop",{
    inserted(el,binding,vnode){
        el.addEventListener("click",e=>{
            window.scrollTo(0,0)
        })
    }
})