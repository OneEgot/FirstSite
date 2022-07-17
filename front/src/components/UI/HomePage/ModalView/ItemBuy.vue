<script>
export default{
    props:{
        item:{
            name: String,
            index: Number,
            time: String,
            urlFoto: String,
            price: Number
        },
        data(){
            return{
                arr:[],
                quinaty:0
            }
        }
    },
    methods:{
        clearBaket(){
            this.$store.state.BasketArray.forEach((element, index) => {
                if(this.item.index === element.index){
                    this.$store.state.BasketArray.splice(index, 1)
                }
            });
            this.$store.commit("deleteCount", this.item.index)
        },
        minus(){
            this.$store.commit("minus", this.item.index)
        },
        plus(){
            this.$store.commit("plus", this.item.index)
        }
    },
    computed:{
        qunataty(){
            this.$store.state.FoodLineItems.forEach(el => {
                if(el.index === this.item.index){
                    this.quinaty = el.quantity
                }
            })
            return this.quinaty
        },
        
    }
}
</script>

<template>
<div class="item_block">
    <div class="center">
        <img :src="require(`../../../../assets/${item.urlFoto}.svg`)" class="photo">
        <div class="infoBuy">
            <div class="name">
                {{item.name}}
            </div>
            <div class="text">
               <span style="color: black;">Price:</span>  ${{item.price}}
            </div>
            <div class="full_info_about">
                <img src="../../../../assets/clock.svg" class="clock">
                <div class="time">
                    {{item.time}} min
                </div>
            </div>
        </div>
        <div class="delete">
            <div class="plus__minus">
                <div class="block__start__reg">
                    <div class="kikstart" @click="minus">
                        <img src="../../../../assets/-.svg">
                    </div>
                    <div class="count">{{qunataty}}</div>
                    <div class="kikstart" @click="plus">
                        <img src="../../../../assets/+.svg">
                    </div>
                </div>
            </div>
            <div class="del_item">
                <img class="basket" src="../../../../assets/del_basket.svg" @click="clearBaket">
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.full_info_about{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.7em;
    width:3.5em;
}
.clock{
    width: 0.48em;
    height: 0.48em;
}
.time{
    font-style: normal;
    font-weight: 500;
    font-size: 0.48em;
    height: 1em;
    color: #83859C;
    margin-bottom: 0.3em;
}
.text{
    font-weight: 650;
    font-size: 0.55em;
    line-height: 0.96em;
    letter-spacing: 0.04em;
    color: #4E60FF;
}
.close_svg{
    width: 0.83em;
    height: 0.83em;
}
.orders{
    font-weight: 500;
    display: inline;
}
.items{
    display: flex;
    flex-direction: column;
    margin-top: 0.8em;
}
.item_block{
    width: 18em;
    height: 4em;
    background-color: #FFFFFF;
    border: 0.04em solid #EDEEF2;
    border-radius: 0.6em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.8em;
}
.center{
    width: 100%;
    height: 4em;
    margin: 0px 0.63em 0px 0.63em;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.photo{
    width: 6.527em;
    height: 3em;
    border-radius: 0.5em;
}
.name{
    font-style: normal;
    font-weight: 700;
    font-size: 0.65em;
    line-height: 0.96em;
    letter-spacing: 0.04em;
    color: #2B2B43;
}
.infoBuy{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 6.5em;
    height: 2.8em;
}
.delete{
    height: 2.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
.plus__minus{
    width: 2.5em;
    height: 0.7em;
    display: flex;
}
.block__start__reg{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2.5em;
    height: 0.7em;
}
.kikstart{
    width: 0.7em;
    height: 0.7em;
    background-color: #EDEEF2;
    display: flex;
    border-radius: 0.12em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.count{
    font-weight: 700;
    font-size: 0.552em;
    line-height: 0.68em;
}
img{
    width: 0.37em;
    height: 0.37em;
}
.del_item{
    width: 2.5em;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.basket{
    width: 1.388em;
    height: 1.388em;
}
</style>