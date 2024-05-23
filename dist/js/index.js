"use strict";
let x = 0;
x = 10;
console.log(x);
let numeros = [1, 2, 3];
console.log(numeros);
// tuplas
// é um array com vários tipos, segue sintaxe abaixo
let minhaTupla;
minhaTupla = ["Allyson", 28];
console.log(minhaTupla);
// Criar json tipado
let pessoa = {
    nome: "Allyson",
    telefone: "11 95435-7910"
};
console.log(pessoa);
// union type - Você diz que uma variavel pode ter apenas dois tipos exemplo abaixo
let id;
id = 10;
console.log(id);
id = "blá blá";
console.log(id);
let exemplo;
exemplo = "Olá";
console.log(exemplo);
exemplo = 100;
console.log(exemplo);
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    nome: "Camisa",
    tamanho: Size.M
};
console.log(camisa);
// funções - sintaxe
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(10, 8));
console.log(soma(19, 8));
