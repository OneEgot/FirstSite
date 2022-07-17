<script>
export default{
    data(){
        return{
            show:false
        }
    },
    props:{
        item:{
            text:String
        }
    }
}
</script>

<template>
<div class="item__box">
    <input type="checkbox" class="check_box" @click="show = !show" :class="{chech_box_2:show}">
    <div class="text">{{item.text}}</div>
</div>
</template>

<style scoped>
.item__box{
    width: 13.64em;
    height: 0.8em;
    display: flex;
    align-items: center;
}
.text{
    font-style: normal;
    font-weight: 400;
    font-size: 0.56em;
    line-height: 0.8em;
    letter-spacing: 0.004em;
    color: #2B2B43;
    margin-left: 0.6em;
    width: 100%;
}
.check_box{
    all: unset;
    width: 0.8em;
    height: 0.8em;
    box-sizing: border-box;
    border-radius: 0.16em;
    outline: 0.04em solid #4E60FF;
    border: none;
    margin: 0.04em;
    cursor: pointer;
}
.chech_box_2{
    all: unset;
    width: 0.8em;
    height: 0.8em;
    box-sizing: border-box;
    border-radius: 0.16em;
    outline: 0.04em solid #4E60FF;
    border: none;
    margin: 0.04em;
    cursor: pointer;
    background: #4E60FF;
    background-image: url(../../imgSettingsPage/check.svg);
    background-size: 0.78em;
    background-position: center;
    
}
</style>