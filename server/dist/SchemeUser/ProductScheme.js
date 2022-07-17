"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productBasket = new mongoose_1.Schema({
    nameProduct: {
        type: String,
        required: true,
    },
    priceProduct: {
        type: Number,
        required: true,
    },
    numberOf: {
        type: Number,
        required: true,
    }
});
exports.default = productBasket;
