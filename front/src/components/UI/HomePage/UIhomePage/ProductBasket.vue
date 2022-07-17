<script>
export default{
    methods:{
        openModal(){
            this.$router.push("/home")
            this.$store.state.showMenu = false
            this.$store.state.open = !this.$store.state.open;
        }
    }
}
</script>

<template>
<div class="basket"> 
    <div class="basket__items" @click="openModal">
        <img src="../../../../assets/Basket.svg" >
        <div class="mark" v-if="$store.state.countBasket > 0">
            <div class="number">{{$store.state.countBasket}}</div>
        </div>
    </div>
</div>
</template>

<style scoped>
.basket{
    width: 1.92em;
    height: 1.92em;
    margin-left: 0.96em;
    position: relative;
    cursor: pointer;
}
.basket__items{
    width: 100%;
    height: 100%;
    background-color: #F3F4FF;
    border-radius: 0.64em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mark{
    width: 0.8em;
    height: 0.8em;
    background: #4E60FF;
    border-radius: 0.32em; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1.32em;
    left: 1.32em;
}
img{
    width: 0.8em;
    height: 0.8em;
}
.number{
    color: white;
    font-size: 0.37em;
}
</style>