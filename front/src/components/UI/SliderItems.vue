<script>
import NigirySet from './UI/NigirySet.vue'
    export default{
        components:{
            NigirySet
        }
    }
</script>
<template>
<div class="slider">
    <div class="items__slider">
        <NigirySet/>
    </div>
</div>
</template>
<style>
.slider{
    display: flex;
    justify-content: center;
    align-items: center;
}
.items_slider{
    display: flex;
    justify-content: center;
}
</style>