// for

for (let i = 100; i > 0; i--) {
    console.log(i)
} 
// vai rodar 100 até 1

for (let i = 20; i > 0; i--) {
    if (i === 10) {
        break // para a execução
    }
    console.log(i)
}

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        continue // pula o 5 e continua a execução
    }
    console.log(i)
}


// while

let i = 0
while (i < 10) {
    console.log(i)
    i++
}


// for...of

let names = ['João', 'Paulo', 'Pedro', 'Marcelo']

for (let name of names) {
    console.log(name)
}


// for in

let person = {
    name: "João",
    age: 17,
    weight: 75.6
}

for (let property in person) {
    console.log(property) // vai imprimir as propiedades
    console.log(person[property]) // vai imprimir os atributos
}
