<script>
export default{

}
</script>

<template>
<div class="sorted__by">
    <div class="check__box">
        <div class="name">Sort by: <span>Newest first</span></div>
        <img src="../../../assets/down.svg">
    </div>
</div>
</template>

<style scoped>
.sorted__by{
    width: 5.92em;
    height: 1.24em;
    background: #FFFFFF;
    border: 0.04em solid #C7C8D2;
    border-radius: 0.32em;
    cursor: pointer;
}
.check__box{
    width: 5.36em;
    height: 0.72em;
    margin: 0.28em 0.4em 0.28em 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.name{
    font-style: normal;
    font-size: 0.44em;
    line-height: 0.72em;
    color: #83859C;
    margin-top: 0em;
}
span{
    color: black;
}

img{
    margin-left: 0.16em;
    width: 0.6em;
    height: 0.6em;
    margin-bottom: 0.05em;
}
</style>