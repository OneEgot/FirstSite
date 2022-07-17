<script>
import ClassficationItemVue from './ClassficationItem.vue';
import InfoItemVue from './InfoItem.vue';
import PngItemVue from './PngItem.vue';
export default{
    components:{
        ClassficationItemVue,
        InfoItemVue,
        PngItemVue
    },
    props:{
        Item:{
            pngItem:Object,
            infoItem:Object,
            ClassArr: Array,   
            index: Number,

        },
        quantity: Number
    },
    methods:{
        addToBasket(value){
            this.$emit("addToBasket", value)
        },
    },

}
</script>

<template>
<div class="item__food">
    <PngItemVue :pngItem="Item.pngItem"/>
    <InfoItemVue :infoItem="Item.infoItem" :index="Item.index" @addToBasket="addToBasket" :quantity="quantity"/>
    <div class="whatIs">
        <ClassficationItemVue v-for="el in Item.ClassArr" :key="el.index" :ClassFication="el"/>
    </div>
</div>
</template>

<style scoped>
    .item__food{
        width: 14em;
        height: 11.04em;
        background-color: #fff;
        border: 0.04em solid #EDEEF2;
        border-radius: 0.64em;
        display: flex;
        flex-direction: column;
    }
    .item__food:hover{
        transition: 1.5s ease;
        border: 0.04em solid #4E60FF;
        color: #4E60FF;
        background-color: #F3F4FF;
    }
    .whatIs{
        width: 100%;
        height: 100%;
        display: flex;
    }
    @media screen and (max-width: 893px){
        .item__food{
            font-size: 20px;
        }
    }
    @media screen and (max-width: 656px){
        .item__food{
            font-size: 35.7px;
        }
    }
    @media screen and (max-width:563px) {
        .item__food{
            font-size: 25.76px;
        }
    }
    @media screen and (max-width:402px){
        .item__food{
            font-size: 22.5px;
        }
    }
    @media screen and (max-width: 326px){
        .item__food{
            font-size: 16.3929px;
        }
    }
</style>