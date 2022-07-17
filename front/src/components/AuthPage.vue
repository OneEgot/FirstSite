<script>
import AuthComponentVue from "./UI/AuthComponent.vue"
import MediaSlide from "./UI/MediaSlide";
import RegistrationComponentVue from "./UI/RegistrationComponent.vue";
export default {
    components:{
        AuthComponentVue,
        MediaSlide,
        RegistrationComponentVue
    },
    methods:{
        changeRouter(value){
            if(value){
                this.show = value
                this.$router.push('/register')
            }
        },
    },
    data(){
        return{
            show: true
        }
    }
}
</script>
<template>
    <div class="container">
        <AuthComponentVue @changeRouter="changeRouter" v-if="show"/>
        <RegistrationComponentVue :changeValue="show" v-if="!show"/>
        <MediaSlide/>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
}
</style>