<script>
export default{
    props:{
        SaleItem:{
            wayOfSvg: String,
            percent: String,
            nameSale: String,
            class: String
        }
    },
}
</script>

<template>
<div class="item__food">
    <div class="phot_eat">
        <img :src="require(`../../../../assets/${SaleItem.wayOfSvg}.svg`)" >
    </div>
    <div class="text__item">
        <div class="name">
            {{SaleItem.nameSale}}
        </div>
        <div class="percent__sale">
            {{SaleItem.percent}}% OFF
        </div> 
        <div class="deserts">
            {{SaleItem.class}}
        </div>
    </div>
</div>
</template>

<style scoped>
.item__food{
    border-radius: 1.04em;
    width: 20.8em;
    height: 7.52em;
    display: flex;
    box-sizing: border-box;
}
.phot_eat{
    width: 11.6em;
    height: 7.52em;
}
img{
    width: 11.6em;
    height: 7.52em;
}
.text__item{
    width: 8.4em;
    height: 7.52em;
}
.name{
    font-style: normal;
    font-weight: 500;
    font-size: 0.8em;
    line-height: 1.12em;
    letter-spacing: 0.004em;
    color: #2B2B43;
    margin-top: 0.96em;
}
.percent__sale{
    width: auto;
    height: 2em;
    font-style: normal;
    font-weight: 800;
    font-size:1.6em;
    line-height: 2.24em;
    letter-spacing: 0.004em;
    color: #4E60FF;
}
.deserts{
    width: 8.4em;
    height: 0.8em;
    font-style: normal;
    font-weight: 400;
    font-size: 0.56em;
    line-height: 0.8em;
    letter-spacing: 0.004em;
    color: #83859C;
    margin-top: 2.4em;
}
@media screen and (max-width: 893px) {
        .item__food{
            width: 31em;
            justify-content: space-around;
        }
}
@media screen and (max-width: 656px){
    .item__food{
        width: 20em;
    }
}
@media screen and (max-width:563px){
    .item__food{
        width: 15em;
        height: 13em;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
    }
    .text__item{
        position: relative;
        width: 100%;
        height: 100px;
    }
    .deserts{
        position: absolute;
        right: 22px;
        top: 22px;
        margin-top: 0;
        width: 50px;
        font-size: 15px;
    }
    .name{
        position: absolute;
        top: 16px;
        left: 16px;
        margin: 0;
    }
    .percent__sale{
        position: absolute;
        left: 16px;
        top: 42px;
    }
}
</style>