<script>
import NigirySetVue from '../UI/NigirySet.vue'
import RaitingCommentVue from '../UI/OverallRaiting/RaitingCommentVue.vue'
import RollSetVue from '../UI/RollSet/RollSet.vue'
import mixins from '../Mixins/Slider'
export default{
    mixins: [mixins],
    components:{
        NigirySetVue,
        RollSetVue,
        RaitingCommentVue,
        
    }  
}
</script>

<template>
<div class="sliderline"  :style="{'transform':'translate'+'(' + (-width *indexSlide)+'px'+')'}" @ShowSlide="ShowSlide">
    <div class="slider-item" ref="sliderItem">
        <RaitingCommentVue/>
        <RollSetVue/>
        <div class="set">
           <NigirySetVue/>
        </div>
    </div>
    <div class="slider-item">
        <RaitingCommentVue/>
        <RollSetVue/>
        <div class="set">
           <NigirySetVue/>
        </div>
    </div>
    <div class="slider-item">
        <RaitingCommentVue/>
        <RollSetVue/>
        <div class="set">
           <NigirySetVue/>
        </div>
    </div>
    <div class="slider-item">
        <RaitingCommentVue/>
        <RollSetVue/>
        <div class="set">
           <NigirySetVue/>
        </div>
    </div>
    
</div>
</template>

<style scoped>
.sliderline{
    display: flex;
    width: 224em;
    transition: 0.7s;

}
.set{
    font-size: 0.83em;
    position: absolute;
    left: 4.275em;
    top: 22.42em;
}
.slider-item{
    width: 56em;
    position: relative;
    background-color:#697BFF;
    font-size: 1em;
}
</style>