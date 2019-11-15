<template>
    <div class="goods">
        <div class="box box0">
            <div v-for="good_bigImg in xinpin_bigImgs"
                :key="good_bigImg.category_id"
                class="bigImgBox"
            >
                <img class="bigImg" :src="good_bigImg.img_url" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{xinpin_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xinpin_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{xinpin_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xinpin_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{xinpin_title_3}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xinpin_product_3"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box1">
            <div v-for="bigImg in zc_bigImgs"
                :key="bigImg.category_id"
                class="bigImgBox"
            >
                <img class="bigImg" :src="bigImg.img_url" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{zc_title}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in zc_product"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box2">
            <div v-for="bigImg in xm_bigImgs"
                :key="bigImg.category_id"
                class="bigImgBox"
            >
                <img class="bigImg" :src="bigImg.img_url" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{xm_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xm_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{xm_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xm_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{xm_title_3}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xm_product_3"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{xm_title_4}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xm_product_4"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{xm_title_5}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xm_product_5"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>

        </div>
        <div class="box box3">
            <div class="title">
                <span>
                    <p>{{rm_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in rm_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{rm_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in rm_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{rm_title_3}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in rm_product_3"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{rm_title_4}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in rm_product_4"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box4">
            <div class="title">
                <span>
                    <p>{{hs_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in hs_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{hs_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in hs_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box5">
            <div class="title">
                <span>
                    <p>{{ds_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ds_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="ds_smallImg" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{ds_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ds_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{ds_title_3}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ds_product_3"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{ds_title_4}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ds_product_4"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box6">
            <div class="title">
                <span>
                    <p>{{djd_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in djd_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="djd_smallImg" alt="">
            </div>
        </div>
        <div class="box box7">
            <div class="title">
                <span>
                    <p>{{dn_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in dn_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="dn_smallImg" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{dn_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in dn_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box8">
            <div class="title">
                <span>
                    <p>{{xa_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in xa_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="xa_smallImg" alt="">
            </div>
        </div>
        <div class="box box9">
            <div class="title">
                <span>
                    <p>{{ly_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ly_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="ly_smallImg" alt="">
            </div>
        </div>
        <div class="box box10">
            <div class="title">
                <span>
                    <p>{{sh_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in sh_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="sh_smallImg" alt="">
            </div>
        </div>
        <div class="box box11">
            <div class="title">
                <span>
                    <p>{{cf_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in cf_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="cf_smallImg" alt="">
            </div>
        </div>
        <div class="box box12">
            <div class="title">
                <span>
                    <p>{{cd_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in cd_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="cd_smallImg" alt="">
            </div>
        </div>
        <div class="box box13">
            <div class="title">
                <span>
                    <p>{{jj_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in jj_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{jj_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in jj_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="jj_smallImg" alt="">
            </div>
        </div>
        <div class="box box14">
            <div class="title">
                <span>
                    <p>{{cz_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in cz_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{cz_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in cz_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="cz_smallImg" alt="">
            </div>
        </div>
        <div class="box box15">
            <div class="title">
                <span>
                    <p>{{gh_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in gh_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{gh_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in gh_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="gh_smallImg" alt="">
            </div>
        </div>
        <div class="box box16">
            <div class="title">
                <span>
                    <p>{{sm_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in sm_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{sm_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in sm_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{sm_title_3}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in sm_product_3"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="sm_smallImg" alt="">
            </div>
        </div>
        <div class="box box17">
            <div class="title">
                <span>
                    <p>{{ry_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ry_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="ry_smallImg1" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{ry_title_2}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ry_product_2"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="ry_smallImg2" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{ry_title_3}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ry_product_3"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{ry_title_4}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ry_product_4"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="ry_smallImg3" alt="">
            </div>
            <div class="title">
                <span>
                    <p>{{ry_title_5}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ry_product_5"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="title">
                <span>
                    <p>{{ry_title_6}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ry_product_6"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
            <div class="smallImg">
                <img :src="ry_smallImg4" alt="">
            </div>
        </div>
        <div class="box box18">
            <div class="title">
                <span>
                    <p>{{yp_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in yp_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box19">
            <div class="title">
                <span>
                    <p>{{fw_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in fw_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box20">
            <div class="title">
                <span>
                    <p>{{mf_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in mf_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
        <div class="box box21">
            <div class="title">
                <span>
                    <p>{{ls_title_1}}</p>
                </span>
            </div>
            <div class="product_box">
                <div 
                    class="product"
                    v-for="product in ls_product_1"
                    :key="product.action.path"
                >
                    <img :src="product.img_url" alt="">
                    <span>{{product.product_name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollTopNum:0,
            // 新品数据
            xinpin_bigImgs:null,
            xinpin_title_1:null,
            xinpin_product_1:null,
            xinpin_title_2:null,
            xinpin_product_2:null,
            xinpin_title_3:null,
            xinpin_product_3:null,
            // 众筹数据
            zc_bigImgs:null,
            zc_title:null,
            zc_product:null,
            // 小米手机数据
            xm_bigImgs:null,
            xm_title_1:null,
            xm_product_1:null,
            xm_title_2:null,
            xm_product_2:null,
            xm_title_3:null,
            xm_product_3:null,
            xm_title_4:null,
            xm_product_4:null,
            xm_title_5:null,
            xm_product_5:null,
            // Redmi数据
            rm_title_1:null,
            rm_product_1:null,
            rm_title_2:null,
            rm_product_2:null,
            rm_title_3:null,
            rm_product_3:null,
            rm_title_4:null,
            rm_product_4:null,
            rm_title_5:null,
            // 黑鲨数据
            hs_title_1:null,
            hs_product_1:null,
            hs_title_2:null,
            hs_product_2:null,
            // 电视数据
            ds_title_1:null,
            ds_product_1:null,
            ds_title_2:null,
            ds_product_2:null,
            ds_title_3:null,
            ds_product_3:null,
            ds_title_4:null,
            ds_product_4:null,
            ds_smallImg:null,
            // 大家电数据
            djd_title_1:null,
            djd_product_1:null,
            djd_smallImg:null,
            // 电脑数据
            dn_title_1:null,
            dn_product_1:null,
            dn_smallImg:null,
            dn_title_2:null,
            dn_product_2:null,
            // 小爱数据
            xa_title_1:null,
            xa_product_1:null,
            xa_smallImg:null,
            // 路由器数据
            ly_title_1:null,
            ly_product_1:null,
            ly_smallImg:null,
            // 生活电器数据
            sh_title_1:null,
            sh_product_1:null,
            sh_smallImg:null,
            // 厨房电器数据
            cf_title_1:null,
            cf_product_1:null,
            cf_smallImg:null,
            // 智能穿戴数据
            cd_title_1:null,
            cd_product_1:null,
            cd_smallImg:null,
            // 智能家居数据
            jj_title_1:null,
            jj_product_1:null,
            jj_title_2:null,
            jj_product_2:null,
            jj_smallImg:null,
            // 车载出行数据
            cz_title_1:null,
            cz_product_1:null,
            cz_title_2:null,
            cz_product_2:null,
            cz_smallImg:null,
            // 个护健康数据
            gh_title_1:null,
            gh_product_1:null,
            gh_title_2:null,
            gh_product_2:null,
            gh_smallImg:null,
            // 数码配件数据
            sm_title_1:null,
            sm_product_1:null,
            sm_title_2:null,
            sm_product_2:null,
            sm_title_3:null,
            sm_product_3:null,
            sm_smallImg:null,
            // 日用百货数据
            ry_title_1:null,
            ry_product_1:null,
            ry_smallImg1:null,
            ry_title_2:null,
            ry_product_2:null,
            ry_smallImg2:null,
            ry_title_3:null,
            ry_product_3:null,
            ry_title_4:null,
            ry_product_4:null,
            ry_smallImg3:null,
            ry_title_5:null,
            ry_product_5:null,
            ry_title_6:null,
            ry_product_6:null,
            ry_smallImg4:null,
            // 有品精选数据
            yp_title_1:null,
            yp_product_1:null,
            // 服务数据
            fw_title_1:null,
            fw_product_1:null,
            // 米粉卡数据
            mf_title_1:null,
            mf_product_1:null,
            // 零售店数据
            ls_title_1:null,
            ls_product_1:null
        }
    },
    created() {
        this.$http.get("/api/xiaomi/group")
            .then(res=>{
                // console.log(res.data)
                // console.log(res.data.data)
                // console.log(res.data.data.object_list[0].data)
                let data = res.data.data.object_list[0].data;
                // 新品数据
                this.xinpin_bigImgs = data[0].category_list[0].body.items;
                this.xinpin_title_1 = data[0].category_list[1].body.category_name;
                this.xinpin_product_1 = data[0].category_list[2].body.items;
                this.xinpin_title_2 = data[0].category_list[3].body.category_name;
                this.xinpin_product_2 = data[0].category_list[4].body.items;
                this.xinpin_title_3 = data[0].category_list[5].body.category_name;
                this.xinpin_product_3 = data[0].category_list[6].body.items;

                // 众筹数据
                this.zc_bigImgs = data[1].category_list[0].body.items;
                this.zc_title = data[1].category_list[1].body.category_name;
                this.zc_product = data[1].category_list[2].body.items;

                // 小米数据
                this.xm_bigImgs = data[2].category_list[0].body.items;
                this.xm_title_1 = data[2].category_list[1].body.category_name;
                this.xm_product_1 = data[2].category_list[2].body.items;
                this.xm_title_2 = data[2].category_list[3].body.category_name;
                this.xm_product_2 = data[2].category_list[4].body.items;
                this.xm_title_3 = data[2].category_list[5].body.category_name;
                this.xm_product_3 = data[2].category_list[6].body.items;
                this.xm_title_4 = data[2].category_list[7].body.category_name;
                this.xm_product_4 = data[2].category_list[8].body.items;
                this.xm_title_5 = data[2].category_list[9].body.category_name;
                this.xm_product_5 = data[2].category_list[10].body.items;

                // Redmi数据
                this.rm_title_1 = data[3].category_list[0].body.category_name;
                this.rm_product_1 = data[3].category_list[1].body.items;
                this.rm_title_2 = data[3].category_list[2].body.category_name;
                this.rm_product_2 = data[3].category_list[3].body.items;
                this.rm_title_3 = data[3].category_list[4].body.category_name;
                this.rm_product_3 = data[3].category_list[5].body.items;
                this.rm_title_4 = data[3].category_list[6].body.category_name;
                this.rm_product_4 = data[3].category_list[7].body.items;

                // 黑鲨数据
                this.hs_title_1 = data[4].category_list[0].body.category_name;
                this.hs_product_1 = data[4].category_list[1].body.items;
                this.hs_title_2 = data[4].category_list[2].body.category_name;
                this.hs_product_2 = data[4].category_list[3].body.items;
                
                // 电视数据
                this.ds_title_1 = data[5].category_list[0].body.category_name;
                this.ds_product_1 = data[5].category_list[1].body.items;
                this.ds_smallImg = data[5].category_list[2].body.items[0].img_url;
                this.ds_title_2 = data[5].category_list[3].body.category_name;
                this.ds_product_2 = data[5].category_list[4].body.items;
                this.ds_title_3 = data[5].category_list[5].body.category_name;
                this.ds_product_3 = data[5].category_list[6].body.items;
                this.ds_title_4 = data[5].category_list[7].body.category_name;
                this.ds_product_4 = data[5].category_list[8].body.items;

                // 大家电数据
                this.djd_title_1 = data[6].category_list[0].body.category_name;
                this.djd_product_1 = data[6].category_list[1].body.items;
                this.djd_smallImg = data[6].category_list[2].body.items[0].img_url;

                // 电脑数据
                this.dn_title_1 = data[7].category_list[0].body.category_name;
                this.dn_product_1 = data[7].category_list[1].body.items;
                this.dn_smallImg = data[7].category_list[2].body.items[0].img_url;
                this.dn_title_2 = data[7].category_list[3].body.category_name;
                this.dn_product_2 = data[7].category_list[4].body.items;

                // 小爱数据
                this.xa_title_1 = data[8].category_list[0].body.category_name;
                this.xa_product_1 = data[8].category_list[1].body.items;
                this.xa_smallImg = data[8].category_list[2].body.items[0].img_url;

                // 路由器数据
                this.ly_title_1 = data[9].category_list[0].body.category_name;
                this.ly_product_1 = data[9].category_list[1].body.items;
                this.ly_smallImg = data[9].category_list[2].body.items[0].img_url;

                // 生活电器数据
                this.sh_title_1 = data[10].category_list[0].body.category_name;
                this.sh_product_1 = data[10].category_list[1].body.items;
                this.sh_smallImg = data[10].category_list[2].body.items[0].img_url;

                // 厨房电器数据
                this.cf_title_1 = data[11].category_list[0].body.category_name;
                this.cf_product_1 = data[11].category_list[1].body.items;
                this.cf_smallImg = data[11].category_list[2].body.items[0].img_url;

                // 智能穿戴数据
                this.cd_title_1 = data[12].category_list[0].body.category_name;
                this.cd_product_1 = data[12].category_list[1].body.items;
                this.cd_smallImg = data[12].category_list[2].body.items[0].img_url;

                // 智能家具数据
                this.jj_title_1 = data[13].category_list[0].body.category_name;
                this.jj_product_1 = data[13].category_list[1].body.items;
                this.jj_title_2 = data[13].category_list[2].body.category_name;
                this.jj_product_2 = data[13].category_list[3].body.items;
                this.jj_smallImg = data[13].category_list[4].body.items[0].img_url;

                // 车载出行数据
                this.cz_title_1 = data[14].category_list[0].body.category_name;
                this.cz_product_1 = data[14].category_list[1].body.items;
                this.cz_title_2 = data[14].category_list[2].body.category_name;
                this.cz_product_2 = data[14].category_list[3].body.items;
                this.cz_smallImg = data[14].category_list[4].body.items[0].img_url;

                // 个护健康数据
                this.gh_title_1 = data[15].category_list[0].body.category_name;
                this.gh_product_1 = data[15].category_list[1].body.items;
                this.gh_title_2 = data[15].category_list[2].body.category_name;
                this.gh_product_2 = data[15].category_list[3].body.items;
                this.gh_smallImg = data[15].category_list[4].body.items[0].img_url;

                // 数码配件数据
                this.sm_title_1 = data[16].category_list[0].body.category_name;
                this.sm_product_1 = data[16].category_list[1].body.items;
                this.sm_title_2 = data[16].category_list[2].body.category_name;
                this.sm_product_2 = data[16].category_list[3].body.items;
                this.sm_title_3 = data[16].category_list[4].body.category_name;
                this.sm_product_3 = data[16].category_list[5].body.items;
                this.sm_smallImg = data[16].category_list[6].body.items[0].img_url;

                // 日用百货数据
                this.ry_title_1 = data[17].category_list[0].body.category_name;
                this.ry_product_1 = data[17].category_list[1].body.items;
                this.ry_smallImg1 = data[17].category_list[2].body.items[0].img_url;
                this.ry_title_2 = data[17].category_list[3].body.category_name;
                this.ry_product_2 = data[17].category_list[4].body.items;
                this.ry_smallImg2 = data[17].category_list[5].body.items[0].img_url;
                this.ry_title_3 = data[17].category_list[6].body.category_name;
                this.ry_product_3 = data[17].category_list[7].body.items;
                this.ry_title_4 = data[17].category_list[8].body.category_name;
                this.ry_product_4 = data[17].category_list[9].body.items;
                this.ry_smallImg3 = data[17].category_list[10].body.items[0].img_url;
                this.ry_title_5 = data[17].category_list[11].body.category_name;
                this.ry_product_5 = data[17].category_list[12].body.items;
                this.ry_title_6 = data[17].category_list[13].body.category_name;
                this.ry_product_6 = data[17].category_list[14].body.items;
                this.ry_smallImg4 = data[17].category_list[15].body.items[0].img_url;

                // 有品精选数据
                this.yp_title_1 = data[18].category_list[0].body.category_name;
                this.yp_product_1 = data[18].category_list[1].body.items;
                
                // 服务数据
                this.fw_title_1 = data[19].category_list[0].body.category_name;
                this.fw_product_1 = data[19].category_list[1].body.items;

                // 米粉卡数据
                this.mf_title_1 = data[20].category_list[0].body.category_name;
                this.mf_product_1 = data[20].category_list[1].body.items;

                // 零售店数据
                this.ls_title_1 = data[21].category_list[0].body.category_name;
                this.ls_product_1 = data[21].category_list[1].body.items;
            })
    },
    methods: {
        getScrollTop(){
            console.log("top:" + document.documentElement.scrollTop)
        },
        setScrollTop(id){
            switch(id){
                case 653:
                    window.scrollTo(0,0)
                    break;
                case 940:
                    window.scrollTo(0,1060)
                    break;
                case 1242:
                    window.scrollTo(0,2380)
                    break;
                case 1243:
                    window.scrollTo(0,3490)
                    break;
                case 1251:
                    window.scrollTo(0,4410)
                    break;
                case 458:
                    window.scrollTo(0,4770)
                    break;
                case 1186:
                    window.scrollTo(0,5744)
                    break;
                case 459:
                    window.scrollTo(0,6067)
                    break;
                case 1157:
                    window.scrollTo(0,6880)
                    break;
                case 462:
                    window.scrollTo(0,7421)
                    break;
                case 460:
                    window.scrollTo(0,7847)
                    break;
                case 1047:
                    window.scrollTo(0,8272)
                    break;
                case 874:
                    window.scrollTo(0,8703)
                    break;
                case 1053:
                    window.scrollTo(0,9031)
                    break;
                case 871:
                    window.scrollTo(0,9747)
                    break;
                case 876:
                    window.scrollTo(0,10352)
                    break;
                case 464:
                    window.scrollTo(0,11066)
                    break;
                case 466:
                    window.scrollTo(0,11852)
                    break;
                case 1197:
                    window.scrollTo(0,14452)
                    break;
                case 737:
                    window.scrollTo(0,15257)
                    break;
                case 670:
                    window.scrollTo(0,15540)
                    break;
                case 468:
                    window.scrollTo(0,15825)
                    break;
            }
        },
        changeTitel(){
            var scrollTopNum = document.documentElement.scrollTop;
            this.scrollTopNum = scrollTopNum;
            // console.log("1." + scrollTopNum)
            // console.log("2." + this.scrollTopNum)
        }
    },
    mounted(){
        window.addEventListener('scroll',this.changeTitel) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    },
}
</script>

<style lang="scss">
    .goods{
        float: right;
        margin-top: 50px;
        overflow: auto;
        position: relative;
        width: 310px;
        padding-bottom: 500px;
        margin-right: -12px;
        .box{
            margin:0 22px;
            float: left;
            .bigImgBox{
                width: 2.5rem;
                height: 1rem;
                margin-left:4px;
                .bigImg{
                    width: 100%;
                    height: 100%;
                }
            }
            .title{
                font-size: 0.15rem;
                height: 0.64rem;
                line-height: 0.64rem;
                text-align: center;
                margin-top: 0.1rem;
                color: #3c3c3c;
                p{
                    width: 266px;
                }
            }
            .product_box{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                .product{
                    display: flex;
                    flex-direction: column;
                    width: 33.3333333%;
                    align-items: center;
                    margin-top: .1rem;
                    margin-bottom: .15rem;
                    img{
                        height: 0.5rem;
                        width: 0.5rem;
                    }
                    span{
                        margin-top: .14rem;
                        white-space: nowrap;
                        font-size: .1rem;
                        color: rgba(0,0,0,.54);
                        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;

                    }
                }
            }
            .smallImg{
                width: 266px;
                height: 0.4rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            } 
        }  
        .btnBox{
            position: fixed;
            top: 50px;
            right: 0;
        }
    }
</style>