const ponto1 = [
    {
        x1: 1.0,
        y1: 7.0
    },
    {
        x2: 5.0,
        y2: 9.0
    }
]

const ponto2 = [
    {
        x1: -2.5,
        y1: 0.4
    },
    {
        x2: 12.1,
        y2: 7.3
    }
]

const ponto3 = [
    {
        x1: 2.5,
        y1: -0.4
    },
    {
        x2: -12.2,
        y2: 7.0
    }
]


const distancia = Math.sqrt(Math.pow((ponto3[1].x2 - ponto3[0].x1),2) + Math.pow((ponto3[1].y2 - ponto3[0].y1),2))
console.log(distancia.toFixed(4))