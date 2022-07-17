<script>
import SliderBtfl from '../BG-slider/SliderBtfl.vue';
import LeaveRewievVue from './LeaveRewiev.vue';
import CirkleSlideVue from '../BG-slider/CirkleSlide.vue';
import mixins from "../Mixins/ChangeSlide"
export default {
    components:{
        LeaveRewievVue,
        SliderBtfl,
        CirkleSlideVue
    },
    mixins:[mixins]
}
</script>

<template>
    <div class="media">
        <div class="container_slider">
            <div class="wrapper">
                <SliderBtfl @indexSlide="getIndexSlide" :Changeindex="ChangeIndex"/>
            </div>
            <div class="leave-rewiev">
                <LeaveRewievVue/>
            </div>
            <div class="circle__block">
                <CirkleSlideVue v-for="el in cirkleIndex" :key="el.id" :elementId="el.id" :index="index" @click="ShowSlide(el.id)"/>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.media{
    height: 100vh;
    width: 57%;
    font-size: 37px;
    background-color: #697BFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_slider{
    font-size: 1em;
    width: 37.83em;
    height: 100vh;
    margin-bottom: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.wrapper{
    font-size: 0.97em;
    overflow: hidden;
    height: 25.67em;
    width: 34.83em;
    margin-top: 2.5em;
    background-color: #697BFF;
}
.leave-rewiev{
    font-size: 1.2em;
    height: 3.25em;
    margin-bottom: 2em;
}
.circle__block{
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    width: 2.162em;
}
@media screen and (max-width: 2213px){
	.media{
		font-size: 35px;
	}
}
@media screen and (max-width:2108px){
	.media{
		font-size: 33px;
	}
}
@media screen and (max-width: 2002px){
	.media{
		font-size: 31px;
	}
}
@media screen and (max-width:1856px){
	.media{
		font-size: 29px;
	}
}
@media screen and (max-width:1725px){
	.media{
		font-size:27px;
	}
}
@media screen and (max-width:1617px){
	.media{
		font-size: 25px;
	}
}
@media screen and (max-width: 1512px){
	.media{
		font-size:23px;
	}
}
@media screen and (max-width:1406px){
	.media{
		font-size: 21px;
	}
}
@media screen and (max-width: 1268px){
	.media{
		font-size:19px;
	}
}
@media screen and (max-width: 1147px){
	.media{
		font-size: 17px;
	}
}
@media screen and (max-width:1023px){
	.media{
		font-size: 15px;
	}
}
@media screen and (max-width: 912px){
	.media{
		display:none;
	}
}

</style>
