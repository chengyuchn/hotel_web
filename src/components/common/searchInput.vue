<template>
    <div class="searchInput">
        <el-autocomplete
        popper-class="my-autocomplete"
        v-model="searchValue"
        :fetch-suggestions="querySearch"
        :placeholder="placeholder"
        @select="handleSelect"
        @keyup.enter.native="handleIconClick">
            <i class="el-icon-search el-input__icon" 
            slot="prefix"
            @click="handleIconClick">
            </i>
            <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
            </template>
        </el-autocomplete>
    </div>    
</template>
<script>
export default {
    props:{
        restaurants: {
            type: Array,
            default: []
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            searchValue: '',
        }
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            this.$emit('select',item);
        },
        handleIconClick() {
            this.$emit('iconClick',this.searchValue);
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less">
    .searchInput{
        width: 100%;
        display: inline-block;
        .my-autocomplete {     
            li {
                line-height: normal;
                padding: 7px;
                .name {
                text-overflow: ellipsis;
                overflow: hidden;
                }
                .addr {
                font-size: 12px;
                color: #b4b4b4;
                }
                .highlighted .addr {
                color: #ddd;
                }
            }
        }
        .el-input{
            width: 520px;
        }
        .el-input__inner{
            height: 48px;
            font-size: 16px;
            font-weight: bold;
            padding-left: 40px;
        }
        .el-autocomplete{
            display: block;
        }
        .el-input__icon{
            font-size: 20px;
            font-weight: 800;
            color: #000;
        }
    }
    .el-autocomplete-suggestion{
        margin: 0 !important;
    }
</style>