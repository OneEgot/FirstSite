import {Schema, model} from "mongoose";

const productBasket: Schema = new Schema({
    nameProduct: {
        type:String,
        required:true,
    },
    priceProduct: {
        type:Number, 
        required:true,
    },
    numberOf: {
        type:Number,
        required:true,
    }
})
export default productBasket;