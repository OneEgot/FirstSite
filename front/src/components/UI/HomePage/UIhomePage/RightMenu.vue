<script>
import MenuItemVue from './MenuItem.vue'
export default{
    components:{
        MenuItemVue
    },
    methods:{
        scrollTo(){
            this.$router.push("/home")
            this.$store.state.scrollToLines = !this.$store.state.scrollToLines;
            if(this.$store.state.scrollToLines){
                window.scrollTo({
                    top: this.$store.state.topElement,
                    behavior: 'smooth'
                });
                this.$store.state.scrollToLines = !this.$store.state.scrollToLines;
            }
        },
        Deals(){
            this.$router.push("/home")
            this.$store.state.dealsFlag = !this.$store.state.dealsFlag;
            if(this.$store.state.topDeals){
                window.scrollTo({
                    top: this.$store.state.topDeals,
                    behavior: 'smooth'
                });
            }
            this.$store.state.dealsFlag = !this.$store.state.dealsFlag;
        },
        MyOrder(){
            this.$router.push("/home");
            this.$store.state.open = !this.$store.state.open
        }
    }
}
</script>

<template>
<div class="menu">
    <div class="left_block">
        <MenuItemVue @click="scrollTo">Restaurants</MenuItemVue>
        <MenuItemVue class="deal" @click="Deals">Deals</MenuItemVue>
    </div>
    <hr class="line">
    <div class="right_block">
        <MenuItemVue @click="MyOrder">My orders</MenuItemVue>
    </div>
</div>
</template>

<style scoped>
    .menu{
        width: 9.4em;
        height: 1.28em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .line{
        width: 1.28em;
        height: 0px;
        border: 0.012em solid #EDEEF2;
        transform: rotate(90deg);
    }
    .left_block{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .deal{
        margin-left: 0.8em;
    }
    .right_block{
        width: 3em;
    }
    @media screen and (max-width: 656px){
        .menu{
            display: none;
        }   
    }
</style>