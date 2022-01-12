// Forma de agrupar códigos, explicar o código, entre outros.

function andar() {
    console.log("Andando...")
}

// chamando a function

andar()

// parâmetros 

const sum = function(n1, n2) { // função anônima
    console.log(n1+n2) // n1 e n2 são parâmetros
}

// chamando com argumentos

sum(2,3) // 2 e 3 são argumentos

// retornando valores => toda função retorna algo, se não tiver
// a palavra chave return ela retorna undefined

const sub = function(n1, n2) {
    total = n1 - n2
    return total
}



// arrow function

const sayMyName = (name) => {
    console.log(name)
}

// callback function


function number(n) {
    console.log(n)
}

number(
    () => {
        console.log('ESTOU EM UM CALLBACK')
    }
)


/* 
    function() constructor

    * expressão new
    * criar novo objeto 
    * this keyword
*/

function Person(name) {
    this.name = name // this, NESSE CASO, está se referenciando ao joao 
}
const joao = new Person('João') // se tornou uma function construtora, vai retornar um objeto
const mayk = new Person('Mayk')
console.log(joao) // vai retornar Person {name: João}
console.log(mayk) // vai retornar Person {name: Mayk}
