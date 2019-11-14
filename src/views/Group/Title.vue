<template>
    <div class="title">
        <ul>
            <li v-for="title in titles"
                :key="title.category_id"
                :id="title.category_id"
                @click="id = title.category_id;setScrollTop(id)"
                :class="['spanColor',{title_active:id===title.category_id}]"
            >
                <span>{{title.category_name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles:null,
            id:653
        }
    },
    created() {
        // 请求数据
        this.$http.get("/api/xiaomi/group")
            .then(res=>{
                // console.log(res.data.data.object_list[0].data)
                this.titles = res.data.data.object_list[0].data;
            })
    },
    methods: {
        // 调用Goods中 setScrollTop(id)函数进行跳转
        setScrollTop(id){
            // this.$parent.$children[2].getScrollTop();
            this.$parent.$children[2].setScrollTop(id)
            // console.log(this.id)
        },

    },
    mounted() {
        // setTimeout(() => {
        //     var scrollTopNum = this.$parent.$children[2].scrollTopNum
        //     console.log(scrollTopNum)
        // }, 10);
    },
}
</script>

<style lang="scss" scoped>
    .title{
        float:left;
        padding: 0 .15rem 1rem 0;
        margin-top: 50px;
        height: 6.67rem;
        overflow: auto;
        position: fixed;
        ul{
            border-right: 0.005rem solid #ccc;
            li{
                height: 0.48rem;
                width: 80px;
                line-height: 0.48rem;
                overflow: hidden;
                text-align: center;
                white-space: nowrap;
                text-overflow:ellipsis;
                
            }
        }
    }
    .spanColor{
        color: #3c3c3c;
    }
    .title_active{
        font-size: 0.17rem;
        color: #fb7d34;
    }
    // 隐藏滚动条
    .title::-webkit-scrollbar {display:none}
</style>