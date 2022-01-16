const element = document.querySelector('input')

element.value = "Valor que eu quiser"

const h = document.querySelector('h1')
h.innerHTML = 'Olá<strong>!</strong>'

// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID)