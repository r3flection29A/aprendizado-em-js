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


// Encontrando palavras em strings
// Verificar se a frase tem a palavra amor

let p = "Quero viver um amor!"
console.log(phrase.includes("amor"))

// vai responder como true

// Criar um array com construtor

let arr = new Array(1, 2, 3, 4)
console.log(arr)

// Contar elementos de um array

console.log(['a', 'b', 'c'].length)

// Transformar uma cadeia de caracteres em elementos de um array

let cadeia = "manipulação"
console.log(Array.from(cadeia))

// from -> transforma em um array




// Manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um elemento no array
console.log(techs.push("nodejs"))
// adicionar no começo
console.log(techs.unshift("sql"))
// remover um intem no fim
console.log(techs.pop())
// remover do começo
console.log(techs.shift())
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
console.log(techs.splice(1, 1))
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)