<script>
    export default{
        data(){
            return{
                show: false
            }
        }
    }
</script>
<template>
<div class="set_password">
    <div class="no__see__pass">
        <input type="password" v-if="!show"/>
        <input type="text" v-else/>
        <img src="../../assets/CheckPass.svg" @click="show = !show"/>
    </div>
</div>
</template>
<style>
.set_password{
    display: flex;
    flex-direction: column;
    border: 1px solid #C7C8D2;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 10px;
    padding: 0.68rem 0.68rem 0.68rem 0.68rem;
    width: 100%;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 0.8rem;
    color: black;

}
</style>