import { Router } from "express";
import { Request, Response } from "express";
import {check, validationResult} from 'express-validator'
import User from '../SchemeUser/SchemeUser';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import config from "config";
import mongoose, { Schema } from "mongoose";
const router = new Router();

router.post(
	'/register', 
	[
		check('username', 'Некорректный email').normalizeEmail().isEmail(),
		check('password', 'Пароль должен быть больше 6').isLength({min:6})
	],
	async (req:Request, res: Response) => {
		try{
			const error = validationResult(req);
			if(!error.isEmpty()){
				return res.status(400).json({
					error:error.array(),
					message:"Некорректные данные"
				})
			}
			const {username, password, productBasket} = req.body;
			const candidate = await User.findOne({username});
			if(candidate){
				return res.status(400).json({
					message:"Такой пользователь уже есть"
				});
			};
			const hashPassword = await bcrypt.hash(password, 12);
			const user = new User({username, password: hashPassword, productBasket:productBasket});
			await user.save();
			const token = jwt.sign(
				{userId: user.id},
				config.get("PRIVATE_KEY"),
				{expiresIn: '1h'}
			)
			return res.status(200).json({
				message:"Пользователь зарегистрирован",
				isAuth:true,
				token: token,
				user: user
			})
		}catch(err){
			console.log(err);
			res.status(400).json({
				message:"Что-то пошло не так"
			})
		}
	}
);

router.post(
	'/auth', 
	[
		check('username', "Некорректный email").normalizeEmail().isEmail(), 
		check('password', 'Введите пароль').exists()
	], 
	async (req:Request, res:Response) => {
		try{
			const error = validationResult(req);
			if(!error.isEmpty()){
				return res.status(400).json({
					errors:error.array(),
					message: "Некорректные данные"
				})
			}
			const {username, password} = req.body;
			const user = await User.findOne({username});
			if(!user){
				return res.status(400).json({message: "Такого пользователя нет"})
			}
			const isMatch = await bcrypt.compare(password, user.password);
			if(!isMatch){
				return res.status(400).json({message:"Некорректный пароль"})
			}
			const token = jwt.sign(
				{userId: user.id},
				config.get("PRIVATE_KEY"),
				{expiresIn: '1h'}
			)
			res.status(200).json({
				isAuth:true,
				token:token
			})
		}catch(err){
			console.log(err);
			res.status(500).json({message:"Error"})
		}
	})
router.post("/checktoken", async (req:Request, res: Response) => {
	try{
		const {token} = req.body;
		const SECRET_KEY = config.get("PRIVATE_KEY");
		const candidate  = jwt.verify(token, SECRET_KEY)
		if(!candidate) throw new Error;
		res.status(200).json({isAuth:true})
	}
	catch(err){
		return res.status(400).json({isAuth:false})
	}
})
router.post("/addToBasket", async (req:Request, res:Response) => {
	try{
		const {token, productBasket} = req.body;
		const SECRET_KEY = config.get("PRIVATE_KEY");
		const candidate  = jwt.verify(token, SECRET_KEY)
		if(!candidate) throw new Error;
		const user: User = await User.findById(candidate.userId);
		for(let i=0;i< productBasket.length;i++){
			user.productBasket.push(productBasket[i])
		}
		await user.save()
		return res.status(200).json({message: user.productBasket});	
	}catch(err){
		console.log(err);
		return res.status(400).json({message: "Error"})
	}
})
export default router;
