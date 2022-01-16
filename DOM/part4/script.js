// Navegando pelos elementos
// parentNode / parentElement

const h = document.querySelector('h1')
console.log(h.parentElement) // vai ser o header

// Navegando pelos elementos filhos
// childNodes / children

const b = document.querySelector('body')
console.log(b.childNodes)

// firstChild / firstElementChild
console.log(b.firstElementChild)

// lastChild / lastElementChild
console.log(b.lastElementChild)

// Navegando pelos irmãos 
// nextSibling / nextElementSibling
const el = document.querySelector('header')
console.log(el.nextElementSibling)

