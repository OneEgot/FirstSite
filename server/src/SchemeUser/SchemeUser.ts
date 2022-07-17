import mongoose, { Schema } from "mongoose"
import productBasket from "./ProductScheme";

const UserScheme = new Schema({
	username: {type:String, required:true, unique:true},
	password: {type:String, required:true, unique:true},
	productBasket: [{type:productBasket, required:false, default: []}]
})
const User = mongoose.model('User',UserScheme);
export default User;
