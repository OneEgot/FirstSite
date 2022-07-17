<script>
import EngineLogoVue from './EngineLogo.vue';
import SearchInputVue from './SearchInput.vue';
import RightMenuVue from './RightMenu.vue';
import ProductBasketVue from './ProductBasket.vue';
import UserItemVue from './UserItem.vue';
import MenuItemForPhotoVue from '../MenuItemForPhone/MenuItemForPhoto.vue';
export default{
    components:{
        EngineLogoVue,
        SearchInputVue,
        RightMenuVue,
        ProductBasketVue,
        UserItemVue,
        MenuItemForPhotoVue
    },
    data(){
        return{
            name: "user",
        }
    },
}
</script>

<template>
    <div class="header">
        <div class="header__menu">
            <div class="item">
                <EngineLogoVue @click="$router.push('/home')"/>
                <SearchInputVue/>
            </div>
            <div class="item">
                <RightMenuVue/>
                <ProductBasketVue/>
                <UserItemVue :name="name" @click="$router.push('/settings/account')"/>
                <hr class="line">
                <MenuItemForPhotoVue/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header{
        width:100%;
        height:3.2em;
        background-color:white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header__menu{
        width: 44em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .line{
        width: 1.28em;
        height: 0px;
        border: 0.012em solid #EDEEF2;
        transform: rotate(90deg);
        display: none;
    }
    .item{
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 893px){
        .header__menu{
            width: 31em;
        }
    }
    @media screen and (max-width: 656px){
        .header{
            font-size: 25px;
        }
        .header__menu{
            width: 20em;
        }
        .line{
            display: block;
        }   
    }
    @media screen and (max-width:563px) {
        .header__menu{
            width: 15em;
        }
        .header{
            font-size: 24px;
        }
    }
    @media screen and (max-width: 402px){
        .header__menu{
            width: 14.5em;
        }
        .header{
            font-size: 21.75px;
        }
    }
    @media screen and (max-width: 326px){
        .header__menu{
            width: 13.5em;
        }
        .header{
            font-size: 17px;
        }
    }
</style>