
//Aula 5 - Pilhas 
// pilhas seguem o principio que o ultimo elemento inserido sempre será o primeiro a ser removido
// filas seguem o principio que o primeiro elemento inserido sempre será o primeiro a ser removido
// as pilhas são stacks e as filas são queues
// os final da pilhas é recolhecido como o topo, e o lado oposto é a base


class Stack {
    constructor( ) {
        this.items = [];
    }


// criando uma propia classe para representar a pilha
// push(elemento(s~)) - adiciona um novo elemento(ou varios elementos) ao topo da pilha 

//  - remove o elemento do topo da pilha. também devolve o elemento removido
// peek() - retorna o elemento do topo da pilha, mas não remove
// isEmpty() - retorna true se a pliha não contiver nenhum elemento e false se o tamanho da pilha for maior que 0
// size() - retorna o número de elementos na pilha

push(e){

    this.items.push(e);
}


pop(){
    return this.items.pop();
}

peek(){
    return this.items[this.items.length - 1];
}

isEmpty(){
    return this.items.length === 0;
}

size(){ 
    return this.items.length;
}

clear(){
    this.items = [];
}

print(){
    console.log(this.items.toString());
}

}


const stack = new Stack();

//console.log(stack.isEmpty()); 

stack.push(1);
stack.push(7);

console.log(stack.size(), stack.isEmpty(), stack.peek());

stack.print();

function decimalToBinary(decNumber){
    var restStack = new Stack(),
    rest, 
    binaryString = '';

    while (decNumber > 0){
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);

    }

    while(!restStack.isEmpty()){
        binaryString += restStack.pop().toString();

    }
    return binaryString;

}



console.log(decimalToBinary(10));
console.log(decimalToBinary(15640));
console.log(decimalToBinary(958))
