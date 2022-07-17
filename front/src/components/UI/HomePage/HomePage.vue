<script>
import HeaderMenuVue from './UIhomePage/HeaderMenu.vue';
import SaleBlockVue from './SaleFood/SaleBlock.vue';
import CategoriseLineVue from './Categories/CategoriseLine.vue';
import SilentTextVue from './SilentText/SilentText.vue';
import FoodLineItemVue from './FoodsItems/FoodLineItem.vue';
import ModalPage  from "./ModalView/ModalPage.vue";
import MenuUIVue from './MenuItemForPhone/MenuUI.vue';
export default{
    components:{
        HeaderMenuVue,
        SaleBlockVue,
        CategoriseLineVue,
        SilentTextVue,
        FoodLineItemVue,
        ModalPage,
        MenuUIVue
    },
    data(){
        return{
            show:false
        }
    },
}
</script>

<template>
<div class="content" :class="{content_popup: $store.state.open}">
    <HeaderMenuVue/>
    <hr>
    <SaleBlockVue/>
    <CategoriseLineVue/>
    <SilentTextVue/>
    <FoodLineItemVue/>
    <ModalPage/>
    <MenuUIVue/>
</div>
</template>

<style scoped>
.content{
    width: 100%;
    height: 100vh;
    background-color: white;
    font-size: 36px;
    position: relative;
}
.content_popup{
    width: 100%;
    height: 100vh;
    background-color: white;
    position: relative;
    overflow: hidden;
}
hr{
    height: 0px;
    border: 0.024em solid #EDEEF2;
    margin: 0;
}
@media screen and (max-width: 2032px){
    .content{
        font-size: 34px;
    }
}
@media screen and (max-width: 1890px){
    .content{
        font-size: 33px;
    }
}
@media screen and (max-width: 1733px){
    .content{
        font-size: 31px;
    }
}
@media screen and (max-width: 1677px){
    .content{
        font-size: 29px;
    }
}
@media screen and (max-width: 1522px){
    .content{
        font-size: 27px;
    }
}
@media screen and (max-width: 1412px){
    .content{
        font-size: 25px;
    }
}
@media screen and (max-width: 1277px){
    .content{
        font-size: 23px;
    }
}
@media screen and (max-width: 1160px){
    .content{
        font-size: 22px;
    }
}
@media screen and (max-width: 1102px){
    .content{
        font-size: 21px;
    }
}
@media screen and (max-width: 993px){
    .content{
        font-size: 20px;
    }
}
@media screen and (max-width: 924px){
    .content{
        font-size: 19px;
    }
}
@media screen and (max-width: 656px){
    .content{
        font-size: 25px;
    }
}
@media screen and (max-width:563px){
    .content{
        font-size: 24px;
    }
}
@media screen and (max-width: 402px){
    .content{
        font-size: 21px;
    }
}
</style>