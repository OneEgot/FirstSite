<script>
export default{
    mounted(){
        const top = this.$refs.elements.getBoundingClientRect().y;
        this.$store.state.topElement = top;
    }
}
</script>

<template>
    <div class="item_text" ref="elements">
        <div class="text__upercase">
            Nearby restaurants
        </div>
    </div>
</template>

<style scoped>
.item_text{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1.6em;
}
.text__upercase{
    width: 55em;
    text-align: start;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8em;
    line-height: 1.12em;
    letter-spacing: 0.004em;
    color: #2B2B43;
}
@media screen and (max-width: 893px){
    .text__upercase{
        width: 38.71em;
    }
}
@media screen and (max-width: 656px){
    .text__upercase{
        width: 20em;
        font-size: 25px;
    }
}
@media screen and (max-width:563px){
    .text__upercase{
        width: 15em;
        font-size: 24px;
    }
}
@media screen and (max-width:402px){
    .text__upercase{
        width: 14.5em;
        font-size: 21.75px;
    }
}
@media screen and (max-width:326px){
    .text__upercase{
        font-size: 17px;
        width: 13.5em;
    }
}
</style>
