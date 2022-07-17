<script>
export default{
    props:{
        ClassFication:{
            index: Number,
            smallSvgUrl:String,
            nameOfClass:String,
        }
    }
}
</script>

<template>
    <div class="classification">
        <img :src="require(`../../../../assets/${ClassFication.smallSvgUrl}.svg`)" class="small_img">
        <div class="name__picture">
            {{ClassFication.nameOfClass}}
        </div>
    </div>
</template>

<style scoped>
    .classification{
        width: 2.8em;
        height: 0.96em;
        background-color: #EDEEF2;
        border-radius: 4em;
        margin-top: 0.56em;
        margin-left: 0.56em;
        display: flex;
        align-items: center;
    }
    .small_img{
        width: 0.48em;
        height: 0.48em;
        margin-left: 0.4em;
    }
    .name__picture{
        font-style: normal;
        font-weight: 500;
        font-size: 0.48em;
        line-height: 0.64em;
        color: #545563;
        margin-left: 0.48em;
    }
</style>