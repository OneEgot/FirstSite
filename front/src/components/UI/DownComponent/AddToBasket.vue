<script>
    import PlusMinus from "../../UI/DownComponent/PlusMinus.vue"
    import AddtoCardVue from "./AddtoCard.vue";
    export default{
        components:{
            AddtoCardVue,
            PlusMinus
        }
    }
</script>

<template>
    <div class="block__input">
        <PlusMinus/>
        <AddtoCardVue/>
    </div>
</template>

<style scoped>
.block__input{
    width: 100%;
    height: 5.32em;
    margin-left: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>