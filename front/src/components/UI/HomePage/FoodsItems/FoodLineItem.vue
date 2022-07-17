<script>
import FoodItemVue from './FoodItem.vue';
import {mapGetters} from "vuex"
export default{
    components:{
        FoodItemVue
    },
    data(){
        return{
            item:{
                name: String,
                index: Number,
                time: String,
                urlFoto: String,
                price: Number,
            },
            arr:[],
            uniq:[],
            result:[]
        }
    },
    computed: mapGetters(['getAllFoodLineITems']),
    methods:{
        addToBasket(value){
            this.$store.state.FoodLineItems.forEach(element => {
                if(element.index === value){
                    this.item = {
                        name: element.infoItem.name,
                        index: element.index,
                        time: element.infoItem.time,
                        urlFoto: element.pngItem.urlBigFoto,
                        price: element.infoItem.price,
                    }
                    this.$store.state.BasketArray.push(this.item)
                    this.uniq = new Set(this.$store.state.BasketArray.map(e => JSON.stringify(e)));
                    this.result = Array.from(this.uniq).map(e => JSON.parse(e));
                    this.$store.state.BasketArray = this.result;
                }
            });
        },
    },
}
</script>

<template>
<div class="foodItem__line">
    <div class="center__content_2" v-if="getAllFoodLineITems.length === 0">
        Not Found
    </div>
    <div class="center__content" v-else>
        <FoodItemVue v-for="el in getAllFoodLineITems" :key="el.index" :Item="el" :index="el.index" @addToBasket="addToBasket" :quantity="el.quantity"/>
    </div>
</div>
</template>

<style scoped>
.foodItem__line{
    width: 100%;
    margin-top: 0.64em;
    display: flex;
    justify-content: center;
}
.center__content{
    width: 44em;
    display: grid;
    grid-template-columns: 1fr 1fr 14em;
    grid-gap: 0.8448em;
}
.center__content_2{
    width: 44em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.2em;
    margin-top: 6em;
}
@media screen and (max-width: 893px){
    .center__content{
        width: 31em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 29px;
    }
}
@media screen and (max-width:656px){
    .center__content{
        width: 20em;
        display: flex;
        flex-direction: column;
    }
}
@media screen and (max-width: 563px){
    .center__content{
        width: 15em;
    }
}
@media screen and (max-width:402px){
    .center__content{
        width: 14.5em;
        font-size: 21.75px;
    }
}
@media screen and (max-width:326px){
    .center__content{
        width: 13.5em;
        font-size: 17px;
    }
}
</style>