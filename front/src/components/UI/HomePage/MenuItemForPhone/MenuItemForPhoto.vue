<script>
export default{
    methods:{
        showMenu(){
            this.$store.state.showMenu = !this.$store.state.showMenu
        }
    }
}
</script>

<template>
<div class="menupng" @click="showMenu">
    <img src="../../../../assets/navmenu.svg">
</div>
</template>


<style scoped>
.menupng{
    width: 1.92em;
    height: 1.92em;
    background: #EDEEF2;
    border-radius: 0.64em;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}
img{
    width: 0.8em;
    height: 0.8em;
}
@media screen and (max-width: 656px){
        .menupng{
            display: flex;
        }   
    }
</style>