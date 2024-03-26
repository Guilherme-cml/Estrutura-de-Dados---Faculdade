// Arrays


//podemos declarar arrays de duas formas

// let dias = new Array();


let dias = [];


dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];


for(let dia of dias){ console.log(dia)}

// podemos imprimir os primeiros 20 numeors da sequência de Fibonacci

const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci.join('  '));


for(let i = 0; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}


let num = [1,2,3,4,5,6,7,8,9,10];

//num[num.length] = 11;
num.push(11);
console.log(num);

// para converter em string é só concaternar com virgula usando o join

console.log(num.join(', '));

//adicionando o '-1' na primeira posição do array

/*function adcionaPrimeiro(n){
    for(let i = num.length; i >=0; i--){
        num[i] = numbers [i- 1];
    }
    num[0] = n;
}
 
adicionaPrimeiro(-1);*/

//também podemos usar a função pronta
num.unshift(-1);
num.unshift(-2);

// Para remover ao final usamos o .pop()

num.pop();
console.log(num.join(', '));

// Os Metodos .push() e .pop() permitem que um array emule uma estrututra de dados stack.

// para remover o primeiro elemento podemos usar um for sobrescrevendo o primeiro elemento


for(let i = 0; i < num.length; i++){
    num[i] = num[i + 1];
}

console.log(num);
//para remover o o valor podemos criar um metodo 

Array.prototype.reIndex = function(array){
    const newArray = [];
    for (var i = 0 ; i < array.length; i++){
        if (array[i]!== undefined){
            newArray.push(array[i]);

    }}
    return newArray;
}
Array.prototype.removeFirstP = function(){
for(var i = 0; i < this.length; i++){
    this[i] = this[i + 1];
}
    return this.reIndex(this);

}

num = num.removeFirstP();

console.log(num);

// também podemos remover do inicio usando o .shift()

num = [1,2,3,4,5,6,7,8,9,10];

num.shift();
console.log(num);

// Os métodos .shift() e .unshift() permitem que um array emule uma estrutura de dados queue.


//para remover elemnetos de uma posição especifiica usamos os .splice()

num = [1,2,3,4,5,6,7,8,9,10];
num.splice(1,2);

// sempre usamos os metodos .splice(), .pop() e .push() para manipular arrays, pois eles já fazem a reindexação dos arrays modificados



// Arrays Bidimensionais e multidimensionais

// a principio o Js não tem suporte para arrays multidimensionais mas usando um array de array podemos fazer 

var m1 =[1,3,5,7,9];
var m2 = [2,4,6,8,10];

var matrix1 = []
matrix1[0] = m1;
matrix1[1] = m2;

function printMatrix(m){
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            console.log(m[i][j]);
        }
    }}

    printMatrix(matrix1);

// para exibir um array bidimensional no console podemos usar o console.table

    console.table(matrix1);

//também podemos trabalhar com arrays muldidimensionais no Js


const matrix = [];

for (var i= 0 ; i < 3; i++){

    matrix[i] = [];
    for(var j = 0; j < 3; j++){
        matrix[i][j] = []
        for(var z = 0; z < 3; z++){
            matrix[i][j][z] = i + j + z;
        }
    }
}

console.table(matrix);


// Junção de arrays podem ser feitas usando a função .concat()
const zero = 0 ;
const pNum = [1,2,3];
const nNum = [-3,-2,-1];

let numbers = pNum.concat(zero, nNum);


//iteração de arrays

// o metodo every() itera pelos elementos de um array até que se encontre um valor false


num = [1,2,3,4,5,6,7,8,9,10];

function isEven(n){
    console.log(n);
    return (n % 2 === 0) ? true : false;

}

num.every(isEven);
//também temos o .some() que faz o iverso
num.some(isEven);


// para fazer a iteração em todo array, independente de tudo podemos usar o forEach()

num.forEach(x => console.log(x % 2 === 0));

// a lingaugem também tem dois metodos iteradors que devolvem um novo array como resultado

const map = num.map(isEven)

console.log(map);

//também temos o filter() que filtra o array, devolvendo tudo que for true 

const filter = num.filter(isEven);

console.log(filter);
