"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const SchemeUser_1 = __importDefault(require("../SchemeUser/SchemeUser"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const router = new express_1.Router();
router.post('/register', [
    (0, express_validator_1.check)('username', 'Некорректный email').normalizeEmail().isEmail(),
    (0, express_validator_1.check)('password', 'Пароль должен быть больше 6').isLength({ min: 6 })
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
                message: "Некорректные данные"
            });
        }
        const { username, password, productBasket } = req.body;
        const candidate = yield SchemeUser_1.default.findOne({ username });
        if (candidate) {
            return res.status(400).json({
                message: "Такой пользователь уже есть"
            });
        }
        ;
        const hashPassword = yield bcrypt_1.default.hash(password, 12);
        const user = new SchemeUser_1.default({ username, password: hashPassword, productBasket: productBasket });
        yield user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.default.get("PRIVATE_KEY"), { expiresIn: '1h' });
        return res.status(200).json({
            message: "Пользователь зарегистрирован",
            isAuth: true,
            token: token,
            user: user
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Что-то пошло не так"
        });
    }
}));
router.post('/auth', [
    (0, express_validator_1.check)('username', "Некорректный email").normalizeEmail().isEmail(),
    (0, express_validator_1.check)('password', 'Введите пароль').exists()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                errors: error.array(),
                message: "Некорректные данные"
            });
        }
        const { username, password } = req.body;
        const user = yield SchemeUser_1.default.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Такого пользователя нет" });
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Некорректный пароль" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.default.get("PRIVATE_KEY"), { expiresIn: '1h' });
        res.status(200).json({
            isAuth: true,
            token: token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error" });
    }
}));
router.post("/checktoken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        const SECRET_KEY = config_1.default.get("PRIVATE_KEY");
        const candidate = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        if (!candidate)
            throw new Error;
        res.status(200).json({ isAuth: true });
    }
    catch (err) {
        return res.status(400).json({ isAuth: false });
    }
}));
router.post("/addToBasket", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, productBasket } = req.body;
        const SECRET_KEY = config_1.default.get("PRIVATE_KEY");
        const candidate = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        if (!candidate)
            throw new Error;
        const user = yield SchemeUser_1.default.findById(candidate.userId);
        for (let i = 0; i < productBasket.length; i++) {
            user.productBasket.push(productBasket[i]);
        }
        yield user.save();
        return res.status(200).json({ message: user.productBasket });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error" });
    }
}));
exports.default = router;
