"use strict";

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const clothesSchema = new Schema({
    _entryDate: {
        type: Date,
        default: Date.now
    },
    code: {
        type: String,
        index: { unique: true },
        minlength: [2, 'O código deve ter ao menos duas letras!'],
        required: [true, 'O código é obrigatório!']
    },
    type: {
        type: String,
        minlength: [2, 'O tipo deve ter ao menos duas letras!'],
        required: [true, 'O tipo é obrigatório!']
    },
    brand: {
        type: String,
        minlength: [2, 'A marca deve ter ao menos duas letras!'],
        required: [true, 'A marca é obrigatório!']
    },
    description: {
        type: String
    },
    size: {
        type: String,
        enum: ['PP', 'P', 'M', 'G', 'GG'],
        message: 'O tamanho não existe!',
        required: [true, 'O tamanho é obrigatório!']
    },
    color: {
        type: String,
        minlength: [2, 'A cor deve ter ao menos duas letras!'],
        required: [true, 'A cor é obrigatória!']
    },
    tagPrice: {
        type: Number,
        min: [0, 'O valor da etiqueta deve ser maior que zero!'],
        required: [true, 'O valor da etiqueta é obrigatório!']
    },
    buyPrice: {
        type: Number,
        min: [0, 'O valor na compra deve ser maior que zero!'],
        required: [true, 'O valor na compra é obrigatório!']
    },
    suggestedPrice: {
        type: Number,
        min: [0, 'O valor sugerido deve ser maior que zero!'],
        required: [true, 'O valor sugerido deve é obrigatório!']
    },
    amount: {
        type: Number,
        min: [0, 'A quantidade em estoque deve ser maior ou igual a zero!'],
        default: 0
    }
});

module.exports = mongoose.model('clothes', clothesSchema);
