let x: number = 0;
x = 10;
console.log(x);

let numeros: number[] = [1, 2, 3];
console.log(numeros);

// tuplas
// é um array com vários tipos, segue sintaxe abaixo

let minhaTupla: [string, number];

minhaTupla = ["Allyson", 28];

console.log(minhaTupla);

// Criar json tipado

let pessoa: { nome: string, telefone: string } = {
    nome: "Allyson",
    telefone: "11 95435-7910"
};

console.log(pessoa);

// union type - Você diz que uma variavel pode ter apenas dois tipos exemplo abaixo

let id: string | number;
id = 10;
console.log(id);
id = "blá blá";
console.log(id);

// type alias - Você dá o nome pra um tipo, ex abaixo :

type stringOrNumber = string | number;
let exemplo: stringOrNumber;
exemplo = "Olá";
console.log(exemplo);
exemplo = 100;
console.log(exemplo);

// enum

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    nome: "Camisa",
    tamanho: Size.M
}

console.log(camisa);

// funções - sintaxe

function soma(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(soma(10, 8));
console.log(soma(19, 8));