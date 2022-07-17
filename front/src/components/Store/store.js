import {createStore} from "vuex";
import axios from "axios";
const store = createStore({
    state(){
        return{
            countBasket: 0,
            categoriLine: [
                {
                    name:"Pizza",
                    url:"pizza",
                    index: 1,
                    value: false,
                    dinamicId: 11
                },
                {
                    name:"Burger",
                    url:"burger",
                    index: 2,
                    value: false,
                    dinamicId: 27
                },
                {
                    name:"BBQ",
                    url:"meat",
                    index: 3,
                    value: false,
                    dinamicId: 62
                },
                {
                    name:"Sushi",
                    url:"sushi",
                    index: 4,
                    value: false,
                    dinamicId: 54
                },
                {
                    name:"Vegan",
                    url:"vegan",
                    index: 5,
                    value: false,
                    dinamicId: 36
                },
                {
                    name:"Desserts",
                    url:"cake",
                    index: 6,
                    value: false,
                    dinamicId: 99
                }
            ],
            FoodLineItems: [
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
            open: false,
            BasketArray:[],
            id:0,
            arr:[],
            arrSort:[],
            scrollToLines:false,
            topElement:0,
            dealsFlag:false,
            topDeals:0,
            valueSearch: "",
            price: 0,
            showMenu:false,
            categoriChange:[
                {
                    id:0,
                    name:"Account",
                    appearence:"Personal information",
                    srcSvg:"user",
                    srcSvgWHT: "userwht",
                    value:true,
                    wayOfUrl:"/settings/account"
                },
                {
                    id:1,
                    name:"Address",
                    appearence:"Shippings addresses",
                    srcSvg:"address",
                    srcSvgWHT: "addresswht",
                    value:false,
                    wayOfUrl:"/settings/address"
                },
                {
                    id:2,
                    name:"Payment method",
                    appearence:"Connected credit cards",
                    srcSvg:"creditcard",
                    srcSvgWHT: "creditcardwht",
                    value:false,
                    wayOfUrl:"/settings/payment"
                },
                {
                    id:3,
                    name:"Security",
                    appearence:"Password, 2FA",
                    srcSvg:"security",
                    srcSvgWHT: "securitywht",
                    value:false,
                    wayOfUrl:"/settings/security"
                }
            ],
            routeTo:"",
            user: null,
            isAuth: null
        }
    },
    getters:{
        getAllCategori(state){
            return state.categoriLine
        },
        getAllFoodLineITems(state){
            return state.FoodLineItems.filter(el => {
                return el.infoItem.name.includes(state.valueSearch)
            })
        },
        getAllBasketArray(state){
            return state.BasketArray
        },
        getQuantatu(state, index){
            state.FoodLineItems.forEach(el => {
                if(el.index === index){
                    return el.quantity
                }
            })
        },
        getAllPrice(state){
            state.price = 0
            state.BasketArray.forEach(el => {
                state.FoodLineItems.forEach(elem => {
                    if(el.index === elem.index){
                        state.price += el.price * elem.quantity
                    }
                })
            })
            return state.price
        },
        getCategoriSettings(state){
            return state.categoriChange
        }
    },
    mutations:{
        takeItem(state, index){
            state.FoodLineItems.forEach(el => {
                if(el.index === index){
                    el.quantity+=1;
                }
            })
        },
        deleteCount(state, index){
            state.FoodLineItems.forEach(el => {
                if(el.index === index){
                    state.countBasket -= el.quantity;
                    el.quantity = 0
                }
            })
        },
        minus(state, index){
            state.FoodLineItems.forEach(element => {
                if(element.index === index){
                    element.quantity -=1;
                    state.countBasket -=1
                    if(element.quantity === 0){
                        state.BasketArray.forEach((el, index) => {
                            if(el.index === element.index){
                                state.BasketArray.splice(index, 1)
                            }
                        })
                    }
                } 
            });
        },
        plus(state, index){
            state.FoodLineItems.forEach(element => {
                if(element.index === index){
                    element.quantity +=1;
                    state.countBasket +=1
                } 
            });
        },
        showMenu(state){
            state.showMenu = !state.showMenu;
        },
        changeCategoriValue(state, item){
            state.categoriChange.forEach(el => {
                    if(el.id === item.id){
                        el.value = true;
                    }
                    else{
                        el.value = false
                    }
            })
        },
        goToRoute(state, item){
            state.categoriChange.forEach(el => {
                if(el.id === item.id){
                    state.routeTo = el.wayOfUrl
                }
            })
        },
        setAuth(state){
            state.isAuth = true;
        },
    },
    actions:{
        async ValidateToken(){
            try{
                const res = await axios.post('http://localhost:3000/checktoken', {
                    token: localStorage.getItem("token")
                })
                return res.data.isAuth;
            }catch(err){
                return false;
            }
        }
    }
})

export default store;