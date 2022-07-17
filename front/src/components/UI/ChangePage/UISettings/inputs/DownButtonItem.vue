<script>
export default{
    props:{
        name:String
    }
}
</script>

<template>
<div class="MyButton">{{name}}</div>
</template>

<style scoped>
.MyButton{
    font-weight: 700;
    font-size: 0.56em;
    height: 1.76em;
    line-height: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.012em;
    color: #FF5C60;
    border: 0.04em solid #FF5C60;
    border-radius: 0.6em;
    padding: 0.48em 0.64em;
    cursor: pointer;
}
</style>