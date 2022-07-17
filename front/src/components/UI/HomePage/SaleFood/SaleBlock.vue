<script>
import SaleItemFoodVue from './SaleItemFood.vue'
export default{
    components:{
        SaleItemFoodVue
    },
    data(){
        return{
            SaleItemDesert:{
                wayOfSvg: "sweet",
                percent: "20",
                nameSale: "All deserts",
                class: "Deserty"
            },
            SaleItemBurger:{
                wayOfSvg: "burger_1",
                percent: "50",
                nameSale: "Big Burgers",
                class: "Foodies"
            }
        }
    },
    mounted(){
        const top = this.$refs.el.getBoundingClientRect().y;
        this.$store.state.topDeals = top
    }
}
</script>

<template>
<div class="sale__food" ref="el">
    <div class="sale__container">
        <SaleItemFoodVue :SaleItem="SaleItemDesert" style="background-color: #F3F4FF;"/>
        <SaleItemFoodVue :SaleItem="SaleItemBurger" style="background-color: #FFF3ED;"/>
    </div>
</div>
</template>

<style>
    .sale__food{
        width: 100%;
        height: 7.52em;
        margin-top: 0.96em;
        display: flex;
        justify-content: center;
    }
    .sale__container{
        width: 44em;
        height: 7.52em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 893px) {
        .sale__container{
            width: 31em;
            flex-direction: column;
            height: 16em;
            justify-content: space-between;
        }
        .sale__food{
            height: 16em;
        }
    }
    @media screen and (max-width: 656px){
        .sale__container{
            width: 20em;
        }
    }
    @media screen and (max-width:563px) {
        .sale__container{
            width: 15em;
            height: 27em;
        }
        .sale__food{
            height: 27em;
        }
    }
    @media screen and (max-width: 402px){
        .sale__container{
            width: 14.5em;
            font-size: 21px;
        }
    }
    @media screen and (max-width: 326px){
        .sale__container{
            font-size: 15.3px;
            width: 13.5em;
            height: 27em;
        }
        .sale__food{
            height: 19.5em;
        }
    }
</style>