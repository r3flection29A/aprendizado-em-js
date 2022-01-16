// create elements

const div = document.createElement('div')
div.innerHTML = "Olá mundo!" 

// append 

const b = document.querySelector('body')
b.append(div)

// insertBefore
const s = document.querySelector('script')
b.insertBefore(div, s)
