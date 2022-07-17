<script>
export default{
    props:{
        pngItem:{
            feture:Boolean,
            urlBigFoto:String
        }
    }
}
</script>

<template>
    <div class="url__foto">
        <div class="featued" v-if="pngItem.feture">
            <div class="text">
                FEATURED
            </div>
        </div>
        <img :src="require(`../../../../assets/${pngItem.urlBigFoto}.svg`)" class="big_foto">
    </div>
</template>

<style scoped>
    .url__foto{
        width: 14em;
        height: 6.4em;
        border-radius: 0.64em 0.64em 0em 0em;
        position: relative;
    }
    .big_foto{
        width: 14em;
        height: 6.4em;
        border-radius: 0.64em 0.64em 0em 0em;
    }
    .featued{
        width: 3.76em;
        height: 1.28em;
        background: #4E60FF;
        border-radius: 0em 0.64em; 
        position: absolute;  
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text{
        font-style: normal;
        font-weight: 550;
        font-size: 0.44em;
        line-height: 0.64em;
        letter-spacing: 0.024em;
        color: #FFFFFF;
    }
</style>