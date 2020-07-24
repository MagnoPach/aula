
produto1 = {
    codigo: 12,
    unidades: 1,
    preço: 5.30
}

produto2 = {
    codigo: 16,
    unidades: 2,
    preço: 5.10
}

const valor = (produto1.unidades * produto1.preço) + (produto2.unidades * produto2.preço)

console.log(`VALOR A PAGAR: R $ ${valor.toFixed(2)}`)