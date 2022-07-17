<script>
export default{
    methods:{
        addToBasket(){
            this.$store.state.countBasket+=1;
            this.$store.commit("takeItem", this.index)
            this.$emit("addToBasket", this.index)
        }
    },
    props:{
        infoItem:{
            name:String,
            time:String,
            price:Number,
        },
        index: Number,
        quantity: Number
    },
}
</script>

<template>
    <div class="info__food">
       <div class="up__box">
           <div class="info__box">
               <div class="name">
                   {{infoItem.name}}
               </div>
               <div class="full_info_about">
                   <img src="../../../../assets/clock.svg" class="clock">
                   <div class="time">
                       {{infoItem.time}} min
                   </div>
                   <div class="cirkle">
                       
                   </div>
                   <div class="min-sum">
                       ${{infoItem.price}} min sum
                   </div>
               </div>
           </div>
           <div class="img_block">
               <img src="../../../../assets/shopBag.svg" class="bag" v-if="quantity == 0" @click="addToBasket">
               <div class="ginza" v-else>
                    <img src="../../../../assets/BagBlue.svg" class="bag" @click="addToBasket">
                    <div class="shop_item">
                        <div class="kolization">
                            {{quantity}}
                        </div>
                    </div>
               </div>
           </div> 
       </div>
    </div>
</template>

<style scoped>
    .info__food{
        margin-left: 0.64em;
        height: 100%;
    }
    .up__box{
        display: flex;
        justify-content: space-between;
    }
    .name{
        font-style: normal;
        font-weight: 700;
        font-size: 0.72em;
        line-height: 0.96em;
        letter-spacing: 0.04em;
        color: #2B2B43;
        margin: 0;
    }
    .full_info_about{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.32em;
        height: 1em;
        width: 6.834em;
    }
    .info__box{
        margin-top: 0.64em;
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
    .cirkle{
        width: 0.12em;
        height: 0.12em;
        background-color: #4E60FF;
        border-radius: 50%;
        padding: 0;
    }
    .min-sum{
        font-style: normal;
        font-weight: 500;
        font-size: 0.48em;
        height: 1em;
        color: #83859C;
        margin-bottom: 0.3em;
    }
    .ginza{
        transition: 0.3s ease;
    }
    .img_block{
        display: flex;
        justify-content: flex-end;
        position: relative;
        height: 100%;
    }
    .bag{
        width: 0.8em;
        height: 0.8em;
        margin-right: 0.64em;
        margin-top: 0.64em;
        cursor: pointer;
    }
    .shop_item{
        width: 0.6em;
        height: 0.6em;
        background-color: #4E60FF;
        border: 0.06em solid #FFFFFF;
        border-radius: 0.26em;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0.4em;
        top: 0.3em;
    }
    .kolization{
        font-style: normal;
        font-weight: 700;
        font-size: 0.35em;
        line-height: 0.5em;
        color: #FFFFFF;
        margin-top: 0.06em;
    }
</style>