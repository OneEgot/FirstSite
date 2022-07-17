<script>
export default {
   props:{
       url:String
   }
}
</script>

<template>
<div class="user">
    
</div>
</template>

<style scoped>
.user{
    width: 1.92em;
    height: 1.92em;
    margin-left: 0.68em;
    border: 0.08em solid #EDEEF2;
    border-radius: 0.64em;
    background-image: url(../../../../assets/user.svg);
    background-size: 1.92em;
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
}
.user:hover{
    border: 0.08em solid #4E60FF;
    transition: 0.4s ease;
}
</style>