<template>
    <div class="banner">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item,index) in bannerList"
            :key="index"
            :style="{background:'url('+item.img+') center center / cover no-repeat content-box'}">
            <div class="bannerWord">
                <h1>{{ item.word1 }}</h1>
                <h1>{{ item.word1 }}</h1>
                <h3>{{ item.word2 }}</h3>
                <div class="bannerBtn">查看详情</div>
            </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    props:{
        bannerList:{
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="less">
    .banner{
        width: 100%;
        height: 100%;
        .el-carousel{
            height: 100%;
        }
        .el-carousel__container{
            height: 100%;
        }
        .el-carousel__item{
            .bannerWord{
                margin: 180px 0 0 80px;
                color: #fff;
                h1{
                    font-size: 32px;
                    font-weight: 600;
                }
                h3{
                    margin-top: 15px;
                    font-size: 20px;
                }
                .bannerBtn{
                    margin-top: 20px;
                    width: 110px;
                    height: 44px;
                    border: solid #fff 3px;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 44px;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
    }
</style>


