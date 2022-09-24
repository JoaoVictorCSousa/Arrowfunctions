"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imc = void 0;
var imc = function (peso, altura) {
    return Math.round(peso / Math.pow(altura, 2));
};
exports.imc = imc;
