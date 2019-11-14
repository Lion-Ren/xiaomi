export default {
   /*  name:"home", */
    path:"/home",
    component:()=>import("@/views/Home"),
    children:[
        {path:"",redirect:"home"},
        {path:"home",component:()=>import("@/views/Home/home"),name:"推荐"},
        {path:"phone",component:()=>import("@/views/Home/phone"),name:"手机"},
        {path:"capacity",component:()=>import("@/views/Home/capacity"),name:"智能"},
        {path:"TV",component:()=>import("@/views/Home/TV"),name:"电视"},
        {path:"compute",component:()=>import("@/views/Home/compute"),name:"笔记本"},
        {path:"circum",component:()=>import("@/views/Home/circum"),name:"生活周边"},
        {path:"appliances",component:()=>import("@/views/Home/appliances"),name:"家电"}
    ]
}