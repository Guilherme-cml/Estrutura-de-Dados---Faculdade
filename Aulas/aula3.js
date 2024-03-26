
//Aula 3


// Orientação a Objetos


// Há duas formas de instanciar objetos

//var obj = new Object();

//var obj2 = {}

// Criando um objeto completo

obj = {
    nome :{
        primeiro: 'Joaquim',
        segundo: 'Antonio'
    },
    endereco: 'QsQ 13  casa 12' 
}

console.log(obj.endereco);

//Decalrando uma classe constructor

function Book(title, pages, isbn){

    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
//podemos declarar funções dentro da definição da classe
    this.printIsbn = function(){

        console.log(this.isbn);
    }
}


var book = new Book ('EStrutura de Dados', 406, '123456789');

console.log(book.title)
book.title = 'Nvo titulo'
console.log(book.title)
console.log('Este livro possui: '+''+book.pages+' ' +'páginas.');

//uma classe pode conter funções 
Book.prototype.printTitle = function(){

    console.log(this.title);
}

book.printTitle();



