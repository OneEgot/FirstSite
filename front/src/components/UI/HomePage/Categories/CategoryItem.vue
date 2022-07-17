<script>
export default{
    props:{
        item:{
            name:String,
            url:String,
            value: Boolean,
            index: Number,
            dinamicId: Number
        }
    },
    data(){
        return{
            arrSort:[],
            FoodLineItems_2: [
                {
                    pngItem:{
                        feture:true,
                        urlBigFoto:"BigFotoSushi"
                    },
                    infoItem:{
                        name:"Royal Sushi House",
                        time:"30-40",
                        price: 32,
                        dinamicId:54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index:0,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:true,
                        urlBigFoto:"BurgerAndPizza"
                    },
                    infoItem:{
                        name:"Burgers & Pizza",
                        time:"40-60",
                        price: 24,
                        dinamicId:81
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"burger",
                            nameOfClass:"Burger",
                        },
                        {
                            index:1,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index:1,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Ninja sushi",
                        time:"20-40",
                        price: 40,
                        dinamicId: 54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 2,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Sushi master",
                        time:"60-70",
                        price: 55,
                        dinamicId:54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index:3,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:true,
                        urlBigFoto:"BurgerAndPizza"
                    },
                    infoItem:{
                        name:"Burgers & Pizza",
                        time:"40-60",
                        price: 24,
                        dinamicId:81
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"burger",
                            nameOfClass:"Burger",
                        },
                        {
                            index:1,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index:4,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Ninja sushi",
                        time:"20-40",
                        price: 40,
                        dinamicId: 54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 5,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:true,
                        urlBigFoto:"BurgerAndPizza"
                    },
                    infoItem:{
                        name:"Burgers & Pizza",
                        time:"40-60",
                        price: 24,
                        dinamicId: 81
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"burger",
                            nameOfClass:"Burger",
                        },
                        {
                            index:1,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 6,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Ninja sushi",
                        time:"20-40",
                        price: 40,
                        dinamicId:54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 7,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Sushi master",
                        time:"60-70",
                        price: 55,
                        dinamicId:54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index:8,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:true,
                        urlBigFoto:"BurgerAndPizza"
                    },
                    infoItem:{
                        name:"Burgers & Pizza",
                        time:"40-60",
                        price: 24,
                        dinamicId:81
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"burger",
                            nameOfClass:"Burger",
                        },
                        {
                            index:1,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 9,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Ninja sushi",
                        time:"20-40",
                        price: 40,
                        dinamicId: 54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 10,
                    quantity:0
                },
                {
                    pngItem:{
                        feture:false,
                        urlBigFoto:"NinjaSushi"
                    },
                    infoItem:{
                        name:"Sushi master",
                        time:"60-70",
                        price: 55,
                        dinamicId: 54
                    },
                    ClassArr:[
                        {
                            index:0,
                            smallSvgUrl:"sushi",
                            nameOfClass:"Sushi",
                        }
                    ],
                    index: 11,
                    quantity:0
                },
            ],
            arr_2:[],
            sortArr:[],
        }
    },
    methods:{
        addToBasket(){
            this.$store.state.categoriLine.forEach(element => {
                if(element.name === this.item.name){
                    element.value = !element.value;
                }
            });
            this.sortBy(this.item)
        },
        sortBy(element){
            if(element.value){
                this.$store.state.id+=element.dinamicId;
                if(this.$store.state.arrSort.length !== 0){
                    this.$store.state.arrSort.forEach(el => {
                        this.$store.state.FoodLineItems.push(el)
                    });
                    this.$store.state.arrSort = []
                }
                this.$store.state.FoodLineItems.forEach((el) => {
                    if(el.infoItem.dinamicId === this.$store.state.id){
                        this.sortArr.push(el)
                    }
                    else{
                        this.$store.state.arrSort.push(el)
                    }
                })
                this.$store.state.FoodLineItems = this.sortArr;
                this.sortArr = []
            }
            else{
                this.$store.state.id-=element.dinamicId;
                if(this.$store.state.id === 0){
                    this.$store.state.arrSort.forEach(el => {
                        this.$store.state.FoodLineItems.push(el)
                    })
                    this.$store.state.FoodLineItems = this.filterByNumber(this.$store.state.FoodLineItems);
                    this.arr_2 = [];
                    this.$store.state.arrSort = [];
                    this.sortArr = []
                }
                else{
                    if(this.$store.state.arrSort.length !== 0){
                        this.$store.state.arrSort.forEach(el => {
                            this.$store.state.FoodLineItems.push(el)
                        })
                        this.$store.state.arrSort = []
                    }
                    this.$store.state.FoodLineItems = this.filterByNumber(this.$store.state.FoodLineItems);
                    this.$store.state.FoodLineItems.forEach((el) => {
                        if(el.infoItem.dinamicId === this.$store.state.id){
                            this.sortArr.push(el)
                        }
                        else{
                            this.$store.state.arrSort.push(el)
                        }
                    })
                    this.$store.state.FoodLineItems = this.sortArr;
                    this.sortArr = [];
                    this.arr_2 = []
                }
            }
        },
        filterByNumber(arr){
            for(let i = 0; i < arr.length;i++){
                arr.forEach(el => {
                    if(el.index === i){
                        this.arr_2.push(el)
                    }
                })
            }
            return this.arr_2
        }
    },
}
</script>

<template>
<div class="categories__item" @click="addToBasket" v-bind:class="{categories__item_asset:item.value}">
    <img :src="require(`../../../../assets/${item.url}.svg`)">
    <div class="name_categori">
       {{item.name}}
    </div>
</div>
</template>

<style scoped>
.categories__item{
    width: 6.4em;
    height: 3.2em;
    background-color: #FFFFFF;
    border: 0.04em solid #EDEEF2;
    border-radius: 0.64em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #545563;
    cursor: pointer;
    box-sizing: border-box;
}
img{
   width: 0.96em;
   height: 0.96em;
   margin-top: 0.56em;
}
.name_categori{
    font-style: normal;
    font-weight: 700;
    font-size: 0.52em;
    line-height: 0.72em;
    text-align: center;
    letter-spacing: 0.004em;
    margin-top: 1em;
}
.categories__item_asset{
    transition: 0.4s ease;
    border: 0.08em solid #4E60FF;
    color: #4E60FF;
    background-color: #F3F4FF;
}
@media screen and (max-width: 893px){
    .categories__item{
        font-size: 24px;
    }
}
@media screen and (max-width: 563px){
    .categories__item{
        font-size: 23px;
    }
    .categories__item{
        width: 4.34em;
        height: 3.47em;
    }
    img{
        margin-top: 0.8em;
    }
}
@media screen and (max-width:402px){
    .categories__item{
        font-size: 20px;
    }
}
@media screen and (max-width:326px){
    .categories__item{
        font-size: 13.5px;
    }
}
</style>