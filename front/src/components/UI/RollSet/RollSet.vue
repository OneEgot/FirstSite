<script>
import PhotoRollVue from './PhotoRoll.vue';
import AboutRollSetVue from './AboutRollSet.vue';
import AddToRollSet from './AddToRollSet.vue';
export default{
    components:{
    PhotoRollVue,
    AboutRollSetVue,
    AddToRollSet
}
}
</script>

<template>
<div class="roll__set">
    <PhotoRollVue/>
    <AboutRollSetVue/>
    <AddToRollSet/>
</div>
</template>

<style scoped>
.roll__set{
    width: 11.76em;
    height: 11.12em;
    background-color: white;
    border: 0.036em solid #EDEEF2;
    border-radius: 0.44em;
    font-size: 1em;
    filter: drop-shadow(-1.6em 2.8em 3.2em rgba(49, 57, 120, 0.3));
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 22em;
    top: 4.3em;
}
.photo__s__2{
    border-radius: 0.46em;
    border: 0.036em solid #EDEEF2;
    width: 10.68em;
    height: 6.04em;
    margin-top: 0.42em;
}
.about{
    width: 10.68em;
}
.name{
    font-weight: 600;
    font-size: 0.7em;
    line-height: 0.7em;
    letter-spacing: 0.00336em;
}
.text{
    font-weight: 400;
    font-size: 0.44em;
    line-height: 1.1em;
    letter-spacing: 0.0068em;
    color: #83859C;
    margin-top: 0.734em;
}
.addToRollSet{
    width: 10.68em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4em;
}
.price{
    font-weight: 800;
    font-size: 0.86em;
    line-height: 0.9em;
    letter-spacing: 0.0024em;
    color: #2B2B43;
}
.pht__d__1{
    width: 0.97em;
    height: 0.97em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F3F4FF;
    border-radius: 0.288em;
}

</style>