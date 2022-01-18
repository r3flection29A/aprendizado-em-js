// Eventos

function print() {
    console.log('print')
}

const i = document.querySelector('input')
i.onkeydown = () => {
    console.log('rodei')
} 

const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

// argumento event 

i.onkeyup = (event) => {
    console.log(event.currentTarget)
} 