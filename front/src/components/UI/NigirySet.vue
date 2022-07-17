<script>
import AddToBasket from './DownComponent/AddToBasket';
import InfoSushi from './DownComponent/InfoSushi.vue';
import PhotoSushi from './DownComponent/PhotoSushi.vue';
export default{
    components:{
        AddToBasket,
        InfoSushi,
        PhotoSushi
    }
}
</script>

<template>
    <div class="nigiry__set">
        <div class="content">
                <PhotoSushi/>
                <InfoSushi/>
            <div>
                <AddToBasket/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nigiry__set{
    background-color: white;
    width: 30.72em;
    height: 6.58em;
    border: 0.036em solid #EDEEF2;
    border-radius: 0.44em;
    display: flex;
    font-size: 1em;
    align-items: center;
    position: absolute;
}
.content{
    display: flex;
    align-items: center;
    height: 5.6em;
    width: 100%;
    font-size: 1em;
    margin: 0em 0.6em 0em 0.6em;
}
</style>
