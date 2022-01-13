// if e else

let temp = 38

if (temp >= 38) {
    console.log('Febre')
} else if (temp <= 37.5 && temp >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


// switch

function calc(n1, operator, n2) {
    let result

    switch (operator) {
        case '+':
            result = n1 + n2
            break;
        case '-':
            result = n1 - n2
            break;
        case '*':
            result = n1 * n2
            break;
        case '/':
            result = n1 / n2
            break;
        default:
            console.log('Operador desconhecido')
            break;
    }

    return result
}


// throw e try/catch


// throw
function sayMyName(name = '') {
    if (name == '') {
        throw new Error("Nome é necessário")
    }
}

// try/catch

try {
    sayMyName()
} catch (e) {
    console.log(e)
}