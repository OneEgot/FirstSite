<script>
import CategoryItemVue from './CategoryItem.vue';
import {mapGetters} from 'vuex'
export default{
    components:{
        CategoryItemVue
    },
    computed: mapGetters(['getAllCategori']),
}
</script>

<template>
<div class="categorise__line">
    <div class="categori_item">
        <CategoryItemVue v-for="el in getAllCategori" :key="el.index" :item="el"/>
    </div>
</div>
</template>

<style scoped>
.categorise__line{
    width: 100%;
    height: 3.2em;
    display: flex;
    justify-content: center;
    margin-top: 1.28em;
}
.categori_item{
    width: 44em;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
@media screen and (max-width: 893px){
    .categori_item{
        width: 31em;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        grid-column-gap: 62px;
        grid-row-gap: 20px;
    }
    .categorise__line{
        height: 10em;
    }
}
@media screen and (max-width: 656px){
    .categori_item{
        width: 20em;
        grid-column-gap: 20px;
        height: 7em;
    }
    .categorise__line{
        height: 7em;
    }
}
@media screen and (max-width:563px){
    .categori_item{
        width: 15em;
        height: 7.6em;
        grid-column-gap: 28px;
    }
}
@media screen and (max-width:402px){
    .categori_item{
        width: 15em;
        grid-column-gap: 26px;
    }
}
@media screen and (max-width:326px){
    .categori_item{
        width: 10.93em;
        height: 4em;
        grid-column-gap: 25px;
        grid-row-gap: 14px;
    }
    .categorise__line{
        height: 4.5em;
    }
}
</style>