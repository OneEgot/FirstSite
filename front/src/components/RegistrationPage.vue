<script>
import RegistrationComponentVue from './UI/RegistrationComponent.vue'
import MediaSlide from "./UI/MediaSlide"
export default{
    components:{
        RegistrationComponentVue,
        MediaSlide
    }
}
</script>

<template>
<div class="container">
    <RegistrationComponentVue/>
    <MediaSlide/>
</div>
</template>
<style>
.container{
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
}
</style>
