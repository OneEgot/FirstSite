<script>
import ItemBuyVue from './ItemBuy.vue';
import axios from 'axios';
export default{
    data(){
        return{
            surce: "",
            price:0
        }
    },
    components:{
        ItemBuyVue,
    },
    computed:{
        getAllPrice(){
            return this.$store.getters.getAllPrice
        },
        getAllBasketArray(){
            return this.$store.getters.getAllBasketArray
        }
    },
    methods:{
        async pay(){
            try{
                const token = localStorage.getItem("token");
                const array = this.pullArray(this.$store.state.BasketArray)
                const object = {
                    token: token,
                    productBasket: array
                }
                await axios.post("http://localhost:3000/addToBasket", object)
                window.location.reload()
            }catch(err){
               return
            }
        },
        pullArray(arr){
            const newArr = []
            arr.forEach(element => {
                const obj = {
                    nameProduct:element.name,
                    priceProduct: element.price,
                    numberOf:1
                }
                newArr.push(obj)
            });
            return newArr;
        },
    }
}
</script>

<template>
<transition>
    <div class="popup" v-show="$store.state.open" @click.self="$store.state.open = !$store.state.open">
            <div class="content__popup">
                <div class="content">
                    <div class="head__popup">
                        <div class="orders">My orders</div>
                        <div class="close" @click="$store.state.open = !$store.state.open">
                            <img src="../../../../assets/cross-svgrepo-com.svg" class="close_svg">
                        </div>
                    </div>
                    <div class="error" v-if="$store.state.BasketArray.length === 0">
                        <div class="isClear">Basket is clear!</div>
                    </div>
                    <div class="items" v-else>
                        <transition-group name="list">
                            <ItemBuyVue v-for="el in getAllBasketArray" :key="el.index" :item="el"/>
                        </transition-group>
                    </div>
                    <div class="order" v-if="$store.state.BasketArray.length > 0">
                    <div class="total">
                        <div>
                            Total price: <span style=" color: #4E60FF;">${{getAllPrice}}</span>
                        </div>
                    </div>
                    <div class="payin">
                        <img src="../../../../assets/payincard.svg" class="plus_card">
                        <div class="pay" @click="pay">
                            Pay in Card
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.popup{
    width: 100%;
    height: 100%;
    background-color: rgba(102, 102, 102, 0.5);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
}
.content__popup{
    width: 21em;
    height: 25em;
    background-color: white;
    border-radius: 1.04em;
}
.error{
    display: flex;
    justify-content: center;
    margin-top: 50%;
    width: 100%;
    font-weight: 600;
    color: #4E60FF;
}
.content{
    margin: 1em 1em 1em 1em;
}
.head__popup{
    display: flex;
    justify-content: space-between;
}
.close{
    width: 0.83em;
    height: 0.83em;
    cursor: pointer;
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
    align-items: center;
    height: 19em;
    width: 100%;
    overflow-x: scroll;
    overflow-x:hidden;
}
.order{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.total{
    font-weight: 500;
    height: 1.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
}
.payin{
    width: 7em;
    height: 1.7em;
    background: #F3F4FF;
    border-radius: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 1em;
}
.plus_card{
    width: 0.83em;
    height: 0.83em;
    margin-left: 0.55em;
}
.pay{
    font-weight: 500;
    font-size: 0.8em;
    margin-right: 0.55em;
}
::-webkit-scrollbar{
    width: 0.4166em;
}
::-webkit-scrollbar-track{
    background-color: #F3F4FF;
    border-radius: 0.222em;
}
::-webkit-scrollbar-thumb{
    background-color: #4E60FF;
    border-radius: 0.222em;
    border: 0.093em solid #F3F4FF;
}
@media screen and (max-width:556px) {
    .popup{
        font-size: 21px;
    }
}
@media screen and (max-width:451px) {
    .popup{
        font-size: 19px;
    }
}
@media screen and (max-width:401px) {
    .popup{
        font-size: 16px;
    }
}
@media screen and (max-width:348px) {
    .popup{
        font-size: 15px;
    }
}
@media screen and (max-width: 313px) {
    .popup{
        font-size: 14px;
    }
}
@media screen and (max-width: 290px) {
    .popup{
        font-size: 13px;
    }
}
</style>