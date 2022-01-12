/* 
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

// Exemplos: 

var a = "Joao".length
console.log(a)



/* 
    Type conversion vs Type coersion

    * Alteração de um tipo de dado
*/

console.log('9' + 5) // transformou o tipo number para string
console.log(Number('9') + 5)



// Manipulando Strings e Números
// Transformar String em número e número em string

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))


// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let word = "Cacetada"
console.log(word.length)
let n1 = 123
console.log(String(number).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let n = 208204284022.424224
console.log(n.toFixed(2).replace(".", ","))
// toFixed -> fixa duas casas decimais
// replace -> faz o replace pelo o que o user deseja

// Transformar letras minúsculas em maiúsculas e o contrário

let w = "Programar é legal!"
console.log(w.toUpperCase())
console.log(w.toLowerCase())

// Separe um texto que contem espaços, em um novo array onde cada texto
// é uma posição do array. Depois disso, transforme o array em um texto e onde eram os espaços coloque _

let phrase = "Eu quero viver um amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// split -> transforma um array com espaços
// join -> implementa um caractere

