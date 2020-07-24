const area21 = {
    A: 3.0,
    B: 4.0,
    C: 5.2
}

const area2 = {
    A: 12.7,
    B: 10.4,
    C: 15.2
}

const pi = 3.14159

const triangulo = (area2.A * area2.C) / 2
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)

const circulo = pi * (area2.C * area2.C)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)

const trapezio = ((area2.A + area2.B) / 2) * area2.C
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)

const quadrado = area2.B * area2.B
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)

const retangulo = area2.A * area2.B
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)