const valores = [
    {
        A: 10.0,
        B: 20.1,
        c: 5.1
    },
    {
        A: 0.0,
        B: 20.0,
        c: 5.0
    },
    {
        A: 10.3,
        B: 203.0,
        c: 5.0
    },
    {
        A: 10.0,
        B: 3.0,
        c: 5.0
    }

]

const delta = Math.pow(valores[0].B,2) - 4 * valores[0].A * valores[0].c
const R1 = (- valores[0].B + Math.sqrt(delta)) / (2 * valores[0].A)
const R2 = (- valores[0].B - Math.sqrt(delta)) / (2 * valores[0].A)

if(delta < 0 || valores[0].A == 0) {
    console.log("impossivel calcular")
} else {
    console.log(`R1 = ${R1.toFixed(5)}`)
    console.log(`R2 = ${R2.toFixed(5)}`)
}