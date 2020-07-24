const valores = [
    {
        A: 7,
        B: 14,
        C: 106
    },
    {
        A: 217,
        B: 14,
        C: 6
    }
]

const maiorAB = (valores[1].A + valores[1].B + Math.abs(valores[1].A - valores[1].B)) / 2
const maiorABC = (maiorAB + valores[1].C + Math.abs(maiorAB - valores[1].C)) / 2

console.log(`${maiorABC} eh o maior`)