JOAO = {
    salario: 500.00,
    vendas: 1230.30
}

PEDRO = {
    salario: 700.00,
    vendas: 0.00
}

MANGOJATA = {
    salario: 1700.00,
    vendas: 1230.50
} 


const salarioFinal1 = JOAO.salario + (JOAO.vendas * (15.00 / 100.00))
const salarioFinal2 = PEDRO.salario + (PEDRO.vendas * (15.00 / 100.00))
const salarioFinal3 = MANGOJATA.salario + (MANGOJATA.vendas * (15.00 / 100.00))

console.log(`TOTAL = R $ ${salarioFinal3.toFixed(2)}`)