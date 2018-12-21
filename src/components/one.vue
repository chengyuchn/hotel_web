<template>
    <div class="one">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
            First section ...
            </div>
            <div class="section">
            Second section ...
            </div>
            <div class="section">
            Second section ...
            </div>
        </full-page>
    </div>
</template>
<script>
export default {
    data(){
        return {
            options: {
                menu: '#menu',
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
            },
        }
    },
    mounted(){
        this.$ajax('/sd/',{
            type: 'get'
        }).then(res=>{
            console.log(ENV);
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style lang="less" scoped>
    .one{
        
    }
</style>