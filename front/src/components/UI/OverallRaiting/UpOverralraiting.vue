<script>
export default{


}
</script>

<template>
<div class="left_side_text">
    <div class="overall">
        <div class="overall__raiting">Overall rating</div>
        <div class="rait__star">
            <div class="ball">4.2</div>
            <div class="star__change">
                <img src="../../../assets/Vector.svg">
                <img src="../../../assets/Vector.svg">
                <img src="../../../assets/Vector.svg">
                <img src="../../../assets/Vector.svg">
                <img src="../../../assets/Vector_2.svg">
                <div class="votes">3 votes</div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.left_side_text{
    width: 6em;
}
.overall__raiting{
    font-style: normal;
    font-weight: 700;
    font-size: 0.54em;
    letter-spacing: 0.0894286px;
    color: #2B2B43;
}
.ball{
    font-weight: 530;
    font-style: normal;
    font-size: 0.76em;
    height: 1em;
    letter-spacing: 0.0894286px;
    color: #4E60FF;
    display: inline-block;
}
.rait__star{
    width: 6em;
    height: 1em;
    display: flex;
    margin-top: 0.2em;
}
.star__change{
    width: 5.16em;
    height: 1em;
    display: flex;
    align-items: center;
    margin-left: 0.4em;
    margin-bottom: 0.24em;
}
.votes{
    font-style: normal;
    font-weight: 700;
    font-size: 0.36em;
    color: #83859C;
    margin-top: 0.092rem;
    margin-left: 0.28rem;
}
img{
    width: 0.4em;
    height: 0.4em;
    margin-left: 0.108em;
}
</style>