<script>
import Mixins from "../../Mixins/AddToBasket"
export default{
    mixins:[Mixins]
}

</script>

<template>
 <div class="plus__minus">
    <div class="block__start__reg">
        <div class="kikstart">
            <img src="../../../assets/-.svg" @click="Minus">
        </div>
        <div class="count">{{count}}</div>
        <div class="kikstart">
            <img src="../../../assets/+.svg" @click="Plus">
        </div>
    </div>
</div>
</template>

<style scoped>
.plus__minus{
    width: 5.6em;
    height: 1em;
    display: flex;
    justify-content: center;
    margin-bottom: 0.52em;
}
.block__start__reg{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3.6em;
}
.kikstart{
    width: 1em;
    height: 1em;
    background-color: #EDEEF2;
    display: flex;
    border-radius: 0.24em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.count{
    font-weight: 700;
    font-size: 0.752em;
    line-height: 0.68em;
}
img{
    width: 0.54em;
    height: 0.54em;
}
</style>