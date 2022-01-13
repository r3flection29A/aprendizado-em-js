/* 
    new 

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('João')
let age = new Number(17)


/* 
    Operadores unários
    
    * typeof
    * delete
*/

const person = {
    name: 'João',
    age: 17
}
delete person.age


/* 
    Operadores aritméticos
*/

console.log(1*2) // multiplicação
console.log(12/2) // divisão
console.log(20+20) // soma
console.log(20-10) // subtração
console.log(12%3) // resto da divisão
let n1 = 7
console.log(n1++) // incremento
let n2 = 8
console.log(n2--) // decremento
console.log(2**2) // exponencial 


/*
    Grouping operator ( )
*/

let total = (2+3) * 5
console.log(total)


/*
    Operadores de comparação
*/

let one = 1
let two = 2

console.log(one == two) // -> vai ser false

// !=

console.log(one != two) // -> vai ser true


/* 
    Estritamente igual e diferente
*/

let num = 1
let num2 = 2

// === estritamente igual
console.log(one === "1") // -> false
console.log(one === 1) // -> true

// !== estritamente diferente
console.log(two !== "2") // -> true
console.log(two !== 2) // -> false


/* 
    Maior que, menor que (igual)
*/

// maior
console.log(num > num2) // -> false

// maior ou igual
console.log(num >= num2) // -> false

// menor 
console.log(num < num2) // -> true

// menor ou igual
console.log(num <= num2) // -> true


/* 
    Assignment -> operadores de atribuição
*/

let x
x = 1

x += 2 // 3
x -= 1 // 2


/* 
    Operadores lógicos
*/

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo) // true

// OR ||
console.log(pao && queijo) // true. (um tem que ter queijo)

// NOT !
console.log(!pao) // false


/* 
    Operador condicional ternário
*/

let p = true
let q = true

const niceBreakfast = p && q ? 'Bom café' : 'Café ruim'

let age = 16

const canDrive = age >= 18 ? 'Sim' : 'Não'


/* 
    Operadores de string
*/

// comparação
console.log('a' == 'b') // false

// concatenação
console.log('a'+'a')


/*
    Falsy
    * Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(0 ? 'verdade' : 'falso')


/* 
    Truthy
    * Quando o valor é considerado true 

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(1 ? "verdade" : "falso")




